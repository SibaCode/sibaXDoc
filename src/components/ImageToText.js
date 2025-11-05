import React, { useState, useRef, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import './ImageToText.css';

const ImageToText = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [processingStatus, setProcessingStatus] = useState('idle');
  
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);
  const videoRef = useRef(null);

  const presetPrompts = {
    explain: "Explain this concept clearly and provide examples: ",
    solve: "Solve this problem step by step and explain the reasoning: ",
    summarize: "Summarize the key points and main ideas: ",
    clarify: "Clarify this question and what it's asking for: "
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.ctrlKey || event.metaKey) && text) {
        switch(event.key) {
          case 'c':
            copyToClipboard();
            break;
          case 'd':
            openInDeepSeek();
            break;
          case 'g':
            openInChatGPT();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [text]);

  const processImage = async (imageFile) => {
    setProcessingStatus('processing');
    setLoading(true);
    setText('');
    setProgress(0);
    setCopied(false);

    try {
      const { data: { text } } = await Tesseract.recognize(
        imageFile,
        'eng',
        { 
          logger: m => {
            if (m.status === 'recognizing text') {
              setProgress(Math.round(m.progress * 100));
            }
          }
        }
      );
      setText(text);
      setProcessingStatus('complete');
    } catch (error) {
      console.error('Error processing image:', error);
      setText('Error processing image. Please try again.');
      setProcessingStatus('error');
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      setImage(URL.createObjectURL(file));
      processImage(file);
    }
  };

  // Camera functions
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const cameraStream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment',
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          } 
        });
        
        setStream(cameraStream);
        setShowCamera(true);
        
        if (videoRef.current) {
          videoRef.current.srcObject = cameraStream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check permissions and try again.');
      }
    } else {
      alert('Camera not supported on this device');
    }
  };

  const captureFromCamera = () => {
    if (!videoRef.current || !stream) return;
    
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    
    // Draw current video frame to canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    canvas.toBlob((blob) => {
      const file = new File([blob], 'captured_question.jpg', { type: 'image/jpeg' });
      setImage(URL.createObjectURL(blob));
      processImage(file);
      
      // Stop camera and close preview
      stopCamera();
    }, 'image/jpeg', 0.9);
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const copyToClipboard = async () => {
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      textareaRef.current.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openInDeepSeek = () => {
    if (!text) return;
    
    const encodedText = encodeURIComponent(text);
    const deepSeekUrl = `https://chat.deepseek.com/?q=${encodedText}`;
    window.open(deepSeekUrl, '_blank');
  };

  const openWithPrompt = (promptType) => {
    if (!text) return;
    
    const prompt = presetPrompts[promptType] + text;
    const encodedPrompt = encodeURIComponent(prompt);
    const deepSeekUrl = `https://chat.deepseek.com/?q=${encodedPrompt}`;
    window.open(deepSeekUrl, '_blank');
  };

  const openInChatGPT = () => {
    if (!text) return;
    
    copyToClipboard();
    alert('Text copied to clipboard! You can now paste it into ChatGPT.');
    window.open('https://chat.openai.com', '_blank');
  };

  const clearAll = () => {
    setText('');
    setImage(null);
    setProgress(0);
    setCopied(false);
    setProcessingStatus('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-to-text-container">
      <header className="page-header">
        <h2>Image to Text Converter</h2>
        <p>Extract text from images and use it with AI assistants</p>
      </header>

      <div className="controls">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button 
          onClick={() => fileInputRef.current.click()}
          className="btn btn-primary"
        >
          Upload Image
        </button>
        <button 
          onClick={startCamera}
          className="btn btn-secondary"
        >
          Capture Photo
        </button>
        <button 
          onClick={clearAll}
          className="btn btn-clear"
        >
          Clear All
        </button>
      </div>

      {/* Quick Test Mode */}
      <div className="quick-actions">
        <h3>🚀 Test Question Processor</h3>
        <div className="quick-buttons">
          <button 
            onClick={startCamera}
            className="btn btn-primary btn-large"
          >
            📸 Capture Question
          </button>
          <button 
            onClick={() => openWithPrompt('solve')}
            className="btn btn-secondary"
            disabled={!text}
          >
            🧮 Solve Problem
          </button>
          <button 
            onClick={() => openWithPrompt('explain')}
            className="btn btn-success"
            disabled={!text}
          >
            💡 Explain Concept
          </button>
        </div>
        <div className="keyboard-hint">
          Shortcuts: Ctrl+C (Copy) • Ctrl+D (DeepSeek) • Ctrl+G (ChatGPT)
        </div>
      </div>

      {/* Camera Overlay */}
      {showCamera && (
        <div className="camera-overlay">
          <div className="camera-container">
            <div className="camera-header">
              <h3>📷 Capture Question</h3>
              <button onClick={stopCamera} className="btn btn-clear btn-small">
                ✕ Close
              </button>
            </div>
            
            <div className="camera-preview">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-video"
              />
              <div className="camera-frame">
                <div className="frame-guide">
                  <div className="frame-corner top-left"></div>
                  <div className="frame-corner top-right"></div>
                  <div className="frame-corner bottom-left"></div>
                  <div className="frame-corner bottom-right"></div>
                </div>
              </div>
            </div>
            
            <div className="camera-controls">
              <button 
                onClick={captureFromCamera}
                className="btn btn-primary btn-capture"
              >
                📸 Capture
              </button>
              <button 
                onClick={stopCamera}
                className="btn btn-clear"
              >
                Cancel
              </button>
            </div>
            
            <div className="camera-tips">
              <p>💡 Position the question within the frame and ensure good lighting</p>
            </div>
          </div>
        </div>
      )}

      <div className="content">
        {image && (
          <div className="preview-section">
            <h3>Image Preview</h3>
            <div className="image-preview">
              <img src={image} alt="Preview" />
            </div>
          </div>
        )}

        <div className="text-section">
          <h3>Extracted Text</h3>
          
          {processingStatus === 'complete' && (
            <div className="status-message processing-complete">
              ✅ Text extracted successfully! Ready for AI analysis.
            </div>
          )}

          {loading && (
            <div className="loading">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p>Processing... {progress}%</p>
            </div>
          )}
          
          {text && (
            <div className="text-result">
              <textarea 
                ref={textareaRef}
                value={text} 
                readOnly 
                rows="10"
                placeholder="Extracted text will appear here..."
              />
              <div className="text-actions">
                <button 
                  onClick={copyToClipboard}
                  className={`btn ${copied ? 'btn-success' : 'btn-primary'}`}
                >
                  {copied ? '✓ Copied!' : 'Copy Text'}
                </button>
                <button 
                  onClick={openInDeepSeek}
                  className="btn btn-secondary"
                >
                  Open in DeepSeek
                </button>
                <button 
                  onClick={openInChatGPT}
                  className="btn btn-success"
                >
                  Use with ChatGPT
                </button>
                <button 
                  onClick={() => setText('')}
                  className="btn btn-clear"
                >
                  Clear Text
                </button>
              </div>
            </div>
          )}

          {!text && !loading && (
            <div className="placeholder">
              <p>Upload an image or capture a photo to extract text</p>
              <div className="tips">
                <h4>How to use with AI assistants:</h4>
                <ul>
                  <li>Extract text from images, documents, or screenshots</li>
                  <li>Copy the text to clipboard for easy pasting</li>
                  <li>Open directly in DeepSeek for instant analysis</li>
                  <li>Use with ChatGPT for explanations and summaries</li>
                  <li>Perfect for translating, summarizing, or analyzing text</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageToText;