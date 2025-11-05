// src/components/CounterListMastery.js
import React, { useState } from 'react';
import './CounterListMastery.css';

const CounterListMastery = ({ initialTab = 'counter-skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);
  
  // Interactive states for live demos
  const [count, setCount] = useState(0);
  const [votes, setVotes] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [score, setScore] = useState(0);
  const [laps, setLaps] = useState(0);
  
  // List states for live demos
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [groceries, setGroceries] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');

  const counterExamples = [
    {
      title: "Universal Counter Skeleton",
      description: "The foundation for ALL counter patterns",
      code: `function CounterSkeleton() {
  // 🎯 STEP 1: CHOOSE YOUR STATE NAME
  const [count, setCount] = useState(0);
  // 💡 Change "count" to match your problem:
  // votes, quantity, score, points, etc.

  // 🎯 STEP 2: OPERATIONS (Change these names)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  // 🎯 STEP 3: DISPLAY TEXT (Change these)
  const displayText = \`Count: \${count}\`;

  return (
    <div>
      {/* 🎯 DISPLAY - Don't change this structure */}
      <h1>{displayText}</h1>
      
      {/* 🎯 BUTTONS - Don't change this structure */}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h1>Count: {count}</h1>
          <div className="demo-buttons">
            <button onClick={() => setCount(count - 1)} className="demo-btn">-</button>
            <button onClick={() => setCount(count + 1)} className="demo-btn">+</button>
            <button onClick={() => setCount(0)} className="demo-btn">Reset</button>
          </div>
        </div>
      )
    },
    {
      title: "Vote Counter",
      description: "Upvote/downvote system",
      code: `function VoteCounter() {
  const [votes, setVotes] = useState(0);                    // 🎯 Changed state name
  
  const upvote = () => setVotes(votes + 1);                 // 🎯 Changed operation names
  const downvote = () => setVotes(votes - 1);
  const resetVotes = () => setVotes(0);
  
  const displayText = \`Votes: \${votes}\`;                    // 🎯 Changed display text

  return (
    <div>
      <h1>{displayText}</h1>
      <button onClick={downvote}>👎</button>                {/* 🎯 Changed button labels */}
      <button onClick={upvote}>👍</button>
      <button onClick={resetVotes}>Reset Votes</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h1>Votes: {votes}</h1>
          <div className="demo-buttons">
            <button onClick={() => setVotes(votes - 1)} className="demo-btn">👎</button>
            <button onClick={() => setVotes(votes + 1)} className="demo-btn">👍</button>
            <button onClick={() => setVotes(0)} className="demo-btn">Reset Votes</button>
          </div>
        </div>
      )
    },
    {
      title: "Shopping Cart Quantity",
      description: "Quantity selector with minimum limit",
      code: `function CartQuantity() {
  const [quantity, setQuantity] = useState(1);              // 🎯 Changed state name
  
  const increase = () => setQuantity(quantity + 1);         // 🎯 Changed operation names
  const decrease = () => setQuantity(Math.max(1, quantity - 1)); // 🎯 Added min limit
  const resetQty = () => setQuantity(1);
  
  const displayText = \`Quantity: \${quantity}\`;              // 🎯 Changed display text

  return (
    <div>
      <h3>{displayText}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={resetQty}>Reset</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h3>Quantity: {quantity}</h3>
          <div className="demo-buttons">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="demo-btn">-</button>
            <button onClick={() => setQuantity(quantity + 1)} className="demo-btn">+</button>
            <button onClick={() => setQuantity(1)} className="demo-btn">Reset</button>
          </div>
        </div>
      )
    },
    {
      title: "Score Keeper",
      description: "Point tracking system",
      code: `function ScoreKeeper() {
  const [score, setScore] = useState(0);                    // 🎯 Changed state name
  
  const addPoint = () => setScore(score + 1);               // 🎯 Changed operation names
  const subtractPoint = () => setScore(score - 1);
  const resetScore = () => setScore(0);
  
  const displayText = \`Score: \${score}\`;                    // 🎯 Changed display text

  return (
    <div>
      <h2>{displayText}</h2>
      <button onClick={subtractPoint}>-1 Point</button>     {/* 🎯 Changed button labels */}
      <button onClick={addPoint}>+1 Point</button>
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h2>Score: {score}</h2>
          <div className="demo-buttons">
            <button onClick={() => setScore(score - 1)} className="demo-btn">-1 Point</button>
            <button onClick={() => setScore(score + 1)} className="demo-btn">+1 Point</button>
            <button onClick={() => setScore(0)} className="demo-btn">Reset Score</button>
          </div>
        </div>
      )
    },
    {
      title: "Lap Counter",
      description: "Race lap tracking with practice exercise",
      code: `function LapCounter() {
  const [laps, setLaps] = useState(0);
  
  const completeLap = () => setLaps(laps + 1);
  const undoLap = () => setLaps(Math.max(0, laps - 1));
  const resetLaps = () => setLaps(0);
  
  return (
    <div>
      <h2>Laps: {laps}</h2>
      <button onClick={undoLap}>Undo Lap</button>
      <button onClick={completeLap}>Complete Lap</button>
      <button onClick={resetLaps}>Reset Laps</button>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h2>Laps: {laps}</h2>
          <div className="demo-buttons">
            <button onClick={() => setLaps(Math.max(0, laps - 1))} className="demo-btn">Undo Lap</button>
            <button onClick={() => setLaps(laps + 1)} className="demo-btn">Complete Lap</button>
            <button onClick={() => setLaps(0)} className="demo-btn">Reset Laps</button>
          </div>
        </div>
      )
    }
  ];

  const listExamples = [
    {
      title: "Universal List Skeleton",
      description: "The foundation for ALL list patterns",
      code: `import React, { useState } from 'react';

function ListSkeleton() {
  // 🎯 STEP 1: CHOOSE YOUR STATE NAMES
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  // 💡 Change "items" and "input" to match your problem

  // 🎯 STEP 2: OPERATIONS (Change these names)
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: Date.now(), text: input }]);
      setInput('');
    }
  };
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* 🎯 INPUT SECTION - Don't change this structure */}
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
      
      {/* 🎯 LIST SECTION - Don't change this structure */}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add item"
            className="demo-input"
          />
          <button onClick={() => {
            if (input.trim()) {
              setItems([...items, { id: Date.now(), text: input }]);
              setInput('');
            }
          }} className="demo-btn">Add</button>
          
          <ul className="demo-list">
            {items.map(item => (
              <li key={item.id} className="demo-list-item">
                {item.text}
                <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="demo-btn-small">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Todo List",
      description: "Task management system",
      code: `function TodoList() {
  const [todos, setTodos] = useState([]);                   // 🎯 Changed state names
  const [todoInput, setTodoInput] = useState('');
  
  const addTodo = () => {                                   // 🎯 Changed operation names
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };
  
  const removeTodo = (id) => {                              // 🎯 Changed operation names
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add todo"                              // 🎯 Changed placeholder
      />
      <button onClick={addTodo}>Add Todo</button>           // 🎯 Changed button text
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Delete</button>  {/* 🎯 Changed button text */}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <input 
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Add todo"
            className="demo-input"
          />
          <button onClick={() => {
            if (todoInput.trim()) {
              setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
              setTodoInput('');
            }
          }} className="demo-btn">Add Todo</button>
          
          <ul className="demo-list">
            {todos.map(todo => (
              <li key={todo.id} className="demo-list-item">
                {todo.text}
                <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} className="demo-btn-small">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Shopping List",
      description: "Grocery item management",
      code: `function ShoppingList() {
  const [groceries, setGroceries] = useState([]);           // 🎯 Changed state names
  const [groceryInput, setGroceryInput] = useState('');
  
  const addGrocery = () => {                                // 🎯 Changed operation names
    if (groceryInput.trim()) {
      setGroceries([...groceries, { id: Date.now(), name: groceryInput }]);
      setGroceryInput('');
    }
  };
  
  const removeGrocery = (id) => {                           // 🎯 Changed operation names
    setGroceries(groceries.filter(grocery => grocery.id !== id));
  };

  return (
    <div>
      <h2>🛒 Shopping List</h2>                             {/* 🎯 Added title */}
      <input 
        value={groceryInput}
        onChange={(e) => setGroceryInput(e.target.value)}
        placeholder="Add grocery item"                      // 🎯 Changed placeholder
      />
      <button onClick={addGrocery}>Add to Cart</button>     // 🎯 Changed button text
      
      <ul>
        {groceries.map(grocery => (
          <li key={grocery.id}>
            {grocery.name}
            <button onClick={() => removeGrocery(grocery.id)}>❌</button>  {/* 🎯 Changed button */}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="live-demo">
          <h3>🛒 Shopping List</h3>
          <input 
            value={groceryInput}
            onChange={(e) => setGroceryInput(e.target.value)}
            placeholder="Add grocery item"
            className="demo-input"
          />
          <button onClick={() => {
            if (groceryInput.trim()) {
              setGroceries([...groceries, { id: Date.now(), name: groceryInput }]);
              setGroceryInput('');
            }
          }} className="demo-btn">Add to Cart</button>
          
          <ul className="demo-list">
            {groceries.map(grocery => (
              <li key={grocery.id} className="demo-list-item">
                {grocery.name}
                <button onClick={() => setGroceries(groceries.filter(g => g.id !== grocery.id))} className="demo-btn-small">
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  const counterPatterns = [
    { problem: "Vote System", stateName: "votes", operations: "upvote/downvote", display: "Votes: ${votes}" },
    { problem: "Cart Quantity", stateName: "quantity", operations: "increase/decrease", display: "Quantity: ${quantity}" },
    { problem: "Game Score", stateName: "score", operations: "addPoint/subtractPoint", display: "Score: ${score}" },
    { problem: "Lap Counter", stateName: "laps", operations: "completeLap/undoLap", display: "Laps: ${laps}" },
    { problem: "Like Counter", stateName: "likes", operations: "like/unlike", display: "Likes: ${likes}" }
  ];

  const listPatterns = [
    { problem: "Todo List", stateNames: "todos/todoInput", operations: "addTodo/removeTodo", placeholder: "Add todo" },
    { problem: "Shopping List", stateNames: "groceries/groceryInput", operations: "addGrocery/removeGrocery", placeholder: "Add grocery" },
    { problem: "Guest List", stateNames: "guests/guestInput", operations: "addGuest/removeGuest", placeholder: "Add guest" },
    { problem: "Playlist", stateNames: "songs/songInput", operations: "addSong/removeSong", placeholder: "Add song" }
  ];

  const nextExample = () => {
    const examples = activeTab.includes('counter') ? counterExamples : listExamples;
    setCurrentExample(prev => prev < examples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    const examples = activeTab.includes('counter') ? counterExamples : listExamples;
    setCurrentExample(prev => prev > 0 ? prev - 1 : examples.length - 1);
  };

  const practiceExercises = [
    {
      title: "Bookmark Counter",
      description: "Create a bookmark counter that tracks how many items you've bookmarked",
      hint: "Use state for bookmarks count, operations: addBookmark, removeBookmark, resetBookmarks"
    },
    {
      title: "Student List",
      description: "Create a student management system to add and remove students",
      hint: "Use state for students array and input, operations: addStudent, removeStudent"
    },
    {
      title: "Timer Rounds",
      description: "Create a round counter for workout intervals",
      hint: "Use state for rounds, operations: completeRound, undoRound, resetRounds with min limit of 1"
    }
  ];

  return (
    <div className="counter-list-container">
      <header className="mastery-header">
        <h1>🎯 COUNTER & LIST PATTERNS MASTERY</h1>
        <p>Master two essential React patterns - counting and list management</p>
      </header>

      <div className="mastery-content">
        {/* Navigation Tabs */}
        <div className="mastery-tabs">
          <button 
            className={`tab ${activeTab === 'counter-skeleton' ? 'active' : ''}`}
            onClick={() => { setActiveTab('counter-skeleton'); setCurrentExample(0); }}
          >
            🔢 Counter Skeleton
          </button>
          <button 
            className={`tab ${activeTab === 'counter-examples' ? 'active' : ''}`}
            onClick={() => { setActiveTab('counter-examples'); setCurrentExample(0); }}
          >
            💡 Counter Examples
          </button>
          <button 
            className={`tab ${activeTab === 'list-skeleton' ? 'active' : ''}`}
            onClick={() => { setActiveTab('list-skeleton'); setCurrentExample(0); }}
          >
            📝 List Skeleton
          </button>
          <button 
            className={`tab ${activeTab === 'list-examples' ? 'active' : ''}`}
            onClick={() => { setActiveTab('list-examples'); setCurrentExample(0); }}
          >
            💡 List Examples
          </button>
          <button 
            className={`tab ${activeTab === 'patterns' ? 'active' : ''}`}
            onClick={() => setActiveTab('patterns')}
          >
            🎯 Pattern Reference
          </button>
          <button 
            className={`tab ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            🚀 Practice Exercises
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Counter Skeleton Tab */}
          {activeTab === 'counter-skeleton' && (
            <div className="skeleton-section">
              <h2>🏗️ UNIVERSAL COUNTER SKELETON</h2>
              <div className="code-block">
                <pre><code>{counterExamples[0].code}</code></pre>
              </div>
              {counterExamples[0].liveDemo}
              
              <div className="transformation-guide">
                <h3>🔄 TRANSFORMATION GUIDE</h3>
                <p><strong>Only change 3 things:</strong></p>
                <ol>
                  <li><strong>State variable name</strong> (count → votes, quantity, score, etc.)</li>
                  <li><strong>Operation names</strong> (increment/decrement → upvote/downvote, etc.)</li>
                  <li><strong>Display text</strong> (Count: ${count} → Votes: ${votes}, etc.)</li>
                </ol>
                <p><em>The return structure stays exactly the same!</em></p>
              </div>
            </div>
          )}

          {/* Counter Examples Tab */}
          {activeTab === 'counter-examples' && (
            <div className="examples-section">
              <div className="example-header">
                <h3>Counter Example {currentExample + 1}: {counterExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentExample + 1} / {counterExamples.length}
                  </span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="example-description">
                <p>{counterExamples[currentExample].description}</p>
              </div>

              <div className="example-demo">
                <h4>🎯 Live Demo:</h4>
                {counterExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>📝 Code:</h4>
                <pre><code>{counterExamples[currentExample].code}</code></pre>
              </div>
            </div>
          )}

          {/* List Skeleton Tab */}
          {activeTab === 'list-skeleton' && (
            <div className="skeleton-section">
              <h2>🏗️ UNIVERSAL LIST SKELETON</h2>
              <div className="code-block">
                <pre><code>{listExamples[0].code}</code></pre>
              </div>
              {listExamples[0].liveDemo}
              
              <div className="transformation-guide">
                <h3>🔄 TRANSFORMATION GUIDE</h3>
                <p><strong>Only change 3 things:</strong></p>
                <ol>
                  <li><strong>State variable names</strong> (items/input → todos/todoInput, etc.)</li>
                  <li><strong>Operation names</strong> (addItem/removeItem → addTodo/removeTodo, etc.)</li>
                  <li><strong>Placeholder & button text</strong> ("Add item" → "Add todo", etc.)</li>
                </ol>
                <p><em>The list structure stays exactly the same!</em></p>
              </div>
            </div>
          )}

          {/* List Examples Tab */}
          {activeTab === 'list-examples' && (
            <div className="examples-section">
              <div className="example-header">
                <h3>List Example {currentExample + 1}: {listExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentExample + 1} / {listExamples.length}
                  </span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="example-description">
                <p>{listExamples[currentExample].description}</p>
              </div>

              <div className="example-demo">
                <h4>🎯 Live Demo:</h4>
                {listExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>📝 Code:</h4>
                <pre><code>{listExamples[currentExample].code}</code></pre>
              </div>
            </div>
          )}

          {/* Pattern Reference Tab */}
          {activeTab === 'patterns' && (
            <div className="patterns-section">
              <h2>🎯 QUICK REFERENCE GUIDE</h2>
              
              <div className="pattern-grid">
                <div className="pattern-category">
                  <h3>🔢 COUNTER PATTERN</h3>
                  <p><strong>Change 3 Things:</strong></p>
                  <ul>
                    <li>State variable name (count → votes, quantity, score)</li>
                    <li>Operation names (increment/decrement → upvote/downvote, etc.)</li>
                    <li>Display text (Count: ${count} → Votes: ${votes}, etc.)</li>
                  </ul>
                  
                  <h4>Common Counter Patterns:</h4>
                  <div className="pattern-table">
                    {counterPatterns.map((pattern, index) => (
                      <div key={index} className="pattern-item">
                        <strong>{pattern.problem}</strong>
                        <div>State: <code>{pattern.stateName}</code></div>
                        <div>Operations: <code>{pattern.operations}</code></div>
                        <div>Display: <code>{pattern.display}</code></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pattern-category">
                  <h3>📝 LIST PATTERN</h3>
                  <p><strong>Change 3 Things:</strong></p>
                  <ul>
                    <li>State variable names (items/input → todos/todoInput, etc.)</li>
                    <li>Operation names (addItem/removeItem → addTodo/removeTodo, etc.)</li>
                    <li>Placeholder & button text ("Add item" → "Add todo", etc.)</li>
                  </ul>
                  
                  <h4>Common List Patterns:</h4>
                  <div className="pattern-table">
                    {listPatterns.map((pattern, index) => (
                      <div key={index} className="pattern-item">
                        <strong>{pattern.problem}</strong>
                        <div>States: <code>{pattern.stateNames}</code></div>
                        <div>Operations: <code>{pattern.operations}</code></div>
                        <div>Placeholder: "{pattern.placeholder}"</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice Exercises Tab */}
          {activeTab === 'practice' && (
            <div className="practice-section">
              <h2>🚀 YOUR TURN TO PRACTICE!</h2>
              <p>Try these exercises to master counter and list patterns:</p>
              
              <div className="exercises-grid">
                {practiceExercises.map((exercise, index) => (
                  <div key={index} className="exercise-card">
                    <h3>{exercise.title}</h3>
                    <p>{exercise.description}</p>
                    <div className="exercise-hint">
                      <strong>💡 Hint:</strong> {exercise.hint}
                    </div>
                    <div className="exercise-actions">
                      <button className="btn-primary">Try It Yourself</button>
                      <button className="btn-secondary">Show Solution</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="quick-tips">
                <h3>💡 Quick Tips for Success:</h3>
                <ul>
                  <li>Start with the universal skeleton</li>
                  <li>Change only the 3 key elements</li>
                  <li>Test your component after each change</li>
                  <li>Practice with different use cases</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterListMastery;