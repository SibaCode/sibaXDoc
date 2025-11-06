// src/components/CounterMastery.js
import React, { useState } from 'react';
import './CounterMastery.css';

const CounterMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for examples
  const [count, setCount] = useState(0);
  const [votes, setVotes] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [score, setScore] = useState(0);
  const [laps, setLaps] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [likes, setLikes] = useState(0);
  const [limitedCount, setLimitedCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  // Universal Counter Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function CounterSkeleton() {
  // 🎯 STEP 1: Choose state name & starting value
  const [count, setCount] = useState(0);
  
  // 🎯 STEP 2: Define operations
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  // 🎯 STEP 3: Customize display
  const displayText = \`Count: \${count}\`;

  return (
    <div>
      <h1>{displayText}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`;

  // Counter Examples
  const counterExamples = [
    {
      title: "Vote Counter",
      description: "Simple voting system with upvote/downvote",
      code: `function VoteCounter() {
  const [votes, setVotes] = useState(0);
  
  const upvote = () => setVotes(votes + 1);
  const downvote = () => setVotes(votes - 1);
  const resetVotes = () => setVotes(0);
  
  return (
    <div>
      <h2>Votes: {votes}</h2>
      <button onClick={downvote}>👎</button>
      <button onClick={upvote}>👍</button>
      <button onClick={resetVotes}>Reset</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="counter-demo">
          <h2>Votes: {votes}</h2>
          <button onClick={() => setVotes(votes - 1)} className="counter-btn">👎</button>
          <button onClick={() => setVotes(votes + 1)} className="counter-btn">👍</button>
          <button onClick={() => setVotes(0)} className="counter-btn">Reset</button>
        </div>
      )
    },
    {
      title: "Shopping Cart Quantity",
      description: "Product quantity with minimum constraint",
      code: `function CartQuantity() {
  const [quantity, setQuantity] = useState(1);
  
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(Math.max(1, quantity - 1));
  const resetQty = () => setQuantity(1);
  
  return (
    <div>
      <h3>Quantity: {quantity}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={resetQty}>Reset</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="counter-demo">
          <h3>Quantity: {quantity}</h3>
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
            className="counter-btn"
          >
            -
          </button>
          <button onClick={() => setQuantity(quantity + 1)} className="counter-btn">+</button>
          <button onClick={() => setQuantity(1)} className="counter-btn">Reset</button>
        </div>
      )
    },
    {
      title: "Limited Counter",
      description: "Counter with min/max constraints and visual feedback",
      code: `function LimitedCounter() {
  const [count, setCount] = useState(0);
  const MIN = 0;
  const MAX = 10;
  
  const increment = () => {
    if (count < MAX) setCount(count + 1);
  };
  
  const decrement = () => {
    if (count > MIN) setCount(count - 1);
  };
  
  const isAtMin = count === MIN;
  const isAtMax = count === MAX;
  
  return (
    <div>
      <h2 style={{ color: isAtMin ? 'red' : isAtMax ? 'green' : 'black' }}>
        Count: {count}
        {isAtMin && ' (MIN)'}
        {isAtMax && ' (MAX)'}
      </h2>
      <button onClick={decrement} disabled={isAtMin}>-</button>
      <button onClick={increment} disabled={isAtMax}>+</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="counter-demo">
          <h2 style={{ 
            color: limitedCount === 0 ? 'red' : limitedCount === 10 ? 'green' : 'black' 
          }}>
            Count: {limitedCount}
            {limitedCount === 0 && ' (MIN)'}
            {limitedCount === 10 && ' (MAX)'}
          </h2>
          <button 
            onClick={() => limitedCount > 0 && setLimitedCount(limitedCount - 1)} 
            disabled={limitedCount === 0}
            className="counter-btn"
          >
            -
          </button>
          <button 
            onClick={() => limitedCount < 10 && setLimitedCount(limitedCount + 1)} 
            disabled={limitedCount === 10}
            className="counter-btn"
          >
            +
          </button>
        </div>
      )
    },
    {
      title: "Step Counter",
      description: "Counter that increments/decrements by custom step size",
      code: `function StepCounter() {
  const [count, setCount] = useState(0);
  const STEP = 5;
  
  const increment = () => setCount(count + STEP);
  const decrement = () => setCount(count - STEP);
  const reset = () => setCount(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-{STEP}</button>
      <button onClick={increment}>+{STEP}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="counter-demo">
          <h2>Count: {stepCount}</h2>
          <button onClick={() => setStepCount(stepCount - 5)} className="counter-btn">-5</button>
          <button onClick={() => setStepCount(stepCount + 5)} className="counter-btn">+5</button>
          <button onClick={() => setStepCount(0)} className="counter-btn">Reset</button>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { problem: "Vote Counter", stateName: "votes", startValue: "0", displayText: "Votes: X" },
    { problem: "Cart Quantity", stateName: "quantity", startValue: "1", displayText: "Quantity: X" },
    { problem: "Score Keeper", stateName: "score", startValue: "0", displayText: "Score: X" },
    { problem: "Like Counter", stateName: "likes", startValue: "0", displayText: "Likes: X" },
    { problem: "Timer", stateName: "seconds", startValue: "0", displayText: "Time: Xs" }
  ];

  // Common Constraints
  const constraints = [
    {
      name: "Minimum Value",
      code: `const decrement = () => setCount(Math.max(MIN, count - 1));`
    },
    {
      name: "Maximum Value",
      code: `const increment = () => setCount(Math.min(MAX, count + 1));`
    },
    {
      name: "Step Size",
      code: `const increment = () => setCount(count + STEP);`
    },
    {
      name: "Disable Buttons",
      code: `<button disabled={count <= MIN}>-</button>\n<button disabled={count >= MAX}>+</button>`
    }
  ];

  // Battle Plan
  const battlePlan = [
    {
      step: "1",
      title: "Identify Counter Pattern",
      description: "Is this tracking/changing a number? YES = COUNTER"
    },
    {
      step: "2",
      title: "Choose Your Variables",
      description: "Pick state name: votes, quantity, score, laps, etc."
    },
    {
      step: "3",
      title: "Use the Skeleton",
      description: "Copy universal counter skeleton"
    },
    {
      step: "4",
      title: "Customize for Problem",
      description: "Change state name, start value, button text, display text"
    },
    {
      step: "5",
      title: "Add Constraints",
      description: "Min/max values, step sizes, disabled states"
    }
  ];

  // Common Errors
  const commonErrors = [
    {
      error: "State not updating",
      wrong: `count = count + 1;`,
      right: `setCount(count + 1);`
    },
    {
      error: "Going below zero",
      wrong: `setQuantity(quantity - 1);`,
      right: `setQuantity(Math.max(1, quantity - 1));`
    },
    {
      error: "Button not working",
      wrong: `<button onClick={handleClick}>`,
      right: `<button onClick={() => handleClick()}>\n// OR define function properly`
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < counterExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : counterExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: '🔄 Examples' },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'battle-plan', label: '⚡ Battle Plan' },
    { id: 'constraints', label: '🔒 Constraints' },
    { id: 'errors', label: '🚨 Common Errors' }
  ];

  return (
    <div className="counter-mastery-container">
      <header className="mastery-header">
        <h1>🚀 Counter Pattern Mastery Kit</h1>
        <p>Master counter variations from one universal skeleton</p>
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
              <h2>Universal Counter Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY counter problem
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="transformation-guide">
                <h3>🔄 Change Only These 3 Things:</h3>
                <ol>
                  <li><strong>State variable name</strong> (count → votes, quantity, score, etc.)</li>
                  <li><strong>Starting value</strong> (0 → 1 for quantities, etc.)</li>
                  <li><strong>Display text & button labels</strong> (Match your problem context)</li>
                </ol>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>{counterExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {counterExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{counterExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {counterExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{counterExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Problem</div>
                  <div>State Name</div>
                  <div>Start Value</div>
                  <div>Display Text</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.problem}</strong></div>
                    <div><code>{item.stateName}</code></div>
                    <div><code>{item.startValue}</code></div>
                    <div>{item.displayText}</div>
                  </div>
                ))}
              </div>

              <div className="state-options">
                <h3>Choose Your State Name:</h3>
                <div className="state-grid">
                  <code>const [count, setCount] = useState(0);</code>
                  <code>const [votes, setVotes] = useState(0);</code>
                  <code>const [quantity, setQuantity] = useState(1);</code>
                  <code>const [score, setScore] = useState(0);</code>
                  <code>const [laps, setLaps] = useState(0);</code>
                  <code>const [likes, setLikes] = useState(0);</code>
                </div>
              </div>
            </section>
          )}

          {/* Battle Plan */}
          {activeTab === 'battle-plan' && (
            <section className="battle-plan-section">
              <h2>Interview Battle Plan</h2>
              
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
                <h3>Customize for ANY Problem:</h3>
                <div className="code-snippet">
                  <pre><code>{`function ComponentName() {
  const [number, setNumber] = useState(0);
  
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);
  const reset = () => setNumber(0);
  
  return (
    <div>
      <h1>Display: {number}</h1>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}</code></pre>
                </div>
              </div>
            </section>
          )}

          {/* Constraints */}
          {activeTab === 'constraints' && (
            <section className="constraints-section">
              <h2>Common Constraints</h2>
              
              <div className="constraints-grid">
                {constraints.map((constraint, index) => (
                  <div key={index} className="constraint-item">
                    <h4>{constraint.name}</h4>
                    <pre><code>{constraint.code}</code></pre>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Common Errors */}
          {activeTab === 'errors' && (
            <section className="errors-section">
              <h2>Common Errors & Fixes</h2>
              
              <div className="errors-list">
                {commonErrors.map((error, index) => (
                  <div key={index} className="error-item">
                    <h3>Error: {error.error}</h3>
                    <div className="error-comparison">
                      <div className="error-wrong">
                        <h4>Wrong:</h4>
                        <pre><code>{error.wrong}</code></pre>
                      </div>
                      <div className="error-right">
                        <h4>Right:</h4>
                        <pre><code>{error.right}</code></pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterMastery;