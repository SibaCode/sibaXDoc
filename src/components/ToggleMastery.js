// src/components/ToggleMastery.js
import React, { useState , useEffect } from 'react';
import './ToggleMastery.css';

const ToggleMastery = ({ initialTab = 'skeleton' }) => {  // Add initialTab prop
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive examples - users can see them working
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);
  const examples = [
    {
      title: "Universal Toggle Skeleton",
      description: "The foundation for ALL toggle patterns",
      code: `function ToggleSkeleton() {
  const [isOn, setIsOn] = useState(false);
  const buttonText = isOn ? 'TURN OFF' : 'TURN ON';
  const contentToShow = isOn ? <p>Content is visible!</p> : null;

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsOn(!isOn)} className="demo-btn">
            {isOn ? 'TURN OFF' : 'TURN ON'}
          </button>
          {isOn && <p className="demo-content">🎉 Content is visible!</p>}
        </div>
      )
    },
    {
      title: "Show/Hide Message",
      description: "Basic content visibility toggle",
      code: `function ShowHideMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonText = isVisible ? 'HIDE MESSAGE' : 'SHOW MESSAGE';
  const contentToShow = isVisible ? <p>🎉 Secret message! 🎉</p> : null;

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsVisible(!isVisible)} className="demo-btn">
            {isVisible ? 'HIDE MESSAGE' : 'SHOW MESSAGE'}
          </button>
          {isVisible && <p className="demo-content">🎉 Secret message! 🎉</p>}
        </div>
      )
    },
    {
      title: "Dark/Light Mode",
      description: "Theme switching with styles",
      code: `function DarkLightMode() {
  const [isDark, setIsDark] = useState(false);
  const buttonText = isDark ? '☀️ LIGHT MODE' : '🌙 DARK MODE';

  return (
    <div style={{
      background: isDark ? '#333' : '#fff',
      color: isDark ? 'white' : 'black',
      padding: '20px'
    }}>
      <button onClick={() => setIsDark(!isDark)}>
        {buttonText}
      </button>
      <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo" style={{
          background: isDark ? '#333' : '#fff',
          color: isDark ? 'white' : 'black',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <button onClick={() => setIsDark(!isDark)} className="demo-btn">
            {isDark ? '☀️ LIGHT MODE' : '🌙 DARK MODE'}
          </button>
          <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>
        </div>
      )
    },
    {
      title: "Expand/Collapse Section",
      description: "Show detailed content on demand",
      code: `function ExpandableSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonText = isExpanded ? '▼ COLLAPSE' : '► EXPAND';
  const contentToShow = isExpanded ? (
    <div>
      <p>Detailed content here...</p>
      <p>More information shown when expanded</p>
    </div>
  ) : null;

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsExpanded(!isExpanded)} className="demo-btn">
            {isExpanded ? '▼ COLLAPSE' : '► EXPAND'}
          </button>
          {isExpanded && (
            <div className="demo-content">
              <p>📚 Detailed content here...</p>
              <p>🔍 More information shown when expanded</p>
              <p>💡 This pattern is perfect for FAQs and details</p>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Favorite Button",
      description: "Heart icon toggle with status",
      code: `function FavoriteButton() {
  const [isFavorited, setIsFavorited] = useState(false);
  const buttonText = isFavorited ? '❤️ UNFAVORITE' : '🤍 FAVORITE';
  const contentToShow = <p>{isFavorited ? 'Added to favorites!' : 'Not in favorites'}</p>;

  return (
    <div>
      <button onClick={() => setIsFavorited(!isFavorited)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsFavorited(!isFavorited)} className="demo-btn">
            {isFavorited ? '❤️ UNFAVORITE' : '🤍 FAVORITE'}
          </button>
          <p className="demo-content">{isFavorited ? '⭐ Added to favorites!' : 'Not in favorites'}</p>
        </div>
      )
    },
    {
      title: "Password Visibility",
      description: "Toggle input type between text/password",
      code: `function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const buttonText = showPassword ? '🔒 HIDE' : '👁️ SHOW';
  
  return (
    <div>
      <input 
        type={showPassword ? 'text' : 'password'} 
        placeholder="Enter password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {buttonText}
      </button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter password"
            className="demo-input"
          />
          <button onClick={() => setShowPassword(!showPassword)} className="demo-btn">
            {showPassword ? '🔒 HIDE' : '👁️ SHOW'}
          </button>
        </div>
      )
    }
  ];

  const interviewProblems = [
    {
      problem: "ON/OFF Toggle",
      stateName: "isOn",
      buttonText: "ON/OFF",
      content: "Status text"
    },
    {
      problem: "Show/Hide Content", 
      stateName: "isVisible",
      buttonText: "SHOW/HIDE",
      content: "Your content"
    },
    {
      problem: "Dark/Light Mode",
      stateName: "isDark", 
      buttonText: "DARK/LIGHT",
      content: "Mode indicator + styles"
    },
    {
      problem: "Expand/Collapse",
      stateName: "isExpanded",
      buttonText: "EXPAND/COLLAPSE", 
      content: "Detailed content"
    },
    {
      problem: "Favorite Heart",
      stateName: "isFavorited",
      buttonText: "❤️/🤍",
      content: "Favorite status"
    },
    {
      problem: "Play/Pause",
      stateName: "isPlaying", 
      buttonText: "▶️/⏸️",
      content: "Player controls"
    },
    {
      problem: "Menu Open/Close",
      stateName: "isOpen",
      buttonText: "OPEN/CLOSE",
      content: "Navigation menu"
    },
    {
      problem: "Read/Unread",
      stateName: "isRead",
      buttonText: "READ/UNREAD",
      content: "Notification dot"
    }
  ];

  const commonGotchas = [
    {
      problem: "Button isn't working",
      wrong: "<button onClick={handleClick}>",
      right: "<button onClick={() => handleClick()}>"
    },
    {
      problem: "State isn't updating", 
      wrong: "isOn = true;",
      right: "setIsOn(true);"
    },
    {
      problem: "Content flashes then disappears",
      wrong: "{if (isOn) { return <div>Content</div> }}",
      right: "{isOn && <div>Content</div>}"
    }
  ];

  const nextExample = () => {
    setCurrentExample(prev => 
      prev < examples.length - 1 ? prev + 1 : 0
    );
  };

  const prevExample = () => {
    setCurrentExample(prev => 
      prev > 0 ? prev - 1 : examples.length - 1
    );
  };

  return (
    <div className="toggle-mastery-container">
      <header className="mastery-header">
        <h1>🚀 REACT TOGGLE PATTERN MASTERY KIT</h1>
        <p>Master the universal toggle pattern - solve ANY on/off problem in React</p>
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
            className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            💡 Live Examples
          </button>
          <button 
            className={`tab ${activeTab === 'cheatsheet' ? 'active' : ''}`}
            onClick={() => setActiveTab('cheatsheet')}
          >
            🎯 Interview Cheat Sheet
          </button>
          <button 
            className={`tab ${activeTab === 'gotchas' ? 'active' : ''}`}
            onClick={() => setActiveTab('gotchas')}
          >
            🚨 Common Gotchas
          </button>
          <button 
            className={`tab ${activeTab === 'battleplan' ? 'active' : ''}`}
            onClick={() => setActiveTab('battleplan')}
          >
            ⚡ Battle Plan
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Universal Skeleton Tab */}
          {activeTab === 'skeleton' && (
            <div className="skeleton-section">
              <h2>🏗️ THE UNIVERSAL TOGGLE SKELETON</h2>
              <div className="code-block">
                <pre><code>{`import React, { useState } from 'react';

function ToggleSkeleton() {
  // 🎯 STEP 1: CHOOSE YOUR STATE NAME
  const [isOn, setIsOn] = useState(false);
  // 💡 Change "isOn" to match your problem

  // 🎯 STEP 2: BUTTON TEXT (Change these)
  const buttonText = isOn ? 'TURN OFF' : 'TURN ON';
  const statusText = isOn ? 'ON' : 'OFF';
  
  // 🎯 STEP 3: CONTENT TO SHOW/HIDE (Change this)
  const contentToShow = isOn ? <p>Content is visible!</p> : null;

  return (
    <div>
      {/* 🎯 BUTTON - Don't change this structure */}
      <button onClick={() => setIsOn(!isOn)}>
        {buttonText}
      </button>
      
      {/* 🎯 STATUS TEXT - Optional */}
      <p>Status: {statusText}</p>
      
      {/* 🎯 CONDITIONAL CONTENT - Change what shows */}
      {contentToShow}
    </div>
  );
}

export default ToggleSkeleton;`}</code></pre>
              </div>
              
              <div className="transformation-guide">
                <h3>🔄 TRANSFORMATION GUIDE</h3>
                <p><strong>Only change 3 things:</strong></p>
                <ol>
                  <li><strong>State variable name</strong> (isOn → isVisible, isDark, etc.)</li>
                  <li><strong>Button text</strong> (ON/OFF → SHOW/HIDE, DARK/LIGHT, etc.)</li>
                  <li><strong>Content to show</strong> (What appears when toggled on)</li>
                </ol>
                <p><em>The return statement stays exactly the same!</em></p>
              </div>
            </div>
          )}

          {/* Live Examples Tab */}
          {activeTab === 'examples' && (
            <div className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {examples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentExample + 1} / {examples.length}
                  </span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="example-description">
                <p>{examples[currentExample].description}</p>
              </div>

              <div className="example-demo">
                <h4>🎯 Live Demo:</h4>
                {examples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>📝 Code:</h4>
                <pre><code>{examples[currentExample].code}</code></pre>
              </div>
            </div>
          )}

          {/* Interview Cheat Sheet Tab */}
          {activeTab === 'cheatsheet' && (
            <div className="cheatsheet-section">
              <h2>🎯 INTERVIEW PROBLEM → SOLUTION CHEAT SHEET</h2>
              <div className="cheatsheet-table">
                <table>
                  <thead>
                    <tr>
                      <th>Problem</th>
                      <th>State Name</th>
                      <th>Button Text</th>
                      <th>Content to Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interviewProblems.map((problem, index) => (
                      <tr key={index}>
                        <td><strong>{problem.problem}</strong></td>
                        <td><code>{problem.stateName}</code></td>
                        <td><code>{problem.buttonText}</code></td>
                        <td>{problem.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="quick-reference">
                <h3>⚡ Quick Reference Formula</h3>
                <div className="formula-code">
                  <pre><code>{`// COPY → CHANGE 3 LINES → DONE!
const [isOn, setIsOn] = useState(false);
const buttonText = isOn ? 'OFF_TEXT' : 'ON_TEXT';
const contentToShow = isOn ? <YourContent /> : null;`}</code></pre>
                </div>
              </div>
            </div>
          )}

          {/* Common Gotchas Tab */}
          {activeTab === 'gotchas' && (
            <div className="gotchas-section">
              <h2>🚨 COMMON INTERVIEW GOTCHAS & FIXES</h2>
              <div className="gotchas-list">
                {commonGotchas.map((gotcha, index) => (
                  <div key={index} className="gotcha-item">
                    <div className="problem">
                      <strong>❌ Problem: "{gotcha.problem}"</strong>
                    </div>
                    <div className="solutions">
                      <div className="wrong">
                        <strong>Wrong:</strong> <code>{gotcha.wrong}</code>
                      </div>
                      <div className="right">
                        <strong>✅ Right:</strong> <code>{gotcha.right}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Battle Plan Tab */}
          {activeTab === 'battleplan' && (
            <div className="battleplan-section">
              <h2>⚡ INTERVIEW BATTLE PLAN</h2>
              
              <div className="steps">
                <div className="step">
                  <h3>🎯 Step 1: Identify the Pattern</h3>
                  <p>"Is this switching between two states?" → <strong>TOGGLE PATTERN</strong></p>
                </div>
                
                <div className="step">
                  <h3>🔧 Step 2: Choose Your State Name</h3>
                  <ul>
                    <li>ON/OFF → <code>isOn</code></li>
                    <li>Show/Hide → <code>isVisible</code></li>
                    <li>Dark/Light → <code>isDark</code></li>
                    <li>Expand/Collapse → <code>isExpanded</code></li>
                  </ul>
                </div>
                
                <div className="step">
                  <h3>📝 Step 3: Copy & Transform Skeleton</h3>
                  <div className="code-snippet">
                    <pre><code>{`// COPY SKELETON → CHANGE 3 LINES → DONE!
const [isOn, setIsOn] = useState(false);
const buttonText = isOn ? 'OFF_TEXT' : 'ON_TEXT';
const contentToShow = isOn ? <YourContent /> : null;`}</code></pre>
                  </div>
                </div>
                
                <div className="step">
                  <h3>✅ Step 4: Test & Submit</h3>
                  <ul>
                    <li>Click the button to verify toggle works</li>
                    <li>Check that text/content changes correctly</li>
                    <li>Submit working solution</li>
                  </ul>
                </div>
              </div>

              <div className="final-checklist">
                <h3>🏆 FINAL CHECKLIST BEFORE SUBMITTING</h3>
                <div className="checklist">
                  <label><input type="checkbox" /> Component imports React and useState</label>
                  <label><input type="checkbox" /> State variable is properly declared</label>
                  <label><input type="checkbox" /> Button has onClick handler</label>
                  <label><input type="checkbox" /> Button text changes based on state</label>
                  <label><input type="checkbox" /> Conditional content shows/hides correctly</label>
                  <label><input type="checkbox" /> No console errors</label>
                  <label><input type="checkbox" /> Basic functionality works</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleMastery;