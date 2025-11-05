// src/App.js
import React, { useState } from 'react';
import StudyGuide from './components/StudyGuide';
import ToggleMastery from './components/ToggleMastery';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('study');
  const [lmsTab, setLmsTab] = useState('skeleton'); // Track which LMS tab to show

  const handleNavigateToLMS = (tab = 'skeleton') => {
    setLmsTab(tab);
    setActiveTab('lms');
  };

  const handleNavigateToStudy = () => {
    setActiveTab('study');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1>🎓 Smart Study System</h1>
          <div className="nav-links">
            <button 
              className={`nav-link ${activeTab === 'study' ? 'active' : ''}`}
              onClick={handleNavigateToStudy}
            >
              🔍 Study Guide
            </button>
            <button 
              className={`nav-link ${activeTab === 'lms' ? 'active' : ''}`}
              onClick={() => setActiveTab('lms')}
            >
              🚀 React Mastery
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'study' && (
          <StudyGuide onNavigateToLMS={handleNavigateToLMS} />
        )}
        {activeTab === 'lms' && (
          <ToggleMastery initialTab={lmsTab} />
        )}
      </main>
    </div>
  );
}

export default App;