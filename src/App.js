// src/App.js
import React, { useState } from 'react';
import StudyGuide from './components/StudyGuide';
import ToggleMastery from './components/ToggleMastery';
import CounterMastery from './components/CounterMastery';
import BasicListMastery from './components/BasicListMastery';
import ListWithSearchMastery from './components/ListWithSearchMastery';
import FormMastery from './components/FormMastery';
import SearchMastery from './components/SearchMastery';
import DropdownMastery from './components/DropdownMastery';
import LiveInputMastery from './components/LiveInputMastery';
import CounterListMastery from './components/CounterListMastery';
import HtmlElementsMastery from './components/HtmlElementsMastery';
import LetterTilesMastery from './components/LetterTilesMastery';
import ContextApiMastery from './components/ContextApiMastery';
import PhoneBookMastery from './components/PhoneBookMastery';
import TicTacToeMastery from './components/TicTacToeMastery';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('study');
  const [lmsTab, setLmsTab] = useState('skeleton');
  const [counterTab, setCounterTab] = useState('counter-skeleton');
  const [basicListTab, setBasicListTab] = useState('skeleton');
  const [listSearchTab, setListSearchTab] = useState('skeleton');
  const [formTab, setFormTab] = useState('skeleton');
  const [searchTab, setSearchTab] = useState('skeleton');
  const [dropdownTab, setDropdownTab] = useState('skeleton');
  const [liveInputTab, setLiveInputTab] = useState('skeleton');
  const [counterListTab, setCounterListTab] = useState('skeleton');
  const [htmlTab, setHtmlTab] = useState('skeleton');
  const [letterTilesTab, setLetterTilesTab] = useState('skeleton');
  const [contextApiTab, setContextApiTab] = useState('skeleton');
  const [phoneBookTab, setPhoneBookTab] = useState('skeleton');
  const [ticTacToeTab, setTicTacToeTab] = useState('skeleton');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigateToLMS = (tab = 'skeleton') => {
    setLmsTab(tab);
    setActiveTab('lms');
    setMobileMenuOpen(false);
  };

  const handleNavigateToCounter = (tab = 'counter-skeleton') => {
    setCounterTab(tab);
    setActiveTab('counter');
    setMobileMenuOpen(false);
  };

  const handleNavigateToBasicList = (tab = 'skeleton') => {
    setBasicListTab(tab);
    setActiveTab('basic-list');
    setMobileMenuOpen(false);
  };

  const handleNavigateToListSearch = (tab = 'skeleton') => {
    setListSearchTab(tab);
    setActiveTab('list-search');
    setMobileMenuOpen(false);
  };

  const handleNavigateToForm = (tab = 'skeleton') => {
    setFormTab(tab);
    setActiveTab('form');
    setMobileMenuOpen(false);
  };

  const handleNavigateToSearch = (tab = 'skeleton') => {
    setSearchTab(tab);
    setActiveTab('search');
    setMobileMenuOpen(false);
  };

  const handleNavigateToDropdown = (tab = 'skeleton') => {
    setDropdownTab(tab);
    setActiveTab('dropdown');
    setMobileMenuOpen(false);
  };

  const handleNavigateToLiveInput = (tab = 'skeleton') => {
    setLiveInputTab(tab);
    setActiveTab('live-input');
    setMobileMenuOpen(false);
  };

  const handleNavigateToCounterList = (tab = 'skeleton') => {
    setCounterListTab(tab);
    setActiveTab('counter-list');
    setMobileMenuOpen(false);
  };

  const handleNavigateToHtml = (tab = 'skeleton') => {
    setHtmlTab(tab);
    setActiveTab('html');
    setMobileMenuOpen(false);
  };

  const handleNavigateToLetterTiles = (tab = 'skeleton') => {
    setLetterTilesTab(tab);
    setActiveTab('letter-tiles');
    setMobileMenuOpen(false);
  };

  const handleNavigateToContextApi = (tab = 'skeleton') => {
    setContextApiTab(tab);
    setActiveTab('context-api');
    setMobileMenuOpen(false);
  };

  const handleNavigateToPhoneBook = (tab = 'skeleton') => {
    setPhoneBookTab(tab);
    setActiveTab('phone-book');
    setMobileMenuOpen(false);
  };

  const handleNavigateToTicTacToe = (tab = 'skeleton') => {
    setTicTacToeTab(tab);
    setActiveTab('tic-tac-toe');
    setMobileMenuOpen(false);
  };

  const handleNavigateToStudy = () => {
    setActiveTab('study');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { key: 'study', label: '🔍 Study Guide', onClick: handleNavigateToStudy },
    { key: 'lms', label: '🚀 Toggle Mastery', onClick: () => { setActiveTab('lms'); setMobileMenuOpen(false); } },
    { key: 'counter', label: '🔢 Counter Mastery', onClick: () => { setActiveTab('counter'); setMobileMenuOpen(false); } },
    { key: 'basic-list', label: '📝 Basic List', onClick: () => { setActiveTab('basic-list'); setMobileMenuOpen(false); } },
    { key: 'list-search', label: '🔍 List + Search', onClick: () => { setActiveTab('list-search'); setMobileMenuOpen(false); } },
    { key: 'form', label: '📋 Form Mastery', onClick: () => { setActiveTab('form'); setMobileMenuOpen(false); } },
    { key: 'search', label: '🔎 Search Mastery', onClick: () => { setActiveTab('search'); setMobileMenuOpen(false); } },
    { key: 'dropdown', label: '🎨 Dropdown Mastery', onClick: () => { setActiveTab('dropdown'); setMobileMenuOpen(false); } },
    { key: 'live-input', label: '📝 Live Input', onClick: () => { setActiveTab('live-input'); setMobileMenuOpen(false); } },
    { key: 'counter-list', label: '📊 Counter & List', onClick: () => { setActiveTab('counter-list'); setMobileMenuOpen(false); } },
    { key: 'html', label: '🏗️ HTML Elements', onClick: () => { setActiveTab('html'); setMobileMenuOpen(false); } },
    { key: 'letter-tiles', label: '🎯 Letter Tiles', onClick: () => { setActiveTab('letter-tiles'); setMobileMenuOpen(false); } },
    { key: 'context-api', label: '🌐 Context API', onClick: () => { setActiveTab('context-api'); setMobileMenuOpen(false); } },
    { key: 'phone-book', label: '📞 Phone Book', onClick: () => { setActiveTab('phone-book'); setMobileMenuOpen(false); } },
    { key: 'tic-tac-toe', label: '🎮 Tic Tac Toe', onClick: () => { setActiveTab('tic-tac-toe'); setMobileMenuOpen(false); } },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-header">
            <h1>🎓 Smart Study System</h1>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <button 
                key={item.key}
                className={`nav-link ${activeTab === item.key ? 'active' : ''}`}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'study' && (
          <StudyGuide 
            onNavigateToLMS={handleNavigateToLMS} 
            onNavigateToCounter={handleNavigateToCounter}
            onNavigateToBasicList={handleNavigateToBasicList}
            onNavigateToListSearch={handleNavigateToListSearch}
            onNavigateToForm={handleNavigateToForm}
            onNavigateToSearch={handleNavigateToSearch}
            onNavigateToDropdown={handleNavigateToDropdown}
            onNavigateToLiveInput={handleNavigateToLiveInput}
            onNavigateToCounterList={handleNavigateToCounterList}
            onNavigateToHtml={handleNavigateToHtml}
            onNavigateToLetterTiles={handleNavigateToLetterTiles}
            onNavigateToContextApi={handleNavigateToContextApi}
            onNavigateToPhoneBook={handleNavigateToPhoneBook}
            onNavigateToTicTacToe={handleNavigateToTicTacToe}
          />
        )}
        {activeTab === 'lms' && (
          <ToggleMastery initialTab={lmsTab} />
        )}
        {activeTab === 'counter' && (
          <CounterMastery initialTab={counterTab} />
        )}
        {activeTab === 'basic-list' && (
          <BasicListMastery initialTab={basicListTab} />
        )}
        {activeTab === 'list-search' && (
          <ListWithSearchMastery initialTab={listSearchTab} />
        )}
        {activeTab === 'form' && (
          <FormMastery initialTab={formTab} />
        )}
        {activeTab === 'search' && (
          <SearchMastery initialTab={searchTab} />
        )}
        {activeTab === 'dropdown' && (
          <DropdownMastery initialTab={dropdownTab} />
        )}
        {activeTab === 'live-input' && (
          <LiveInputMastery initialTab={liveInputTab} />
        )}
        {activeTab === 'counter-list' && (
          <CounterListMastery initialTab={counterListTab} />
        )}
        {activeTab === 'html' && (
          <HtmlElementsMastery initialTab={htmlTab} />
        )}
        {activeTab === 'letter-tiles' && (
          <LetterTilesMastery initialTab={letterTilesTab} />
        )}
        {activeTab === 'context-api' && (
          <ContextApiMastery initialTab={contextApiTab} />
        )}
        {activeTab === 'phone-book' && (
          <PhoneBookMastery initialTab={phoneBookTab} />
        )}
        {activeTab === 'tic-tac-toe' && (
          <TicTacToeMastery initialTab={ticTacToeTab} />
        )}
      </main>
    </div>
  );
}

export default App;