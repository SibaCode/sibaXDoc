// src/components/SearchMastery.js
import React, { useState } from 'react';
import './SearchMastery.css';

const SearchMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all search examples
  const [simpleSearch, setSimpleSearch] = useState('');
  const [contactSearch, setContactSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [bookSearch, setBookSearch] = useState('');
  const [movieSearch, setMovieSearch] = useState('');
  const [recipeSearch, setRecipeSearch] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [jobSearch, setJobSearch] = useState('');
  const [musicSearch, setMusicSearch] = useState('');
  const [characterSearch, setCharacterSearch] = useState('');

  // Data for all examples
  const simpleItems = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python'];
  
  const contacts = [
    { id: 1, name: 'John Doe', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', phone: '555-5678' },
    { id: 3, name: 'Bob Johnson', phone: '555-9012' },
    { id: 4, name: 'Alice Brown', phone: '555-3456' }
  ];
  
  const products = [
    { id: 1, name: 'iPhone', category: 'Electronics', price: 999 },
    { id: 2, name: 'MacBook', category: 'Electronics', price: 1299 },
    { id: 3, name: 'T-Shirt', category: 'Clothing', price: 25 },
    { id: 4, name: 'Coffee Mug', category: 'Home', price: 15 }
  ];
  
  const books = [
    { id: 1, title: 'React Guide', author: 'John Smith', year: 2023 },
    { id: 2, title: 'JavaScript Basics', author: 'Jane Doe', year: 2022 },
    { id: 3, title: 'CSS Mastery', author: 'Bob Johnson', year: 2021 },
    { id: 4, title: 'Node.js Advanced', author: 'Alice Brown', year: 2023 }
  ];
  
  const movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010 },
    { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008 },
    { id: 3, title: 'Pulp Fiction', genre: 'Crime', year: 1994 },
    { id: 4, title: 'The Matrix', genre: 'Sci-Fi', year: 1999 }
  ];
  
  const recipes = [
    { id: 1, name: 'Pasta Carbonara', ingredients: ['pasta', 'eggs', 'bacon'], time: 30 },
    { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry', 'rice'], time: 45 },
    { id: 3, name: 'Vegetable Stir Fry', ingredients: ['vegetables', 'soy sauce'], time: 20 },
    { id: 4, name: 'Chocolate Cake', ingredients: ['flour', 'chocolate', 'eggs'], time: 60 }
  ];
  
  const countries = [
    { id: 1, name: 'United States', capital: 'Washington D.C.', continent: 'North America' },
    { id: 2, name: 'France', capital: 'Paris', continent: 'Europe' },
    { id: 3, name: 'Japan', capital: 'Tokyo', continent: 'Asia' },
    { id: 4, name: 'Brazil', capital: 'Brasília', continent: 'South America' }
  ];
  
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
    { id: 2, title: 'Backend Engineer', company: 'Data Systems', location: 'New York' },
    { id: 3, title: 'UX Designer', company: 'Creative Labs', location: 'San Francisco' },
    { id: 4, title: 'Data Scientist', company: 'Analytics Inc', location: 'Remote' }
  ];
  
  const songs = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Pop' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop' },
    { id: 4, title: 'Sweet Child O Mine', artist: 'Guns N Roses', genre: 'Rock' }
  ];
  
  const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Universal Search Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function SearchSkeleton() {
  // 🎯 STEP 1: DATA AND SEARCH STATE
  const [items] = useState(['Apple', 'Banana', 'Orange', 'Grape', 'Mango']);
  const [search, setSearch] = useState('');
  
  // 🎯 STEP 2: FILTER LOGIC
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🎯 STEP 3: SEARCH INPUT */}
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search items..."
      />
      
      {/* 🎯 STEP 4: RESULTS INFO */}
      <p>Found {filteredItems.length} items</p>
      
      {/* 🎯 STEP 5: DISPLAY FILTERED RESULTS */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* 🎯 STEP 6: EMPTY STATE */}
      {filteredItems.length === 0 && search && (
        <p>No items found matching "{search}"</p>
      )}
    </div>
  );
}`;

  // Search Examples
  const searchExamples = [
    {
      title: "Simple Item Search",
      description: "Basic search through an array of strings",
      code: `function SimpleSearch() {
  const [items] = useState(['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python']);
  const [search, setSearch] = useState('');
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>🔍 Search Technologies</h2>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies..."
      />
      
      <p>Showing {filteredItems.length} of {items.length} technologies</p>
      
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>💻 {item}</li>
        ))}
      </ul>
      
      {filteredItems.length === 0 && search && (
        <p>No technologies found matching "{search}"</p>
      )}
    </div>
  );
}`,
     liveDemo: (
  <div className="search-demo">
    <h2>🛍️ Search Products</h2>
    <input 
      value={productSearch}
      onChange={(e) => setProductSearch(e.target.value)}
      placeholder="Search products or categories..."
      className="search-input"
    />
    
    {(() => {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(productSearch.toLowerCase())
      );
      
      return (
        <>
          <p className="search-stats">
            {filteredProducts.length} products found
          </p>
          
          <div className="search-results-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <h4>📦 {product.name}</h4>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </>
      );
    })()}
  </div>
)
    },
    {
      title: "Contact Search",
      description: "Search contacts by name or phone number",
      code: `function ContactSearch() {
  const [contacts] = useState([
    { id: 1, name: 'John Doe', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', phone: '555-5678' },
    { id: 3, name: 'Bob Johnson', phone: '555-9012' },
    { id: 4, name: 'Alice Brown', phone: '555-3456' }
  ]);
  const [search, setSearch] = useState('');
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone.includes(search)
  );

  return (
    <div>
      <h2>📞 Search Contacts</h2>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or phone..."
      />
      
      <p>Found {filteredContacts.length} contacts</p>
      
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            👤 <strong>{contact.name}</strong> - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="search-demo">
          <h2>📞 Search Contacts</h2>
          <input 
            value={contactSearch}
            onChange={(e) => setContactSearch(e.target.value)}
            placeholder="Search by name or phone..."
            className="search-input"
          />
          
          <p className="search-stats">
            Found {contacts.filter(contact =>
              contact.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
              contact.phone.includes(contactSearch)
            ).length} contacts
          </p>
          
          <ul className="search-results">
            {contacts.filter(contact =>
              contact.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
              contact.phone.includes(contactSearch)
            ).map(contact => (
              <li key={contact.id}>
                👤 <strong>{contact.name}</strong> - {contact.phone}
              </li>
            ))}
          </ul>
        </div>
      )
    },
  
    {
      title: "Book Search",
      description: "Search books by title or author",
      code: `function BookSearch() {
  const [books] = useState([
    { id: 1, title: 'React Guide', author: 'John Smith', year: 2023 },
    { id: 2, title: 'JavaScript Basics', author: 'Jane Doe', year: 2022 },
    { id: 3, title: 'CSS Mastery', author: 'Bob Johnson', year: 2021 },
    { id: 4, title: 'Node.js Advanced', author: 'Alice Brown', year: 2023 }
  ]);
  const [search, setSearch] = useState('');
  
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>📚 Search Books</h2>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or author..."
      />
      
      <p>Found {filteredBooks.length} books</p>
      
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            📖 <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="search-demo">
          <h2>📚 Search Books</h2>
          <input 
            value={bookSearch}
            onChange={(e) => setBookSearch(e.target.value)}
            placeholder="Search by title or author..."
            className="search-input"
          />
          
          <p className="search-stats">
            Found {books.filter(book =>
              book.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
              book.author.toLowerCase().includes(bookSearch.toLowerCase())
            ).length} books
          </p>
          
          <ul className="search-results">
            {books.filter(book =>
              book.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
              book.author.toLowerCase().includes(bookSearch.toLowerCase())
            ).map(book => (
              <li key={book.id}>
                📖 <strong>{book.title}</strong> by {book.author} ({book.year})
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { type: "Simple Array", fields: "Single field", filter: "item.includes(search)", example: "Technology list" },
    { type: "Multi-field Objects", fields: "Multiple fields", filter: "item.field1 || item.field2", example: "Contacts, Products" },
    { type: "Array in Objects", fields: "Array fields", filter: "item.tags.some(tag => tag.includes(search))", example: "Recipes" },
    { type: "Real-time", fields: "Single character", filter: "char.includes(search)", example: "Letter search" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a searchable contact list",
      solution: "Use Contact Search example",
      tip: "Search both name and phone fields using || operator"
    },
    {
      question: "Build a product search feature", 
      solution: "Use Product Search example",
      tip: "Include category search and display results in cards"
    },
    {
      question: "Make a book search component",
      solution: "Use Book Search example",
      tip: "Search by title and author with proper formatting"
    },
    {
      question: "Create a movie search interface",
      solution: "Use Movie Search example",
      tip: "Include genre search and movie details display"
    }
  ];

  // Search Pattern Steps
  const searchPatternSteps = [
    {
      step: "1",
      title: "Data and Search State",
      description: "Define your data array and search state: const [search, setSearch] = useState('');"
    },
    {
      step: "2",
      title: "Filter Logic",
      description: "Filter data based on search: const filtered = data.filter(item => item.includes(search));"
    },
    {
      step: "3", 
      title: "Search Input",
      description: "Add input that updates search state"
    },
    {
      step: "4",
      title: "Display Results",
      description: "Show filtered results instead of original data"
    },
    {
      step: "5",
      title: "Results Info",
      description: "Show count of filtered vs total items"
    },
    {
      step: "6",
      title: "Empty State",
      description: "Handle case when no results are found"
    }
  ];

  // Pro Tips
  const proTips = [
    "Always use .toLowerCase() for case-insensitive search",
    "Filter the data, don't modify original array",
    "Show result counts for better UX",
    "Handle empty states when no results found",
    "Use includes() for simple substring matching",
    "For multi-field search, use || (OR) operator",
    "Consider debouncing for large datasets",
    "Add loading states for async searches"
  ];

  // Cheat Sheet
  const cheatSheet = [
    {
      type: "Basic Search",
      code: `const filtered = items.filter(item =>
  item.toLowerCase().includes(search.toLowerCase())
);`
    },
    {
      type: "Multi-field Search",
      code: `const filtered = items.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.description.toLowerCase().includes(search.toLowerCase())
);`
    },
    {
      type: "Array Field Search",
      code: `const filtered = items.filter(item =>
  item.tags.some(tag => tag.includes(search))
);`
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < searchExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : searchExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🔍 ${searchExamples.length}+ Examples` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Search Pattern' },
    { id: 'cheatsheet', label: '📋 Cheat Sheet' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="search-mastery-container">
      <header className="mastery-header">
        <h1>🚀 Search Pattern Mastery Kit</h1>
        <p>Master search functionality with this universal pattern - 10+ ready-to-use examples!</p>
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
              <h2>Universal Search Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY search functionality - works for all 10+ examples!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="try-it">
                <h3>👉 Try It Yourself!</h3>
                <p>Copy and run this basic search. Type in the search box and watch the list filter in real-time!</p>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {searchExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {searchExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{searchExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {searchExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{searchExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Search Types</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Search Type</div>
                  <div>Fields</div>
                  <div>Filter Pattern</div>
                  <div>Example</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.type}</strong></div>
                    <div>{item.fields}</div>
                    <div><code>{item.filter}</code></div>
                    <div>{item.example}</div>
                  </div>
                ))}
              </div>

              <div className="pattern-summary">
                <h3>🎯 Universal Search Pattern Works For:</h3>
                <div className="pattern-grid">
                  <div className="pattern-item">✅ Simple Arrays</div>
                  <div className="pattern-item">✅ Object Lists</div>
                  <div className="pattern-item">✅ Multi-field Data</div>
                  <div className="pattern-item">✅ Nested Arrays</div>
                  <div className="pattern-item">✅ Real-time Search</div>
                  <div className="pattern-item">✅ And many more!</div>
                </div>
              </div>
            </section>
          )}

          {/* Search Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Search Pattern</h2>
              
              <div className="steps-list">
                {searchPatternSteps.map((step, index) => (
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
                <h3>🎯 Search Data Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">Data Array</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Search Input</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Filter Logic</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Display Results</div>
                </div>
              </div>
            </section>
          )}

          {/* Cheat Sheet */}
          {activeTab === 'cheatsheet' && (
            <section className="cheatsheet-section">
              <h2>📋 Search Pattern Cheat Sheet</h2>
              
              <div className="cheatsheet-grid">
                {cheatSheet.map((item, index) => (
                  <div key={index} className="cheatsheet-item">
                    <h4>{item.type}</h4>
                    <pre><code>{item.code}</code></pre>
                  </div>
                ))}
              </div>

              <div className="usage-examples">
                <h3>🎯 When to Use Each Pattern:</h3>
                <div className="usage-grid">
                  <div className="usage-item">
                    <h5>Basic Search</h5>
                    <p>Simple arrays of strings</p>
                    <code>['apple', 'banana']</code>
                  </div>
                  <div className="usage-item">
                    <h5>Multi-field</h5>
                    <p>Objects with multiple searchable fields</p>
                    <code>{`{name: '...', desc: '...'}`}</code>
                  </div>
                  <div className="usage-item">
                    <h5>Array Fields</h5>
                    <p>Objects with array properties</p>
                    <code>{`{tags: ['tag1', 'tag2']}`}</code>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Search Pattern Mock Interviews</h2>
              
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
                <h3>🎯 Search Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Identify Data Type</h4>
                    <p>Is it simple array, objects, or complex data?</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Choose Search Pattern</h4>
                    <p>Use the appropriate filter pattern</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Implement Universal Skeleton</h4>
                    <p>Follow the 6-step pattern</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Add UX Enhancements</h4>
                    <p>Counts, empty states, loading indicators</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Search Pattern Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Search Problem!</h3>
                <p>You now have 10+ search examples using one universal pattern! 🚀</p>
                <p>For ANY search requirement: Identify data → Choose pattern → Implement → Enhance UX</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchMastery;