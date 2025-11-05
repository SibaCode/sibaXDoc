// src/App.js
import React, { useState } from 'react';
import StudyGuide from './components/StudyGuide';
import ToggleMastery from './components/ToggleMastery';
import CounterListMastery from './components/CounterListMastery';
import HtmlElementsMastery from './components/HtmlElementsMastery';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('study');
  const [lmsTab, setLmsTab] = useState('skeleton');
  const [counterTab, setCounterTab] = useState('counter-skeleton');
  const [htmlTab, setHtmlTab] = useState('skeleton');

  const handleNavigateToLMS = (tab = 'skeleton') => {
    setLmsTab(tab);
    setActiveTab('lms');
  };

  const handleNavigateToCounter = (tab = 'counter-skeleton') => {
    setCounterTab(tab);
    setActiveTab('counter');
  };

  const handleNavigateToHtml = (tab = 'skeleton') => {
    setHtmlTab(tab);
    setActiveTab('html');
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
              🚀 Toggle Mastery
            </button>
            <button 
              className={`nav-link ${activeTab === 'counter' ? 'active' : ''}`}
              onClick={() => setActiveTab('counter')}
            >
              🔢 Counter & List
            </button>
            <button 
              className={`nav-link ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              🏗️ HTML Elements
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'study' && (
          <StudyGuide 
            onNavigateToLMS={handleNavigateToLMS} 
            onNavigateToCounter={handleNavigateToCounter}
            onNavigateToHtml={handleNavigateToHtml}
          />
        )}
        {activeTab === 'lms' && (
          <ToggleMastery initialTab={lmsTab} />
        )}
        {activeTab === 'counter' && (
          <CounterListMastery initialTab={counterTab} />
        )}
        {activeTab === 'html' && (
          <HtmlElementsMastery initialTab={htmlTab} />
        )}
      </main>
    </div>
  );
}

export default App;