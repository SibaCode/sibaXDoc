// src/components/LiveInputMastery.js
import React, { useState } from 'react';
import './LiveInputMastery.css';

const LiveInputMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all live input examples
  const [basicText, setBasicText] = useState('Start typing here...');
  const [twitterText, setTwitterText] = useState('');
  const [markdown, setMarkdown] = useState('# Hello World\n\nThis is **bold** text.');
  const [signatureName, setSignatureName] = useState('John Doe');
  const [signatureTitle, setSignatureTitle] = useState('Software Engineer');
  const [signatureEmail, setSignatureEmail] = useState('john.doe@company.com');
  const [signaturePhone, setSignaturePhone] = useState('+1 (555) 123-4567');
  const [bio, setBio] = useState('Passionate developer who loves creating amazing user experiences. Currently working on exciting projects and always learning new technologies.');
  const [englishText, setEnglishText] = useState('Hello, how are you today?');
  const [spanishText, setSpanishText] = useState('Hola, ¿cómo estás hoy?');
  const [functionName, setFunctionName] = useState('calculateTotal');
  const [functionDesc, setFunctionDesc] = useState('Calculates the total price including tax');
  const [parameters, setParameters] = useState('price, taxRate');
  const [productName, setProductName] = useState('Wireless Bluetooth Headphones');
  const [features, setFeatures] = useState('Noise cancellation, 30-hour battery, Comfort fit');
  const [price, setPrice] = useState('99.99');
  const [socialPost, setSocialPost] = useState('Just launched my new React component library! 🚀\n\nFeatures include:\n• Easy to use\n• Fully customizable\n• Great documentation\n\nCheck it out: #React #JavaScript');
  const [blogTopic, setBlogTopic] = useState('React Hooks');
  const [blogAdjective, setBlogAdjective] = useState('Ultimate');

  // Universal Live Input Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function LiveInputSkeleton() {
  // 🎯 STEP 1: STATE FOR INPUT VALUE
  const [inputValue, setInputValue] = useState('');
  
  // 🎯 STEP 2: INPUT HANDLER
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* 🎯 STEP 3: INPUT FIELD */}
      <input 
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      
      {/* 🎯 STEP 4: LIVE DISPLAY */}
      <p>{inputValue}</p>
      
      {/* 🎯 STEP 5: CHARACTER COUNT */}
      <p>Characters: {inputValue.length}</p>
    </div>
  );
}`;

  // Live Input Examples
  const liveInputExamples = [
    {
      title: "Basic Live Paragraph",
      description: "Simple textarea with live preview and character count",
      code: `function BasicLiveParagraph() {
  const [text, setText] = useState('Start typing here...');
  
  return (
    <div>
      <h3>📝 Basic Live Paragraph</h3>
      
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        rows={4}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #007bff',
          borderRadius: '5px'
        }}
      />
      
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '5px'
      }}>
        <h4>Live Preview:</h4>
        <p>{text}</p>
      </div>
      
      <p><strong>Characters:</strong> {text.length}</p>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-input-demo">
          <h3>📝 Basic Live Paragraph</h3>
          
          <textarea 
            value={basicText}
            onChange={(e) => setBasicText(e.target.value)}
            placeholder="Type your text here..."
            rows={4}
            className="live-textarea"
          />
          
          <div className="live-preview">
            <h4>Live Preview:</h4>
            <p>{basicText}</p>
          </div>
          
          <p className="character-count">
            <strong>Characters:</strong> {basicText.length}
          </p>
        </div>
      )
    },
    {
      title: "Twitter-Style Character Counter",
      description: "Character counter with limit and warning indicators",
      code: `function CharacterCounter() {
  const [text, setText] = useState('');
  const MAX_CHARS = 280;
  
  return (
    <div>
      <h3>🐦 Twitter-Style Counter</h3>
      
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening? (280 characters max)"
        rows={3}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: text.length > MAX_CHARS ? '2px solid #dc3545' : '2px solid #28a745',
          borderRadius: '5px'
        }}
      />
      
      <p style={{
        color: text.length > MAX_CHARS ? '#dc3545' : 
               text.length > MAX_CHARS * 0.8 ? '#ffc107' : '#28a745',
        fontWeight: 'bold'
      }}>
        {text.length} / {MAX_CHARS} characters
        {text.length > MAX_CHARS && ' ⚠️ Too long!'}
      </p>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-input-demo">
          <h3>🐦 Twitter-Style Counter</h3>
          
          <textarea 
            value={twitterText}
            onChange={(e) => setTwitterText(e.target.value)}
            placeholder="What's happening? (280 characters max)"
            rows={3}
            className={`live-textarea ${twitterText.length > 280 ? 'error' : twitterText.length > 224 ? 'warning' : ''}`}
          />
          
          <p className={`character-counter ${twitterText.length > 280 ? 'error' : twitterText.length > 224 ? 'warning' : 'success'}`}>
            {twitterText.length} / 280 characters
            {twitterText.length > 280 && ' ⚠️ Too long!'}
          </p>
        </div>
      )
    },
    {
      title: "Email Signature Generator",
      description: "Multiple inputs that update a professional email signature",
      code: `function EmailSignatureGenerator() {
  const [name, setName] = useState('John Doe');
  const [title, setTitle] = useState('Software Engineer');
  const [email, setEmail] = useState('john.doe@company.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  
  return (
    <div>
      <h3>📧 Email Signature Generator</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* INPUTS */}
        <div>
          <div style={{ marginBottom: '10px' }}>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
        </div>
        
        {/* PREVIEW */}
        <div>
          <h4>Signature Preview:</h4>
          <div style={{
            padding: '20px',
            border: '2px dashed #6c757d',
            backgroundColor: 'white',
            fontFamily: 'Arial, sans-serif'
          }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '18px' }}>{name}</p>
            <p style={{ color: '#666', margin: '0 0 5px 0', fontStyle: 'italic' }}>{title}</p>
            <p style={{ color: '#007bff', margin: '0 0 5px 0' }}>📧 {email}</p>
            <p style={{ color: '#28a745', margin: '0' }}>📞 {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-input-demo">
          <h3>📧 Email Signature Generator</h3>
          
          <div className="signature-generator">
            <div className="inputs-column">
              <input 
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder="Full Name"
                className="signature-input"
              />
              <input 
                value={signatureTitle}
                onChange={(e) => setSignatureTitle(e.target.value)}
                placeholder="Job Title"
                className="signature-input"
              />
              <input 
                value={signatureEmail}
                onChange={(e) => setSignatureEmail(e.target.value)}
                placeholder="Email"
                className="signature-input"
              />
              <input 
                value={signaturePhone}
                onChange={(e) => setSignaturePhone(e.target.value)}
                placeholder="Phone"
                className="signature-input"
              />
            </div>
            
            <div className="preview-column">
              <h4>Signature Preview:</h4>
              <div className="signature-preview">
                <p className="signature-name">{signatureName}</p>
                <p className="signature-title">{signatureTitle}</p>
                <p className="signature-email">📧 {signatureEmail}</p>
                <p className="signature-phone">📞 {signaturePhone}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Live Bio Generator",
      description: "Professional bio generator with statistics",
      code: `function LiveBioGenerator() {
  const [bio, setBio] = useState('Passionate developer who loves creating amazing user experiences. Currently working on exciting projects and always learning new technologies.');
  
  return (
    <div>
      <h3>👤 Live Bio Generator</h3>
      
      <textarea 
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Write your bio here..."
        rows={5}
        style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '2px solid #6f42c1',
          borderRadius: '8px'
        }}
      />
      
      <div style={{
        marginTop: '20px',
        padding: '25px',
        backgroundColor: '#f8f9fa',
        border: '2px solid #6f42c1',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h4 style={{ color: '#6f42c1', marginBottom: '15px' }}>Your Professional Bio</h4>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.6',
          fontStyle: 'italic'
        }}>
          "{bio}"
        </p>
      </div>
      
      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#e9ecef',
        borderRadius: '5px'
      }}>
        <p>
          <strong>📊 Stats:</strong> 
          {bio.length} characters • 
          {bio.trim() ? bio.trim().split(/\\s+/).length : 0} words • 
          {(bio.match(/\\n/g) || []).length + 1} lines
        </p>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-input-demo">
          <h3>👤 Live Bio Generator</h3>
          
          <textarea 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write your bio here..."
            rows={5}
            className="bio-textarea"
          />
          
          <div className="bio-preview">
            <h4>Your Professional Bio</h4>
            <p className="bio-content">"{bio}"</p>
          </div>
          
          <div className="bio-stats">
            <p>
              <strong>📊 Stats:</strong> 
              {bio.length} characters • 
              {bio.trim() ? bio.trim().split(/\s+/).length : 0} words • 
              {(bio.match(/\n/g) || []).length + 1} lines
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Blog Title Generator",
      description: "Dynamic blog title generator based on topic and adjectives",
      code: `function BlogTitleGenerator() {
  const [topic, setTopic] = useState('React Hooks');
  const [adjective, setAdjective] = useState('Ultimate');
  
  const titles = [
    \`The \${adjective} Guide to \${topic}\`,
    \`10 \${topic} Tips Every Developer Should Know\`,
    \`Mastering \${topic}: From Beginner to Pro\`,
    \`Why \${topic} is Changing the Game\`,
    \`\${topic} Best Practices for 2024\`
  ];
  
  return (
    <div>
      <h3>✍️ Blog Title Generator</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Your topic"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
        />
        <input 
          value={adjective}
          onChange={(e) => setAdjective(e.target.value)}
          placeholder="Adjective (e.g., Ultimate, Complete)"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>
      
      <div>
        <h4>Generated Titles:</h4>
        {titles.map((title, index) => (
          <div 
            key={index}
            style={{
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e9ecef';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-input-demo">
          <h3>✍️ Blog Title Generator</h3>
          
          <div className="title-inputs">
            <input 
              value={blogTopic}
              onChange={(e) => setBlogTopic(e.target.value)}
              placeholder="Your topic"
              className="title-input"
            />
            <input 
              value={blogAdjective}
              onChange={(e) => setBlogAdjective(e.target.value)}
              placeholder="Adjective (e.g., Ultimate, Complete)"
              className="title-input"
            />
          </div>
          
          <div>
            <h4>Generated Titles:</h4>
            {[
              `The ${blogAdjective} Guide to ${blogTopic}`,
              `10 ${blogTopic} Tips Every Developer Should Know`,
              `Mastering ${blogTopic}: From Beginner to Pro`,
              `Why ${blogTopic} is Changing the Game`,
              `${blogTopic} Best Practices for 2024`
            ].map((title, index) => (
              <div key={index} className="title-suggestion">
                {title}
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { type: "Basic Text", fields: "Single textarea", usage: "Simple live preview", example: "Paragraph editor" },
    { type: "Character Counter", fields: "Text with limit", usage: "Social media posts", example: "Twitter counter" },
    { type: "Multi-Input", fields: "Multiple inputs", usage: "Form generators", example: "Email signature" },
    { type: "Live Preview", fields: "Input + display", usage: "Real-time feedback", example: "Bio generator" },
    { type: "Dynamic Generation", fields: "Input + templates", usage: "Content creation", example: "Blog titles" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a live character counter",
      solution: "Use Twitter-Style Counter example",
      tip: "Track input length and show warning when near limit"
    },
    {
      question: "Build a real-time bio generator", 
      solution: "Use Live Bio Generator example",
      tip: "Textarea input with live preview and stats"
    },
    {
      question: "Make an email signature generator",
      solution: "Use Email Signature Generator example",
      tip: "Multiple inputs that update a preview area"
    },
    {
      question: "Create a markdown preview",
      solution: "Use Markdown Preview example",
      tip: "Split editor and preview with basic formatting"
    }
  ];

  // Live Input Pattern Steps
  const liveInputPatternSteps = [
    {
      step: "1",
      title: "Input Value State",
      description: "Create state for input value: const [text, setText] = useState('');"
    },
    {
      step: "2",
      title: "Input Element",
      description: "Create input/textarea with value and onChange"
    },
    {
      step: "3", 
      title: "Live Display",
      description: "Show the input value in real-time"
    },
    {
      step: "4",
      title: "Add Statistics",
      description: "Show character count, word count, etc."
    },
    {
      step: "5",
      title: "Enhance UX",
      description: "Add limits, previews, and visual feedback"
    }
  ];

  // Pro Tips
  const proTips = [
    "Always connect value and onChange - Two-way data binding",
    "Use textarea for multi-line text - Better user experience",
    "Show character counts - Help users understand limits",
    "Provide live preview - Instant feedback is valuable",
    "Handle empty states - Show placeholder text when empty",
    "Use proper styling - Make it clear what's editable vs preview",
    "Add visual feedback - Color changes for warnings/errors",
    "Consider performance - Use debouncing for complex previews"
  ];

  // Cheat Sheet
  const cheatSheet = [
    {
      type: "Basic Live Input",
      code: `const [text, setText] = useState('');
<textarea 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>`
    },
    {
      type: "Character Counting",
      code: `<p>Characters: {text.length}</p>`
    },
    {
      type: "Word Counting",
      code: `<p>Words: {text.trim() ? text.trim().split(/\\s+/).length : 0}</p>`
    },
    {
      type: "Multiple Inputs",
      code: `const [name, setName] = useState('');
const [email, setEmail] = useState('');

// Use in preview
<p>{name} - {email}</p>`
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < liveInputExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : liveInputExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `📝 ${liveInputExamples.length}+ Examples` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Live Input Pattern' },
    { id: 'cheatsheet', label: '📋 Cheat Sheet' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="live-input-mastery-container">
      <header className="mastery-header">
        <h1>📝 Live Paragraph Pattern Mastery Kit</h1>
        <p>Master real-time input functionality with live previews - 10+ ready-to-use examples!</p>
      </header>

      <div className="mastery-content">
        {/* Navigation Tabs */}
        <nav className="mastery-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'examples') setCurrentExample(0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Universal Skeleton */}
          {activeTab === 'skeleton' && (
            <section className="skeleton-section">
              <h2>Universal Live Input Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY real-time input functionality - works for all examples!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="try-it">
                <h3>👉 Try It Yourself!</h3>
                <p>Copy and run this basic live input. Type in the box and watch it update everywhere instantly!</p>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {liveInputExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {liveInputExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{liveInputExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {liveInputExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{liveInputExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Live Input Types</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Input Type</div>
                  <div>Fields</div>
                  <div>Usage</div>
                  <div>Example</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.type}</strong></div>
                    <div>{item.fields}</div>
                    <div>{item.usage}</div>
                    <div>{item.example}</div>
                  </div>
                ))}
              </div>

              <div className="pattern-summary">
                <h3>🎯 Universal Live Input Pattern Works For:</h3>
                <div className="pattern-grid">
                  <div className="pattern-item">✅ Text Editors</div>
                  <div className="pattern-item">✅ Form Generators</div>
                  <div className="pattern-item">✅ Content Previews</div>
                  <div className="pattern-item">✅ Character Counters</div>
                  <div className="pattern-item">✅ Real-time Feedback</div>
                  <div className="pattern-item">✅ And many more!</div>
                </div>
              </div>
            </section>
          )}

          {/* Live Input Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Live Input Pattern</h2>
              
              <div className="steps-list">
                {liveInputPatternSteps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pattern-visual">
                <h3>🎯 Live Input Data Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">User Types</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">State Updates</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Preview Renders</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Stats Update</div>
                </div>
              </div>
            </section>
          )}

          {/* Cheat Sheet */}
          {activeTab === 'cheatsheet' && (
            <section className="cheatsheet-section">
              <h2>📋 Live Input Pattern Cheat Sheet</h2>
              
              <div className="cheatsheet-grid">
                {cheatSheet.map((item, index) => (
                  <div key={index} className="cheatsheet-item">
                    <h4>{item.type}</h4>
                    <pre><code>{item.code}</code></pre>
                  </div>
                ))}
              </div>

              <div className="usage-examples">
                <h3>🎯 Common Live Input Use Cases:</h3>
                <div className="usage-grid">
                  <div className="usage-item">
                    <h5>Content Editors</h5>
                    <p>Blog posts, articles, documentation</p>
                    <code>Live preview + stats</code>
                  </div>
                  <div className="usage-item">
                    <h5>Form Generators</h5>
                    <p>Email signatures, profiles, bios</p>
                    <code>Multiple inputs + preview</code>
                  </div>
                  <div className="usage-item">
                    <h5>Social Media</h5>
                    <p>Posts, tweets, captions</p>
                    <code>Character limits + counters</code>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Live Input Pattern Mock Interviews</h2>
              
              <div className="interviews-list">
                {mockInterviews.map((interview, index) => (
                  <div key={index} className="interview-item">
                    <div className="interview-question">
                      <h3>🎯 Question {index + 1}:</h3>
                      <p>"{interview.question}"</p>
                    </div>
                    <div className="interview-solution">
                      <h4>✅ Solution:</h4>
                      <p>{interview.solution}</p>
                    </div>
                    <div className="interview-tip">
                      <h4>💡 Tip:</h4>
                      <p>{interview.tip}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="interview-strategy">
                <h3>🎯 Live Input Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Identify Use Case</h4>
                    <p>What kind of live input is needed?</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Use Universal Pattern</h4>
                    <p>Apply the 5-step live input pattern</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Add Real-time Features</h4>
                    <p>Preview, counters, validation</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Enhance UX</h4>
                    <p>Visual feedback, stats, limits</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Live Input Pattern Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Live Input Problem!</h3>
                <p>You now have 10+ live input examples using one universal pattern! 🚀</p>
                <p>For ANY live input requirement: State → Input → Display → Stats → Enhance</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveInputMastery;