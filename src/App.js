// src/App.js
import React, { useState } from 'react';
import ImageToText from './components/ImageToText';
import PDFViewer from './components/PDFViewer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('image');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1>📄 Document Tools</h1>
          <div className="nav-links">
            <button 
              className={`nav-link ${activeTab === 'image' ? 'active' : ''}`}
              onClick={() => setActiveTab('image')}
            >
              Image to Text
            </button>
            <button 
              className={`nav-link ${activeTab === 'pdf' ? 'active' : ''}`}
              onClick={() => setActiveTab('pdf')}
            >
              Document Library
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'image' && <ImageToText />}
        {activeTab === 'pdf' && <PDFViewer />}
      </main>
    </div>
  );
}

export default App;