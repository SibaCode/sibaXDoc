// src/components/LMSViewer.js
import React, { useState } from 'react';
import './LMSViewer.css';

const LMSViewer = () => {
  const [activeTab, setActiveTab] = useState('skeleton');
  const [currentExample, setCurrentExample] = useState(0);

  // Sample course data - you can replace this with your actual content
  const courseData = {
    title: "React Components Fundamentals",
    topic: "State Management with useState Hook",
    skeleton: {
      title: "Component Structure",
      content: `// Basic React Component Structure
import React, { useState } from 'react';

const MyComponent = () => {
  // State declaration
  const [state, setState] = useState(initialValue);
  
  // Event handlers
  const handleAction = () => {
    setState(newValue);
  };
  
  return (
    <div>
      {/* JSX content */}
      <button onClick={handleAction}>Action</button>
    </div>
  );
};

export default MyComponent;`
    },
    examples: [
      {
        title: "Counter Component",
        code: `// Simple Counter
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`,
        explanation: "This example shows basic state management for a counter. The useState hook manages the count value, and we provide functions to update it."
      },
      {
        title: "Form Input Handling",
        code: `// Form with Multiple Inputs
import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};`,
        explanation: "This demonstrates managing multiple form inputs with a single state object. We use the spread operator to update individual fields."
      },
      {
        title: "Todo List App",
        code: `// Todo List with Add/Remove
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none' 
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
        explanation: "A complete todo application showing array state management, adding items, removing items, and toggling completion status."
      }
    ],
    questions: [
      {
        question: "What is the purpose of the useState hook in React?",
        answer: "useState allows functional components to manage local state. It returns the current state value and a function to update it."
      },
      {
        question: "How do you update state based on previous state?",
        answer: "Use the functional update pattern: setState(prevState => newState). This ensures you're working with the latest state."
      },
      {
        question: "When should you use multiple useState hooks vs a single state object?",
        answer: "Use multiple useState hooks for independent values, and a single state object when values are related and often updated together."
      }
    ],
    steps: [
      "Identify what data needs to be reactive in your component",
      "Import useState from React",
      "Declare state variable and setter using array destructuring",
      "Initialize with default value in useState()",
      "Use the state variable in your JSX",
      "Update state using the setter function, never modify directly"
    ]
  };

  const nextExample = () => {
    setCurrentExample(prev => 
      prev < courseData.examples.length - 1 ? prev + 1 : 0
    );
  };

  const prevExample = () => {
    setCurrentExample(prev => 
      prev > 0 ? prev - 1 : courseData.examples.length - 1
    );
  };

  return (
    <div className="lms-container">
      <header className="lms-header">
        <h1>📚 {courseData.title}</h1>
        <h2>{courseData.topic}</h2>
      </header>

      <div className="lms-content">
        {/* Navigation Tabs */}
        <div className="lms-tabs">
          <button 
            className={`tab ${activeTab === 'skeleton' ? 'active' : ''}`}
            onClick={() => setActiveTab('skeleton')}
          >
            🏗️ Structure
          </button>
          <button 
            className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            💡 Examples
          </button>
          <button 
            className={`tab ${activeTab === 'questions' ? 'active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            ❓ Q&A
          </button>
          <button 
            className={`tab ${activeTab === 'steps' ? 'active' : ''}`}
            onClick={() => setActiveTab('steps')}
          >
            🛠️ Steps
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Skeleton Tab */}
          {activeTab === 'skeleton' && (
            <div className="skeleton-section">
              <h3>{courseData.skeleton.title}</h3>
              <div className="code-block">
                <pre><code>{courseData.skeleton.content}</code></pre>
              </div>
              <div className="skeleton-explanation">
                <h4>Key Points:</h4>
                <ul>
                  <li>Always import React and necessary hooks</li>
                  <li>State should be declared at the top of component</li>
                  <li>Use descriptive names for state variables</li>
                  <li>Never mutate state directly - always use setter function</li>
                </ul>
              </div>
            </div>
          )}

          {/* Examples Tab */}
          {activeTab === 'examples' && (
            <div className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {courseData.examples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>
                    {currentExample + 1} / {courseData.examples.length}
                  </span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <div className="code-block">
                <pre><code>{courseData.examples[currentExample].code}</code></pre>
              </div>
              
              <div className="explanation">
                <h4>Explanation:</h4>
                <p>{courseData.examples[currentExample].explanation}</p>
              </div>

              <div className="practice-questions">
                <h4>💭 Think About:</h4>
                <ul>
                  <li>How would you modify this component to add validation?</li>
                  <li>What edge cases should be considered?</li>
                  <li>How could this be optimized for performance?</li>
                </ul>
              </div>
            </div>
          )}

          {/* Questions Tab */}
          {activeTab === 'questions' && (
            <div className="questions-section">
              <h3>Common Questions & Answers</h3>
              <div className="qa-list">
                {courseData.questions.map((qa, index) => (
                  <div key={index} className="qa-item">
                    <div className="question">
                      <strong>Q: {qa.question}</strong>
                    </div>
                    <div className="answer">
                      <strong>A:</strong> {qa.answer}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="self-test">
                <h4>🧪 Self-Test Questions:</h4>
                <ul>
                  <li>What happens if you call setState multiple times in a function?</li>
                  <li>How does useState differ from this.setState in class components?</li>
                  <li>When would you use useReducer instead of useState?</li>
                </ul>
              </div>
            </div>
          )}

          {/* Steps Tab */}
          {activeTab === 'steps' && (
            <div className="steps-section">
              <h3>Step-by-Step Implementation Guide</h3>
              <ol className="steps-list">
                {courseData.steps.map((step, index) => (
                  <li key={index} className="step-item">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">{step}</div>
                  </li>
                ))}
              </ol>
              
              <div className="implementation-tips">
                <h4>💡 Implementation Tips:</h4>
                <div className="tips-grid">
                  <div className="tip">
                    <strong>Start Simple</strong>
                    <p>Begin with basic state, then add complexity</p>
                  </div>
                  <div className="tip">
                    <strong>Use Console Log</strong>
                    <p>Log state changes to understand the flow</p>
                  </div>
                  <div className="tip">
                    <strong>Test Edge Cases</strong>
                    <p>What happens with empty inputs or boundaries?</p>
                  </div>
                  <div className="tip">
                    <strong>Refactor Later</strong>
                    <p>Get it working first, then optimize</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LMSViewer;