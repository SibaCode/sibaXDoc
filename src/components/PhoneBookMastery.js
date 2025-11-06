// src/components/PhoneBookMastery.js
import React, { useState, useEffect } from 'react';
import './PhoneBookMastery.css';

const PhoneBookMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Demo states for live examples
  const [basicContacts, setBasicContacts] = useState([]);
  const [basicName, setBasicName] = useState('');
  const [basicPhone, setBasicPhone] = useState('');

  const [proContacts, setProContacts] = useState([]);
  const [proSearch, setProSearch] = useState('');
  const [proForm, setProForm] = useState({ name: '', phone: '', email: '', company: '' });
  const [editingId, setEditingId] = useState(null);

  const [mobileContacts, setMobileContacts] = useState([]);
  const [mobileSearch, setMobileSearch] = useState('');
  const [mobileShowForm, setMobileShowForm] = useState(false);
  const [mobileForm, setMobileForm] = useState({ name: '', phone: '' });

  // Load from localStorage for pro example
  useEffect(() => {
    const saved = localStorage.getItem('proContacts');
    if (saved) setProContacts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('proContacts', JSON.stringify(proContacts));
  }, [proContacts]);

  // Universal Phone Book Skeleton
  const universalSkeleton = `import React, { useState, useEffect } from 'react';

function PhoneBookSkeleton() {
  // 🎯 CORE STATE
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  // 🎯 COMPUTED VALUES
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🎯 CRUD OPERATIONS
  const addContact = () => {
    if (formData.name.trim() && formData.phone.trim()) {
      const newContact = {
        id: Date.now(),
        ...formData,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim()
      };
      setContacts(prev => [...prev, newContact]);
      setFormData({ name: '', phone: '', email: '' });
    }
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const updateContact = (id, updatedData) => {
    setContacts(prev => prev.map(contact =>
      contact.id === id ? { ...contact, ...updatedData } : contact
    ));
  };

  return (
    <div className="phone-book">
      {/* 🎯 HEADER */}
      <header>
        <h1>📞 Phone Book</h1>
      </header>

      {/* 🎯 SEARCH */}
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🎯 ADD FORM */}
      <div className="form-section">
        <h3>Add New Contact</h3>
        <input
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="tel"
          placeholder="Phone *"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      {/* 🎯 CONTACTS LIST */}
      <div className="contacts-section">
        <h3>Contacts ({filteredContacts.length})</h3>
        {filteredContacts.length === 0 ? (
          <p className="empty-state">
            {contacts.length === 0 ? 'No contacts yet' : 'No matches found'}
          </p>
        ) : (
          <div className="contacts-list">
            {filteredContacts.map(contact => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={deleteContact}
                onUpdate={updateContact}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PhoneBookSkeleton;`;

  // Phone Book Examples
  const phoneBookExamples = [
    {
      title: "Basic Phone Book",
      description: "Minimal implementation with add and delete functionality",
      code: `function BasicPhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    if (name && phone) {
      setContacts(prev => [...prev, { id: Date.now(), name, phone }]);
      setName('');
      setPhone('');
    }
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phone Book</h1>
      
      {/* Add Form */}
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add</button>
      </div>

      {/* Contacts List */}
      <div>
        {contacts.map(contact => (
          <div key={contact.id}>
            <span>{contact.name} - {contact.phone}</span>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="phone-book-demo basic-demo">
          <h2>📞 Basic Phone Book</h2>
          
          {/* Add Form */}
          <div className="demo-form">
            <input
              placeholder="Name"
              value={basicName}
              onChange={(e) => setBasicName(e.target.value)}
              className="demo-input"
            />
            <input
              placeholder="Phone"
              value={basicPhone}
              onChange={(e) => setBasicPhone(e.target.value)}
              className="demo-input"
            />
            <button 
              onClick={() => {
                if (basicName && basicPhone) {
                  setBasicContacts(prev => [...prev, { 
                    id: Date.now(), 
                    name: basicName, 
                    phone: basicPhone 
                  }]);
                  setBasicName('');
                  setBasicPhone('');
                }
              }}
              className="demo-button"
            >
              Add Contact
            </button>
          </div>

          {/* Contacts List */}
          <div className="demo-contacts">
            <h3>Contacts ({basicContacts.length})</h3>
            {basicContacts.map(contact => (
              <div key={contact.id} className="contact-item">
                <div className="contact-info">
                  <strong>{contact.name}</strong>
                  <span>{contact.phone}</span>
                </div>
                <button 
                  onClick={() => setBasicContacts(prev => prev.filter(c => c.id !== contact.id))}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Professional Phone Book",
      description: "Enhanced version with search, edit, and localStorage",
      code: `function ProfessionalPhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '' });
  const [editingId, setEditingId] = useState(null);

  // Local Storage
  useEffect(() => {
    const saved = localStorage.getItem('contacts');
    if (saved) setContacts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    Object.values(contact).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const saveContact = () => {
    if (editingId) {
      setContacts(prev => prev.map(contact =>
        contact.id === editingId ? { ...contact, ...form } : contact
      ));
      setEditingId(null);
    } else {
      setContacts(prev => [...prev, { id: Date.now(), ...form }]);
    }
    setForm({ name: '', phone: '', email: '', company: '' });
  };

  const editContact = (contact) => {
    setForm(contact);
    setEditingId(contact.id);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>👔 Professional Contacts</h1>
        <input
          style={styles.search}
          placeholder="🔍 Search all fields..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Form */}
      <div style={styles.form}>
        <h3>{editingId ? 'Edit Contact' : 'Add Contact'}</h3>
        {['name', 'phone', 'email', 'company'].map(field => (
          <input
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) => setForm(prev => ({ ...prev, [field]: e.target.value }))}
            style={styles.input}
          />
        ))}
        <button onClick={saveContact} style={styles.primaryButton}>
          {editingId ? 'Update' : 'Add'} Contact
        </button>
        {editingId && (
          <button onClick={() => { setEditingId(null); setForm({ name: '', phone: '', email: '', company: '' }); }}>
            Cancel
          </button>
        )}
      </div>

      {/* Contacts */}
      <div style={styles.contacts}>
        <h3>Contacts ({filteredContacts.length})</h3>
        <div style={styles.contactGrid}>
          {filteredContacts.map(contact => (
            <div key={contact.id} style={styles.contactCard}>
              <div>
                <h4>{contact.name}</h4>
                <p>📞 {contact.phone}</p>
                {contact.email && <p>📧 {contact.email}</p>}
                {contact.company && <p>🏢 {contact.company}</p>}
              </div>
              <div style={styles.contactActions}>
                <button onClick={() => editContact(contact)}>✏️</button>
                <button onClick={() => setContacts(prev => prev.filter(c => c.id !== contact.id))}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="phone-book-demo pro-demo">
          <header className="pro-header">
            <h1>👔 Professional Contacts</h1>
            <input
              placeholder="🔍 Search all fields..."
              value={proSearch}
              onChange={(e) => setProSearch(e.target.value)}
              className="pro-search"
            />
          </header>

          {/* Form */}
          <div className="pro-form">
            <h3>{editingId ? 'Edit Contact' : 'Add Contact'}</h3>
            {['name', 'phone', 'email', 'company'].map(field => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={proForm[field]}
                onChange={(e) => setProForm(prev => ({ ...prev, [field]: e.target.value }))}
                className="pro-input"
              />
            ))}
            <button 
              onClick={() => {
                if (editingId) {
                  setProContacts(prev => prev.map(contact =>
                    contact.id === editingId ? { ...contact, ...proForm } : contact
                  ));
                  setEditingId(null);
                } else {
                  setProContacts(prev => [...prev, { id: Date.now(), ...proForm }]);
                }
                setProForm({ name: '', phone: '', email: '', company: '' });
              }}
              className="pro-primary-button"
            >
              {editingId ? 'Update' : 'Add'} Contact
            </button>
            {editingId && (
              <button 
                onClick={() => { 
                  setEditingId(null); 
                  setProForm({ name: '', phone: '', email: '', company: '' }); 
                }}
                className="pro-secondary-button"
              >
                Cancel
              </button>
            )}
          </div>

          {/* Contacts */}
          <div className="pro-contacts">
            <h3>Contacts ({proContacts.filter(contact =>
              Object.values(contact).some(value =>
                value.toString().toLowerCase().includes(proSearch.toLowerCase())
              )
            ).length})</h3>
            <div className="pro-contact-grid">
              {proContacts.filter(contact =>
                Object.values(contact).some(value =>
                  value.toString().toLowerCase().includes(proSearch.toLowerCase())
                )
              ).map(contact => (
                <div key={contact.id} className="pro-contact-card">
                  <div>
                    <h4>{contact.name}</h4>
                    <p>📞 {contact.phone}</p>
                    {contact.email && <p>📧 {contact.email}</p>}
                    {contact.company && <p>🏢 {contact.company}</p>}
                  </div>
                  <div className="pro-contact-actions">
                    <button onClick={() => {
                      setProForm(contact);
                      setEditingId(contact.id);
                    }}>✏️</button>
                    <button onClick={() => setProContacts(prev => prev.filter(c => c.id !== contact.id))}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mobile-First Phone Book",
      description: "Optimized for mobile devices with floating action button",
      code: `function MobilePhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = () => {
    if (form.name && form.phone) {
      setContacts(prev => [...prev, { id: Date.now(), ...form }]);
      setForm({ name: '', phone: '' });
      setShowForm(false);
    }
  };

  return (
    <div style={mobileStyles.container}>
      {/* Header */}
      <div style={mobileStyles.header}>
        <h1 style={mobileStyles.title}>📱 Contacts</h1>
        <button 
          style={mobileStyles.floatingButton}
          onClick={() => setShowForm(true)}
        >
          +
        </button>
      </div>

      {/* Search */}
      <div style={mobileStyles.search}>
        <input
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={mobileStyles.searchInput}
        />
      </div>

      {/* Add Form Modal */}
      {showForm && (
        <div style={mobileStyles.modal}>
          <div style={mobileStyles.modalContent}>
            <h3>New Contact</h3>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
              style={mobileStyles.input}
            />
            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
              style={mobileStyles.input}
            />
            <div style={mobileStyles.modalActions}>
              <button onClick={() => setShowForm(false)} style={mobileStyles.secondaryButton}>
                Cancel
              </button>
              <button onClick={addContact} style={mobileStyles.primaryButton}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contacts List */}
      <div style={mobileStyles.contacts}>
        {filteredContacts.map(contact => (
          <div key={contact.id} style={mobileStyles.contactItem}>
            <div style={mobileStyles.contactInfo}>
              <div style={mobileStyles.contactName}>{contact.name}</div>
              <div style={mobileStyles.contactPhone}>{contact.phone}</div>
            </div>
            <button
              onClick={() => setContacts(prev => prev.filter(c => c.id !== contact.id))}
              style={mobileStyles.deleteButton}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="phone-book-demo mobile-demo">
          {/* Header */}
          <div className="mobile-header">
            <h1 className="mobile-title">📱 Contacts</h1>
            <button 
              className="mobile-floating-button"
              onClick={() => setMobileShowForm(true)}
            >
              +
            </button>
          </div>

          {/* Search */}
          <div className="mobile-search">
            <input
              placeholder="Search contacts..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="mobile-search-input"
            />
          </div>

          {/* Add Form Modal */}
          {mobileShowForm && (
            <div className="mobile-modal">
              <div className="mobile-modal-content">
                <h3>New Contact</h3>
                <input
                  placeholder="Name"
                  value={mobileForm.name}
                  onChange={(e) => setMobileForm(prev => ({ ...prev, name: e.target.value }))}
                  className="mobile-input"
                />
                <input
                  placeholder="Phone"
                  value={mobileForm.phone}
                  onChange={(e) => setMobileForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="mobile-input"
                />
                <div className="mobile-modal-actions">
                  <button onClick={() => setMobileShowForm(false)} className="mobile-secondary-button">
                    Cancel
                  </button>
                  <button onClick={() => {
                    if (mobileForm.name && mobileForm.phone) {
                      setMobileContacts(prev => [...prev, { id: Date.now(), ...mobileForm }]);
                      setMobileForm({ name: '', phone: '' });
                      setMobileShowForm(false);
                    }
                  }} className="mobile-primary-button">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contacts List */}
          <div className="mobile-contacts">
            {mobileContacts.filter(contact =>
              contact.name.toLowerCase().includes(mobileSearch.toLowerCase())
            ).map(contact => (
              <div key={contact.id} className="mobile-contact-item">
                <div className="mobile-contact-info">
                  <div className="mobile-contact-name">{contact.name}</div>
                  <div className="mobile-contact-phone">{contact.phone}</div>
                </div>
                <button
                  onClick={() => setMobileContacts(prev => prev.filter(c => c.id !== contact.id))}
                  className="mobile-delete-button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { feature: "Contact List", state: "contacts", function: "setContacts", pattern: "List Management" },
    { feature: "Search", state: "searchTerm", function: "setSearchTerm", pattern: "Filter Pattern" },
    { feature: "Add Form", state: "formData", function: "setFormData", pattern: "Form Pattern" },
    { feature: "Edit Mode", state: "editingId", function: "setEditingId", pattern: "State Toggle" },
    { feature: "Local Storage", state: "-", function: "useEffect", pattern: "Side Effects" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a basic phone book with add and delete functionality",
      solution: "Use Basic Phone Book example",
      tip: "Start with minimal state: contacts array, name, and phone inputs"
    },
    {
      question: "Build a professional contact manager with search and edit", 
      solution: "Use Professional Phone Book example",
      tip: "Add search functionality and edit mode with localStorage"
    },
    {
      question: "Create a mobile-optimized contact list",
      solution: "Use Mobile-First Phone Book example",
      tip: "Use modal for forms and optimize touch interactions"
    },
    {
      question: "Implement contact search across multiple fields",
      solution: "Filter contacts by name, phone, and email",
      tip: "Use computed values instead of separate state for filtered results"
    }
  ];

  // Phone Book Pattern Steps
  const phoneBookPatternSteps = [
    {
      step: "1",
      title: "Core State Setup",
      description: "Define contacts array, search term, and form data state"
    },
    {
      step: "2", 
      title: "CRUD Operations",
      description: "Implement add, delete, and update contact functions"
    },
    {
      step: "3",
      title: "Search & Filter",
      description: "Create computed filteredContacts based on search term"
    },
    {
      step: "4",
      title: "Form Handling",
      description: "Manage form state and validation for adding/editing"
    },
    {
      step: "5",
      title: "UI Components",
      description: "Build contact list, search bar, and form components"
    }
  ];

  // Pro Tips
  const proTips = [
    "State Structure - Group related form data in single object state",
    "Computed Values - Calculate filtered contacts outside state",
    "Immutable Updates - Always create new arrays/objects for state updates",
    "Validation - Check for empty fields before adding contacts",
    "Local Storage - Use useEffect to persist data automatically",
    "Search Optimization - Debounce search for better performance",
    "Accessibility - Add proper labels and keyboard navigation",
    "Mobile First - Design for mobile then enhance for desktop"
  ];

  // Enhancement Ideas
  const enhancementIdeas = [
    {
      title: "Local Storage",
      code: `// Save to localStorage\nuseEffect(() => {\n  localStorage.setItem('phonebook', JSON.stringify(contacts));\n}, [contacts]);\n\n// Load from localStorage  \nuseEffect(() => {\n  const saved = localStorage.getItem('phonebook');\n  if (saved) setContacts(JSON.parse(saved));\n}, []);`,
      description: "Persist contacts between browser sessions"
    },
    {
      title: "Email Validation",
      code: `const validateEmail = (email) => {\n  return email.includes('@') && email.includes('.');\n};`,
      description: "Add basic email format validation"
    },
    {
      title: "Contact Categories",
      code: `const [categories, setCategories] = useState(['Family', 'Friends', 'Work']);\nconst [selectedCategory, setSelectedCategory] = useState('All');`,
      description: "Organize contacts by categories"
    },
    {
      title: "Favorites System",
      code: `const toggleFavorite = (id) => {\n  setContacts(prev => prev.map(contact =>\n    contact.id === id \n      ? { ...contact, favorite: !contact.favorite }\n      : contact\n  ));\n};`,
      description: "Mark contacts as favorites for quick access"
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < phoneBookExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : phoneBookExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `📞 ${phoneBookExamples.length}+ Phone Books` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Phone Book Pattern' },
    { id: 'enhancements', label: '🚀 Enhancements' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="phone-book-mastery-container">
      <header className="mastery-header">
        <h1>🎯 Phone Book Pattern Mastery Kit</h1>
        <p>Master contact management apps - 3+ ready-to-use phone book implementations!</p>
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
              <h2>Universal Phone Book Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY contact management app - works for all phone book types!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="battle-plan">
                <h3>⚡ 25-Minute Build Plan:</h3>
                <div className="time-grid">
                  <div className="time-slot">
                    <h4>Minutes 1-5</h4>
                    <p>Basic state & form setup</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 6-10</h4>
                    <p>Add and display contacts</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 11-15</h4>
                    <p>Delete functionality</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 16-20</h4>
                    <p>Search and filter</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 21-25</h4>
                    <p>Styling and polish</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Phone Book {currentExample + 1}: {phoneBookExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {phoneBookExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{phoneBookExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {phoneBookExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{phoneBookExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Phone Book Patterns</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Feature</div>
                  <div>State Variable</div>
                  <div>Function</div>
                  <div>Pattern</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.feature}</strong></div>
                    <div>{item.state}</div>
                    <div>{item.function}</div>
                    <div>{item.pattern}</div>
                  </div>
                ))}
              </div>

              <div className="state-comparison">
                <h3>🎯 State Structure Best Practices:</h3>
                <div className="comparison-grid">
                  <div className="good-practice">
                    <h4>✅ GOOD:</h4>
                    <pre><code>{`const [form, setForm] = useState({ 
  name: '', 
  phone: '', 
  email: '' 
});`}</code></pre>
                    <p>Group related form data</p>
                  </div>
                  <div className="bad-practice">
                    <h4>❌ AVOID:</h4>
                    <pre><code>{`const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');`}</code></pre>
                    <p>Separate states for each field</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Phone Book Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Phone Book Pattern</h2>
              
              <div className="steps-list">
                {phoneBookPatternSteps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pattern-visual">
                <h3>🎯 Phone Book Data Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">Form Input</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Add Contact</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Contacts State</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Filter & Display</div>
                </div>
              </div>
            </section>
          )}

          {/* Enhancements */}
          {activeTab === 'enhancements' && (
            <section className="enhancements-section">
              <h2>🚀 Phone Book Enhancement Ideas</h2>
              
              <div className="enhancements-grid">
                {enhancementIdeas.map((enhancement, index) => (
                  <div key={index} className="enhancement-card">
                    <h4>{enhancement.title}</h4>
                    <pre><code>{enhancement.code}</code></pre>
                    <p>{enhancement.description}</p>
                  </div>
                ))}
              </div>

              <div className="immutable-pattern">
                <h3>🎯 Immutable Update Patterns:</h3>
                <div className="pattern-examples">
                  <div className="pattern-example">
                    <h4>✅ Adding Contact:</h4>
                    <pre><code>{`setContacts(prev => [...prev, newContact]);`}</code></pre>
                  </div>
                  <div className="pattern-example">
                    <h4>✅ Updating Contact:</h4>
                    <pre><code>{`setContacts(prev => prev.map(contact =>\n  contact.id === id \n    ? { ...contact, ...updatedData }\n    : contact\n));`}</code></pre>
                  </div>
                  <div className="pattern-example">
                    <h4>✅ Deleting Contact:</h4>
                    <pre><code>{`setContacts(prev => prev.filter(contact => contact.id !== id));`}</code></pre>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Phone Book Mock Interviews</h2>
              
              <div className="interviews-list">
                {mockInterviews.map((interview, index) => (
                  <div key={index} className="interview-item">
                    <div className="interview-question">
                      <h3>🎯 Question {index + 1}:</h3>
                      <p>"{interview.question}"</p>
                    </div>
                    <div className="interview-solution">
                      <h4>✅ Solution:</h4>
                      <p>{interview.solution}</p>
                    </div>
                    <div className="interview-tip">
                      <h4>💡 Tip:</h4>
                      <p>{interview.tip}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="interview-strategy">
                <h3>🎯 Phone Book Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Start Simple</h4>
                    <p>Basic add/delete functionality first</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Add Search</h4>
                    <p>Implement filtering based on search term</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Enhance Features</h4>
                    <p>Edit mode, localStorage, validation</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Polish UX</h4>
                    <p>Empty states, loading, error handling</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Phone Book Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Phone Book Problem!</h3>
                <p>You now have 3+ phone book patterns using one universal structure! 🚀</p>
                <p>For ANY contact management requirement: State → CRUD → Search → Form → Enhance</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneBookMastery;