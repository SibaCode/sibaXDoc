// src/components/ToggleMastery.js
import React, { useState } from 'react';
import './ToggleMastery.css';

const ToggleMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all examples
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRead, setIsRead] = useState(false);

  const toggleExamples = [
    {
      title: "Universal Toggle Skeleton",
      description: "The foundation for ALL toggle patterns - copy this every time!",
      code: `import React, { useState } from 'react';

function ToggleSkeleton() {
  // 🎯 STEP 1: CHOOSE YOUR STATE NAME
  const [isOn, setIsOn] = useState(false);
  // 💡 Change "isOn" to match your problem:
  // isVisible, isDark, showMessage, isOpen, isActive, etc.

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

export default ToggleSkeleton;`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsOn(!isOn)} className="demo-btn">
            {isOn ? 'TURN OFF' : 'TURN ON'}
          </button>
          <p>Status: {isOn ? 'ON' : 'OFF'}</p>
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
      description: "Theme switching with dynamic styles",
      code: `function DarkLightMode() {
  const [isDark, setIsDark] = useState(false);
  
  const buttonText = isDark ? '☀️ LIGHT MODE' : '🌙 DARK MODE';
  const contentToShow = <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>;

  return (
    <div style={{
      background: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? 'white' : 'black',
      padding: '20px'
    }}>
      <button onClick={() => setIsDark(!isDark)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo" style={{
          background: isDark ? '#1a1a1a' : '#ffffff',
          color: isDark ? 'white' : 'black',
          padding: '20px',
          borderRadius: '8px',
          transition: 'all 0.3s ease'
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
              <p>💡 Perfect for FAQs and details sections</p>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Favorite Button",
      description: "Heart icon toggle with status feedback",
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
      title: "Password Visibility Toggle",
      description: "Toggle input type between text and password",
      code: `function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  
  const buttonText = showPassword ? '🔒 HIDE PASSWORD' : '👁️ SHOW PASSWORD';
  const contentToShow = (
    <input 
      type={showPassword ? 'text' : 'password'} 
      placeholder="Enter password"
    />
  );

  return (
    <div>
      {contentToShow}
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
            {showPassword ? '🔒 HIDE PASSWORD' : '👁️ SHOW PASSWORD'}
          </button>
        </div>
      )
    },
    {
      title: "Menu Open/Close",
      description: "Navigation menu toggle",
      code: `function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);
  
  const buttonText = isOpen ? '✕ CLOSE MENU' : '☰ OPEN MENU';
  const contentToShow = isOpen ? (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  ) : null;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsOpen(!isOpen)} className="demo-btn">
            {isOpen ? '✕ CLOSE MENU' : '☰ OPEN MENU'}
          </button>
          {isOpen && (
            <nav className="demo-nav">
              <ul className="demo-list">
                <li><a href="#home">🏠 Home</a></li>
                <li><a href="#about">👤 About</a></li>
                <li><a href="#contact">📞 Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      )
    },
    {
      title: "Play/Pause Button",
      description: "Media player control toggle",
      code: `function PlayPauseToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const buttonText = isPlaying ? '⏸️ PAUSE' : '▶️ PLAY';
  const contentToShow = <p>Status: {isPlaying ? 'Playing...' : 'Paused'}</p>;

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsPlaying(!isPlaying)} className="demo-btn">
            {isPlaying ? '⏸️ PAUSE' : '▶️ PLAY'}
          </button>
          <p className="demo-content">Status: {isPlaying ? '🎵 Playing...' : '⏸️ Paused'}</p>
        </div>
      )
    },
    {
      title: "Read/Unread Notification",
      description: "Notification status toggle",
      code: `function NotificationToggle() {
  const [isRead, setIsRead] = useState(false);
  
  const buttonText = isRead ? '● MARK UNREAD' : '○ MARK READ';
  const contentToShow = <p>Notification: {isRead ? 'Read' : 'Unread'}</p>;

  return (
    <div>
      <button onClick={() => setIsRead(!isRead)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <button onClick={() => setIsRead(!isRead)} className="demo-btn">
            {isRead ? '● MARK UNREAD' : '○ MARK READ'}
          </button>
          <p className="demo-content">Notification: {isRead ? '✅ Read' : '🔴 Unread'}</p>
        </div>
      )
    }
  ];

  const quickReference = [
    { problem: "ON/OFF Toggle", stateName: "isOn", buttonText: "ON/OFF", content: "Status text" },
    { problem: "Show/Hide Content", stateName: "isVisible", buttonText: "SHOW/HIDE", content: "Your content" },
    { problem: "Dark/Light Mode", stateName: "isDark", buttonText: "DARK/LIGHT", content: "Mode indicator + styles" },
    { problem: "Expand/Collapse", stateName: "isExpanded", buttonText: "EXPAND/COLLAPSE", content: "Detailed content" },
    { problem: "Favorite Heart", stateName: "isFavorited", buttonText: "❤️/🤍", content: "Favorite status" },
    { problem: "Play/Pause", stateName: "isPlaying", buttonText: "▶️/⏸️", content: "Player status" },
    { problem: "Menu Open/Close", stateName: "isOpen", buttonText: "OPEN/CLOSE", content: "Navigation menu" },
    { problem: "Read/Unread", stateName: "isRead", buttonText: "READ/UNREAD", content: "Notification status" },
    { problem: "Password Visibility", stateName: "showPassword", buttonText: "SHOW/HIDE", content: "Input with type change" }
  ];

  const battlePlan = [
    {
      step: "1",
      title: "Identify Toggle Pattern",
      description: '"Is this switching between two states?" → YES = TOGGLE'
    },
    {
      step: "2",
      title: "Choose Your Variables",
      description: "Pick state name: isVisible, isDark, isExpanded, isFavorited, etc."
    },
    {
      step: "3",
      title: "Use the Skeleton",
      description: "Copy universal toggle skeleton every time"
    },
    {
      step: "4",
      title: "Customize for Problem",
      description: "Change ONLY: State name, Button text, Content to show"
    },
    {
      step: "5",
      title: "Add Styles (If Needed)",
      description: "Dynamic styles, conditional rendering, input types"
    }
  ];

  const commonErrors = [
    {
      error: "Button not working",
      wrong: `<button onClick={handleClick}>`,
      right: `<button onClick={() => handleClick()}>\n// OR define function properly\nfunction handleClick() { setIsOn(!isOn); }\n<button onClick={handleClick}>`
    },
    {
      error: "State not updating", 
      wrong: `isOn = true;`,
      right: `setIsOn(true);`
    },
    {
      error: "Content not showing/hiding",
      wrong: `{if (isOn) { return <div>Content</div> }}`,
      right: `{isOn && <div>Content</div>}\n// OR\n{isOn ? <div>Content</div> : null}`
    }
  ];

  const proTips = [
    "Start with the skeleton - Copy and paste every time",
    "Change only 3 things - State name, button text, content",
    "Keep returns clean - Put logic above return statement", 
    "Use descriptive names - isModalOpen vs isOpen",
    "Test both states - Make sure ON and OFF work correctly"
  ];

  const checklist = [
    "State variable declared with useState(false)",
    "Button toggles the state with setIsThing(!isThing)",
    "Button text changes based on state ({isThing ? 'ON' : 'OFF'})",
    "Conditional content shows/hides correctly",
    "No console errors",
    "Both states (ON/OFF) work properly"
  ];

  const nextExample = () => {
    setCurrentExample(prev => prev < toggleExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : toggleExamples.length - 1);
  };

  return (
    <div className="toggle-mastery-container">
      <header className="mastery-header">
        <h1>🚀 TOGGLE PATTERN MASTERY KIT</h1>
        <p>Master 8+ toggle variations from one universal skeleton!</p>
      </header>

      <div className="mastery-content">
        {/* Navigation Tabs */}
        <div className="mastery-tabs">
          <button 
            className={`tab ${activeTab === 'skeleton' ? 'active' : ''}`}
            onClick={() => { setActiveTab('skeleton'); setCurrentExample(0); }}
          >
            🏗️ Universal Skeleton
          </button>
          <button 
            className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => { setActiveTab('examples'); setCurrentExample(0); }}
          >
            🔄 8+ Examples
          </button>
          <button 
            className={`tab ${activeTab === 'reference' ? 'active' : ''}`}
            onClick={() => setActiveTab('reference')}
          >
            🎯 Quick Reference
          </button>
          <button 
            className={`tab ${activeTab === 'battle-plan' ? 'active' : ''}`}
            onClick={() => setActiveTab('battle-plan')}
          >
            ⚡ Battle Plan
          </button>
          <button 
            className={`tab ${activeTab === 'errors' ? 'active' : ''}`}
            onClick={() => setActiveTab('errors')}
          >
            🚨 Common Errors
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Universal Skeleton Tab */}
          {activeTab === 'skeleton' && (
            <div className="skeleton-section">
              <h2>🏗️ UNIVERSAL TOGGLE SKELETON</h2>
              <div className="code-block">
                <pre><code>{toggleExamples[0].code}</code></pre>
              </div>
              {toggleExamples[0].liveDemo}
              
              <div className="transformation-guide">
                <h3>🔄 TRANSFORMATION GUIDE</h3>
                <p><strong>Change ONLY these 3 things:</strong></p>
                <ol>
                  <li><strong>State variable name</strong> (isOn → isVisible, isDark, isExpanded, etc.)</li>
                  <li><strong>Button text</strong> (TURN ON/TURN OFF → SHOW/HIDE, DARK/LIGHT, etc.)</li>
                  <li><strong>Content to show</strong> (What appears when toggled on)</li>
                </ol>
                <p><em>The return structure stays exactly the same!</em></p>
              </div>
            </div>
          )}

          {/* Examples Tab */}
          {activeTab === 'examples' && (
            <div className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {toggleExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentExample + 1} / {toggleExamples.length}
                  </span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="example-description">
                <p>{toggleExamples[currentExample].description}</p>
              </div>

              <div className="example-demo">
                <h4>🎯 Live Demo:</h4>
                {toggleExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>📝 Code:</h4>
                <pre><code>{toggleExamples[currentExample].code}</code></pre>
              </div>
            </div>
          )}

          {/* Quick Reference Tab */}
          {activeTab === 'reference' && (
            <div className="reference-section">
              <h2>🎯 QUICK REFERENCE GUIDE</h2>
              <p className="reference-intro">Problem → Solution Matrix</p>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Problem</div>
                  <div>State Name</div>
                  <div>Button Text</div>
                  <div>Content to Show</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.problem}</strong></div>
                    <div><code>{item.stateName}</code></div>
                    <div><code>{item.buttonText}</code></div>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>

              <div className="state-options">
                <h3>⚡ Choose Your State Name:</h3>
                <div className="state-grid">
                  <code>const [isOn, setIsOn] = useState(false);</code>
                  <code>const [isVisible, setIsVisible] = useState(false);</code>
                  <code>const [isDark, setIsDark] = useState(false);</code>
                  <code>const [isExpanded, setIsExpanded] = useState(false);</code>
                  <code>const [isFavorited, setIsFavorited] = useState(false);</code>
                  <code>const [isPlaying, setIsPlaying] = useState(false);</code>
                  <code>const [isOpen, setIsOpen] = useState(false);</code>
                  <code>const [showPassword, setShowPassword] = useState(false);</code>
                </div>
              </div>
            </div>
          )}

          {/* Battle Plan Tab */}
          {activeTab === 'battle-plan' && (
            <div className="battle-plan-section">
              <h2>⚡ INTERVIEW BATTLE PLAN</h2>
              
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

              <div className="customization-guide">
                <h3>🎯 Customize for ANY Problem:</h3>
                <div className="code-snippet">
                  <pre><code>{`function ComponentName() {
  const [isThing, setIsThing] = useState(false);
  
  const buttonText = isThing ? 'TURN OFF' : 'TURN ON';
  const contentToShow = isThing ? <p>Content!</p> : null;

  return (
    <div>
      <button onClick={() => setIsThing(!isThing)}>
        {buttonText}
      </button>
      {contentToShow}
    </div>
  );
}`}</code></pre>
                </div>
                <p><strong>Change ONLY:</strong> State name, Button text, Content to show</p>
              </div>

              <div className="pro-tips">
                <h3>💡 PRO TIPS</h3>
                <ul>
                  {proTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="checklist">
                <h3>🏆 TOGGLE PATTERN CHECKLIST</h3>
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
                <h3>🎯 REMEMBER:</h3>
                <div className="reminder-content">
                  <p><strong>For ANY toggle problem:</strong></p>
                  <ol>
                    <li>Copy the skeleton</li>
                    <li>Change the state name to match the problem</li>
                    <li>Change the button text to match the context</li>
                    <li>Change the content that shows when toggled on</li>
                    <li>Leave the return structure unchanged</li>
                  </ol>
                  <p className="success-message">You now have 8+ toggle variations from one skeleton! 🚀</p>
                </div>
              </div>
            </div>
          )}

          {/* Common Errors Tab */}
          {activeTab === 'errors' && (
            <div className="errors-section">
              <h2>🚨 COMMON ERRORS & FIXES</h2>
              
              <div className="errors-list">
                {commonErrors.map((error, index) => (
                  <div key={index} className="error-item">
                    <h3>❌ Error: "{error.error}"</h3>
                    <div className="error-comparison">
                      <div className="error-wrong">
                        <h4>Wrong:</h4>
                        <pre><code>{error.wrong}</code></pre>
                      </div>
                      <div className="error-right">
                        <h4>✅ Right:</h4>
                        <pre><code>{error.right}</code></pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleMastery;