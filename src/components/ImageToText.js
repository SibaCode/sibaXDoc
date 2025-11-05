// src/components/ImageToText.js
import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './ImageToText.css';

const ImageToText = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const processImage = async (imageFile) => {
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
    } catch (error) {
      console.error('Error processing image:', error);
      setText('Error processing image. Please try again.');
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

  const handleCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' }
        });
        
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        
        video.onloadedmetadata = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0);
          
          canvas.toBlob((blob) => {
            const file = new File([blob], 'capture.jpg', { type: 'image/jpeg' });
            setImage(URL.createObjectURL(blob));
            processImage(file);
            stream.getTracks().forEach(track => track.stop());
          }, 'image/jpeg', 0.8);
        };
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check permissions and try again.');
      }
    } else {
      alert('Camera not supported on this device');
    }
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
    
    // Encode the text for URL
    const encodedText = encodeURIComponent(text);
    const deepSeekUrl = `https://chat.deepseek.com/?q=${encodedText}`;
    window.open(deepSeekUrl, '_blank');
  };

  const openInChatGPT = () => {
    if (!text) return;
    
    // ChatGPT doesn't have a direct URL API, but we can prepare the text
    // User can manually paste it
    copyToClipboard();
    alert('Text copied to clipboard! You can now paste it into ChatGPT.');
    
    // Optional: Open ChatGPT website
    window.open('https://chat.openai.com', '_blank');
  };

  const clearAll = () => {
    setText('');
    setImage(null);
    setProgress(0);
    setCopied(false);
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
          onClick={handleCapture}
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