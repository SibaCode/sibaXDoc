// src/components/StudyGuide.js
import React, { useState } from 'react';
import './StudyGuide.css';

const StudyGuide = ({ onNavigateToLMS }) => {
  const [keywords, setKeywords] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Enhanced knowledge base with direct links to Toggle Mastery
  const knowledgeBase = [
    {
      topic: "React Toggle Patterns",
      keywords: ["toggle", "on/off", "show/hide", "visible", "state", "useState", "button", "switch"],
      chapters: ["Chapter 3: State Management", "Chapter 5: Conditional Rendering"],
      sections: ["3.2: useState Hook", "5.1: Conditional Rendering with &&", "5.3: Ternary Operators"],
      examples: ["ToggleSkeleton", "ShowHideMessage", "DarkLightMode"],
      quickTips: [
        "Use useState(false) for toggle state",
        "Button text changes based on state",
        "Conditional rendering with && or ternary",
        "Remember: state → button text → content"
      ],
      priority: "HIGH",
      relatedTo: "toggle-mastery", // New field to indicate this links to Toggle Mastery
      lmsTab: "examples" // Which tab to open in Toggle Mastery
    },
    {
      topic: "React useState Hook",
      keywords: ["useState", "state", "setState", "hook", "functional component", "react state"],
      chapters: ["Chapter 3: State Management"],
      sections: ["3.1: Introduction to Hooks", "3.2: useState Deep Dive", "3.3: State Updates"],
      examples: ["Counter", "FormInput", "TodoList"],
      quickTips: [
        "Always use setter function, never mutate directly",
        "State updates are asynchronous",
        "Use functional updates for previous state",
        "Initialize with appropriate default value"
      ],
      priority: "HIGH",
      relatedTo: "toggle-mastery",
      lmsTab: "skeleton"
    },
    {
      topic: "Conditional Rendering",
      keywords: ["conditional", "render", "if", "ternary", "logical AND", "show hide", "display"],
      chapters: ["Chapter 5: Conditional Rendering"],
      sections: ["5.1: Logical && Operator", "5.2: Ternary Operator", "5.3: Multiple Conditions"],
      examples: ["ShowHideMessage", "UserGreeting", "NotificationBanner"],
      quickTips: [
        "Use && for simple show/hide",
        "Use ternary for if/else scenarios",
        "Extract complex logic outside JSX",
        "Consider early returns for complex conditions"
      ],
      priority: "MEDIUM",
      relatedTo: "toggle-mastery",
      lmsTab: "examples"
    },
    {
      topic: "Event Handling",
      keywords: ["onClick", "event", "handler", "button", "form", "click", "interaction"],
      chapters: ["Chapter 4: Event Handling"],
      sections: ["4.1: Click Events", "4.2: Form Events", "4.3: Event Object"],
      examples: ["ButtonClick", "FormSubmit", "InputChange"],
      quickTips: [
        "Use arrow functions for handlers",
        "Pass event parameter when needed",
        "Prevent default behavior with event.preventDefault()",
        "Use descriptive handler names"
      ],
      priority: "MEDIUM"
    },
    {
      topic: "Interview Toggle Questions",
      keywords: ["interview", "question", "problem", "solution", "cheatsheet", "pattern"],
      chapters: ["Interview Preparation Guide"],
      sections: ["Common Toggle Patterns", "Solution Templates", "Gotchas and Fixes"],
      examples: ["All Toggle Examples"],
      quickTips: [
        "Identify the toggle pattern first",
        "Use the universal skeleton",
        "Test both states (on/off)",
        "Check for common mistakes"
      ],
      priority: "HIGH",
      relatedTo: "toggle-mastery",
      lmsTab: "cheatsheet"
    },
    {
      topic: "Toggle Common Mistakes",
      keywords: ["mistake", "error", "bug", "fix", "problem", "not working", "issue"],
      chapters: ["Debugging Guide"],
      sections: ["Common React Errors", "State Management Issues", "Event Handling Problems"],
      examples: ["Debug Examples"],
      quickTips: [
        "Check onClick handler syntax",
        "Verify state updates properly",
        "Ensure conditional rendering works",
        "Test edge cases"
      ],
      priority: "HIGH",
      relatedTo: "toggle-mastery",
      lmsTab: "gotchas"
    }
  ];

  const findRelevantTopics = (searchKeywords) => {
    const searchTerms = searchKeywords.toLowerCase().split(' ').filter(term => term.length > 2);
    
    const matches = knowledgeBase.map(topic => {
      const matchedKeywords = topic.keywords.filter(keyword => 
        searchTerms.some(term => keyword.includes(term))
      );
      
      const score = matchedKeywords.length;
      
      return {
        ...topic,
        score,
        matchedKeywords
      };
    }).filter(topic => topic.score > 0)
      .sort((a, b) => b.score - a.score);

    return matches;
  };

  const handleSearch = () => {
    if (keywords.trim()) {
      const results = findRelevantTopics(keywords);
      setSuggestions(results);
      setShowResults(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleNavigateToLMS = (topic) => {
    if (onNavigateToLMS && topic.relatedTo === "toggle-mastery") {
      onNavigateToLMS(topic.lmsTab || 'skeleton');
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return '#ef4444';
      case 'MEDIUM': return '#f59e0b';
      case 'LOW': return '#10b981';
      default: return '#6b7280';
    }
  };

  const predefinedQuestions = [
    "How to create toggle button?",
    "What is useState hook?",
    "How to show/hide content?",
    "React toggle patterns",
    "Toggle interview questions"
  ];

  return (
    <div className="study-guide-container">
      <header className="guide-header">
        <h1>🎯 Smart Study Guide</h1>
        <p>Type keywords from your exam question and get directed to the right study material</p>
      </header>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type exam question keywords... (e.g., 'toggle button state management')"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            🔍 Find Study Material
          </button>
        </div>

        <div className="predefined-questions">
          <p>💡 Quick questions to try:</p>
          <div className="question-chips">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setKeywords(question);
                  setTimeout(handleSearch, 100);
                }}
                className="question-chip"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showResults && (
        <div className="results-section">
          <h2>📚 Recommended Study Material</h2>
          <p className="results-info">
            Found {suggestions.length} relevant topic{suggestions.length !== 1 ? 's' : ''} for: 
            <strong> "{keywords}"</strong>
          </p>

          {suggestions.length === 0 ? (
            <div className="no-results">
              <h3>🤔 No exact matches found</h3>
              <p>Try these suggestions:</p>
              <ul>
                <li>Use more specific keywords</li>
                <li>Try related terms (e.g., "state" instead of "variable")</li>
                <li>Check the predefined questions above</li>
                <li>Review the Toggle Mastery section for React patterns</li>
              </ul>
            </div>
          ) : (
            <div className="suggestions-grid">
              {suggestions.map((topic, index) => (
                <div key={index} className="topic-card">
                  <div className="topic-header">
                    <h3>{topic.topic}</h3>
                    <div className="topic-badges">
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(topic.priority) }}
                      >
                        {topic.priority} PRIORITY
                      </span>
                      {topic.relatedTo === "toggle-mastery" && (
                        <span className="lms-badge">
                          🚀 IN REACT MASTERY
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="match-info">
                    <p>🔍 Matched keywords: <strong>{topic.matchedKeywords.join(', ')}</strong></p>
                    <p>📊 Relevance score: <strong>{topic.score}/10</strong></p>
                  </div>

                  <div className="study-plan">
                    <div className="plan-section">
                      <h4>📖 Chapters to Read:</h4>
                      <ul>
                        {topic.chapters.map((chapter, idx) => (
                          <li key={idx}>{chapter}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="plan-section">
                      <h4>🎯 Focus Sections:</h4>
                      <ul>
                        {topic.sections.map((section, idx) => (
                          <li key={idx}>{section}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="plan-section">
                      <h4>💻 Practice Examples:</h4>
                      <ul>
                        {topic.examples.map((example, idx) => (
                          <li key={idx}>
                            <code>{example}</code>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="plan-section">
                      <h4>💡 Quick Tips:</h4>
                      <ul>
                        {topic.quickTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="action-buttons">
                    {topic.relatedTo === "toggle-mastery" ? (
                      <>
                        <button 
                          className="btn-primary"
                          onClick={() => handleNavigateToLMS(topic)}
                        >
                          🚀 Open in React Mastery
                        </button>
                        <button className="btn-secondary">
                          📚 Study Theory First
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn-primary">
                          📚 Open Chapter
                        </button>
                        <button className="btn-secondary">
                          💻 Practice Now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Quick Reference Section */}
      <div className="quick-reference">
        <h2>🚀 Quick Study Strategies</h2>
        <div className="strategies-grid">
          <div className="strategy-card">
            <h3>🔍 Keyword Strategy</h3>
            <ul>
              <li>Use specific technical terms</li>
              <li>Include both broad and narrow keywords</li>
              <li>Think about what the question is REALLY asking</li>
              <li>Use synonyms for better matches</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>📚 Study Approach</h3>
            <ul>
              <li>Start with HIGH priority topics</li>
              <li>Click 🚀 buttons to open in React Mastery</li>
              <li>Practice with the examples provided</li>
              <li>Use the quick tips for exam recall</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>🎯 Exam Tips</h3>
            <ul>
              <li>Look for "toggle", "show/hide" patterns</li>
              <li>Remember useState structure</li>
              <li>Practice conditional rendering patterns</li>
              <li>Master event handling syntax</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;