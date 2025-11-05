// src/components/HtmlElementsMastery.js
import React, { useState } from 'react';
import './HtmlElementsMastery.css';

const HtmlElementsMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const htmlElements = {
    text: [
      { element: '<h1>Main Heading</h1>', description: 'Largest heading' },
      { element: '<h2>Subheading</h2>', description: 'Medium heading' },
      { element: '<h3>Small Heading</h3>', description: 'Smaller heading' },
      { element: '<p>This is a paragraph</p>', description: 'Paragraph text' },
      { element: '<span>Inline text</span>', description: 'Inline text' }
    ],
    interactive: [
      { element: '<button>Click Me</button>', description: 'Basic button' },
      { element: '<input type="text" placeholder="Type here..." />', description: 'Text input' },
      { element: '<input type="email" placeholder="Email" />', description: 'Email input' },
      { element: '<textarea placeholder="Message"></textarea>', description: 'Multi-line input' },
      { element: '<select><option>Option 1</option><option>Option 2</option></select>', description: 'Dropdown' }
    ],
    lists: [
      { 
        element: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`, 
        description: 'Unordered List (bullets)' 
      },
      { 
        element: `<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>`, 
        description: 'Ordered List (numbers)' 
      }
    ],
    structural: [
      { element: '<header>...</header>', description: 'Page header' },
      { element: '<nav>...</nav>', description: 'Navigation' },
      { element: '<main>...</main>', description: 'Main content' },
      { element: '<section>...</section>', description: 'Content section' },
      { element: '<footer>...</footer>', description: 'Page footer' },
      { element: '<div>...</div>', description: 'Generic container' }
    ]
  };

  const templates = [
    {
      title: "Portfolio Page",
      description: "Basic portfolio page with navigation and content",
      code: `function PortfolioPage() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Welcome to my website</p>
      <button>View Projects</button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <input placeholder="Search..." />
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h1>My Portfolio</h1>
          <p>Welcome to my website</p>
          <button className="demo-btn">View Projects</button>
          <ul className="demo-list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <input placeholder="Search..." className="demo-input" />
        </div>
      )
    },
    {
      title: "Contact Form",
      description: "Contact form with inputs and submit button",
      code: `function ContactForm() {
  return (
    <form>
      <h2>Contact Us</h2>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <form className="demo-form">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" className="demo-input" />
            <input type="email" placeholder="Your Email" className="demo-input" />
            <textarea placeholder="Your Message" className="demo-textarea"></textarea>
            <button type="submit" className="demo-btn">Send Message</button>
          </form>
        </div>
      )
    },
    {
      title: "Navigation Menu",
      description: "Simple navigation menu with links",
      code: `function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <nav className="demo-nav">
            <ul className="demo-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      )
    },
    {
      title: "Product Card",
      description: "Product display card with details and action button",
      code: `function ProductCard() {
  return (
    <div>
      <h3>Product Name</h3>
      <p>Product description goes here</p>
      <span>$99.99</span>
      <button>Add to Cart</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <div className="product-card">
            <h3>Product Name</h3>
            <p>Product description goes here</p>
            <span className="price">$99.99</span>
            <button className="demo-btn">Add to Cart</button>
          </div>
        </div>
      )
    }
  ];

  const jsxRules = {
    correct: [
      { code: `{/* Single parent element */}\n<div>\n  <h1>Title</h1>\n  <p>Content</p>\n</div>`, description: 'Single parent element' },
      { code: `{/* Self-closing tags */}\n<input type="text" />\n<img src="image.jpg" alt="description" />\n<br />`, description: 'Self-closing tags' },
      { code: `{/* className instead of class */}\n<div className="container">Content</div>`, description: 'className not class' },
      { code: `{/* Proper attribute names */}\n<label htmlFor="name">Name</label>`, description: 'htmlFor not for' }
    ],
    mistakes: [
      { wrong: `{/* WRONG: Multiple root elements */}\n<h1>Title</h1>\n<p>Content</p>`, right: `{/* RIGHT: Single parent */}\n<div>\n  <h1>Title</h1>\n  <p>Content</p>\n</div>` },
      { wrong: `{/* WRONG: Unclosed tags */}\n<input type="text">\n<br>`, right: `{/* RIGHT: Self-closing */}\n<input type="text" />\n<br />` },
      { wrong: `{/* WRONG: Using class */}\n<div class="container">`, right: `{/* RIGHT: Using className */}\n<div className="container">` },
      { wrong: `{/* WRONG: Using for */}\n<label for="name">`, right: `{/* RIGHT: Using htmlFor */}\n<label htmlFor="name">` }
    ]
  };

  const quickFixes = [
    {
      problem: "Component returns multiple elements",
      wrong: `// ❌ Wrong\n<h1>Title</h1>\n<p>Content</p>`,
      right: `// ✅ Right\n<div>\n  <h1>Title</h1>\n  <p>Content</p>\n</div>\n\n// ✅ Also Right (no extra div)\n<>\n  <h1>Title</h1>\n  <p>Content</p>\n</>`
    },
    {
      problem: "Input not self-closing",
      wrong: `// ❌ Wrong\n<input type="text">\n<br>`,
      right: `// ✅ Right\n<input type="text" />\n<br />`
    },
    {
      problem: "Using HTML attributes instead of JSX",
      wrong: `// ❌ Wrong\n<div class="container">\n<label for="input">`,
      right: `// ✅ Right  \n<div className="container">\n<label htmlFor="input">`
    }
  ];

  const battlePlan = [
    {
      step: "1",
      title: "Read Requirements Carefully",
      description: "Note exact text content needed and identify all required element types"
    },
    {
      step: "2", 
      title: "Use the Skeleton",
      description: "Start with the universal HTML elements skeleton"
    },
    {
      step: "3",
      title: "Add Elements in Order", 
      description: "Headings → Text → Interactive → Lists → Structural elements"
    },
    {
      step: "4",
      title: "Verify Requirements",
      description: "Check all elements present, text matches, proper JSX syntax"
    },
    {
      step: "5",
      title: "Test & Submit",
      description: "Check for console errors and verify visual output"
    }
  ];

  const checklist = [
    "Single parent element wraps everything",
    "All required elements present", 
    "Text content matches requirements exactly",
    "Self-closing tags have /",
    "Using className not class",
    "Using htmlFor not for",
    "No React state used (unless specified)",
    "Proper list structure (<ul> + <li>)",
    "Component exports correctly",
    "No console errors"
  ];

  const nextTemplate = () => {
    setCurrentTemplate(prev => prev < templates.length - 1 ? prev + 1 : 0);
  };

  const prevTemplate = () => {
    setCurrentTemplate(prev => prev > 0 ? prev - 1 : templates.length - 1);
  };

  return (
    <div className="html-mastery-container">
      <header className="mastery-header">
        <h1>🚀 HTML ELEMENTS MASTERY CHEAT SHEET</h1>
        <p>Master the easiest React challenges - pure HTML elements with no state!</p>
      </header>

      <div className="mastery-content">
        {/* Navigation Tabs */}
        <div className="mastery-tabs">
          <button 
            className={`tab ${activeTab === 'skeleton' ? 'active' : ''}`}
            onClick={() => setActiveTab('skeleton')}
          >
            🏗️ Universal Skeleton
          </button>
          <button 
            className={`tab ${activeTab === 'elements' ? 'active' : ''}`}
            onClick={() => setActiveTab('elements')}
          >
            🎯 HTML Elements
          </button>
          <button 
            className={`tab ${activeTab === 'templates' ? 'active' : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            🔄 Challenge Templates
          </button>
          <button 
            className={`tab ${activeTab === 'jsx-rules' ? 'active' : ''}`}
            onClick={() => setActiveTab('jsx-rules')}
          >
            🚨 JSX Rules & Errors
          </button>
          <button 
            className={`tab ${activeTab === 'quick-fixes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quick-fixes')}
          >
            ⚡ Quick Fix Guide
          </button>
          <button 
            className={`tab ${activeTab === 'battle-plan' ? 'active' : ''}`}
            onClick={() => setActiveTab('battle-plan')}
          >
            🎯 Battle Plan
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Universal Skeleton Tab */}
          {activeTab === 'skeleton' && (
            <div className="skeleton-section">
              <h2>🏗️ UNIVERSAL HTML ELEMENTS SKELETON</h2>
              <div className="code-block">
                <pre><code>{`import React from 'react';

function ComponentName() {
  // 🎯 NO STATE NEEDED for basic HTML challenges
  
  return (
    <div> {/* 🎯 Always wrap in single parent element */}
      {/* 🎯 ADD YOUR ELEMENTS HERE */}
    </div>
  );
}

export default ComponentName;`}</code></pre>
              </div>
              
              <div className="key-points">
                <h3>🎯 Key Advantages:</h3>
                <div className="points-grid">
                  <div className="point-card">
                    <h4>✅ No State Management</h4>
                    <p>No useState, no complex logic</p>
                  </div>
                  <div className="point-card">
                    <h4>✅ No Event Handlers</h4>
                    <p>No onClick, no onChange needed</p>
                  </div>
                  <div className="point-card">
                    <h4>✅ Just JSX Syntax</h4>
                    <p>Pure HTML elements in JSX</p>
                  </div>
                  <div className="point-card">
                    <h4>✅ 2-5 Minute Challenges</h4>
                    <p>Quickest React challenges to complete</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HTML Elements Tab */}
          {activeTab === 'elements' && (
            <div className="elements-section">
              <h2>🎯 ESSENTIAL HTML ELEMENTS QUICK REFERENCE</h2>
              
              <div className="elements-grid">
                <div className="element-category">
                  <h3>📝 TEXT ELEMENTS</h3>
                  <div className="elements-list">
                    {htmlElements.text.map((item, index) => (
                      <div key={index} className="element-item">
                        <code>{item.element}</code>
                        <span>{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="element-category">
                  <h3>🔘 INTERACTIVE ELEMENTS</h3>
                  <div className="elements-list">
                    {htmlElements.interactive.map((item, index) => (
                      <div key={index} className="element-item">
                        <code>{item.element}</code>
                        <span>{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="element-category">
                  <h3>📊 LIST ELEMENTS</h3>
                  <div className="elements-list">
                    {htmlElements.lists.map((item, index) => (
                      <div key={index} className="element-item">
                        <code>{item.element}</code>
                        <span>{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="element-category">
                  <h3>🏗️ STRUCTURAL ELEMENTS</h3>
                  <div className="elements-list">
                    {htmlElements.structural.map((item, index) => (
                      <div key={index} className="element-item">
                        <code>{item.element}</code>
                        <span>{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenge Templates Tab */}
          {activeTab === 'templates' && (
            <div className="templates-section">
              <div className="template-header">
                <h3>Template {currentTemplate + 1}: {templates[currentTemplate].title}</h3>
                <div className="template-navigation">
                  <button onClick={prevTemplate} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentTemplate + 1} / {templates.length}
                  </span>
                  <button onClick={nextTemplate} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="template-description">
                <p>{templates[currentTemplate].description}</p>
              </div>

              <div className="template-demo">
                <h4>🎯 Live Demo:</h4>
                {templates[currentTemplate].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>📝 Code:</h4>
                <pre><code>{templates[currentTemplate].code}</code></pre>
              </div>
            </div>
          )}

          {/* JSX Rules & Errors Tab */}
          {activeTab === 'jsx-rules' && (
            <div className="jsx-rules-section">
              <h2>🚨 JSX RULES & COMMON ERRORS</h2>
              
              <div className="rules-grid">
                <div className="rules-column">
                  <h3>✅ CORRECT JSX:</h3>
                  {jsxRules.correct.map((rule, index) => (
                    <div key={index} className="rule-item correct">
                      <pre><code>{rule.code}</code></pre>
                      <p>{rule.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rules-column">
                  <h3>❌ COMMON MISTAKES:</h3>
                  {jsxRules.mistakes.map((mistake, index) => (
                    <div key={index} className="rule-item mistake">
                      <div className="wrong-code">
                        <strong>Wrong:</strong>
                        <pre><code>{mistake.wrong}</code></pre>
                      </div>
                      <div className="right-code">
                        <strong>Right:</strong>
                        <pre><code>{mistake.right}</code></pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Fix Guide Tab */}
          {activeTab === 'quick-fixes' && (
            <div className="quick-fixes-section">
              <h2>⚡ QUICK FIX GUIDE</h2>
              
              <div className="fixes-list">
                {quickFixes.map((fix, index) => (
                  <div key={index} className="fix-item">
                    <h3>Problem: "{fix.problem}"</h3>
                    <div className="code-comparison">
                      <div className="code-wrong">
                        <h4>❌ Wrong:</h4>
                        <pre><code>{fix.wrong}</code></pre>
                      </div>
                      <div className="code-right">
                        <h4>✅ Right:</h4>
                        <pre><code>{fix.right}</code></pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Battle Plan Tab */}
          {activeTab === 'battle-plan' && (
            <div className="battle-plan-section">
              <h2>🎯 INTERVIEW BATTLE PLAN</h2>
              
              <div className="steps-list">
                {battlePlan.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pro-tips">
                <h3>💡 PRO TIPS</h3>
                <ul>
                  <li>Copy text exactly - they often check for specific wording</li>
                  <li>Use semantic HTML - <code>&lt;nav&gt;</code> for navigation, <code>&lt;button&gt;</code> for buttons</li>
                  <li>Follow the order - build elements in the order listed in requirements</li>
                  <li>Keep it simple - no need for CSS or state unless specified</li>
                  <li>Test thoroughly - look for unclosed tags, wrong attribute names</li>
                </ul>
              </div>

              <div className="checklist">
                <h3>🏆 HTML ELEMENTS CHECKLIST</h3>
                <div className="checklist-items">
                  {checklist.map((item, index) => (
                    <label key={index} className="checklist-item">
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="final-reminder">
                <h3>🚀 REMEMBER:</h3>
                <div className="reminder-content">
                  <p><strong>HTML Elements challenges are the EASIEST!</strong></p>
                  <div className="advantages">
                    <span>✅ No state management</span>
                    <span>✅ No event handlers</span>
                    <span>✅ No complex logic</span>
                    <span>✅ Just proper JSX syntax</span>
                  </div>
                  <p className="time-estimate"><strong>You can complete these in 2-5 minutes! ⚡</strong></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HtmlElementsMastery;