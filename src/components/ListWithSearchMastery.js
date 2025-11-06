// src/components/ListWithSearchMastery.js
import React, { useState } from 'react';
import './ListWithSearchMastery.css';

const ListWithSearchMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all examples
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [todoSearch, setTodoSearch] = useState('');

  const [contacts, setContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactSearch, setContactSearch] = useState('');

  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');
  const [movieSearch, setMovieSearch] = useState('');

  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [productSearch, setProductSearch] = useState('');

  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState('');
  const [recipeSearch, setRecipeSearch] = useState('');

  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  const [bookSearch, setBookSearch] = useState('');

  const [songs, setSongs] = useState([]);
  const [songInput, setSongInput] = useState('');
  const [songSearch, setSongSearch] = useState('');

  const [projects, setProjects] = useState([]);
  const [projectInput, setProjectInput] = useState('');
  const [projectSearch, setProjectSearch] = useState('');

  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [noteSearch, setNoteSearch] = useState('');

  const [groceries, setGroceries] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');
  const [grocerySearch, setGrocerySearch] = useState('');

  // Universal List + Search Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function ListWithSearch() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  
  // 🎯 FILTER LOGIC (Always the same pattern)
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };
  
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* 🎯 SEARCH SECTION */}
      <div>
        <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search items..."
        />
        <p>Showing {filteredItems.length} of {items.length} items</p>
      </div>
      
      {/* 🎯 ADD SECTION */}
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
      
      {/* 🎯 LIST SECTION (Use filteredItems!) */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
      {/* 🎯 EMPTY STATES */}
      {items.length === 0 && <p>No items yet. Add some above!</p>}
      {items.length > 0 && filteredItems.length === 0 && (
        <p>No items found matching "{search}"</p>
      )}
    </div>
  );
}`;

  // All List + Search Examples
  const listSearchExamples = [
    {
      title: "Todo List with Search",
      description: "Searchable todo list with filtering and empty states",
      code: `function TodoListWithSearch() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [search, setSearch] = useState('');
  
  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(search.toLowerCase())
  );
  
  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };
  
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>✅ Todo List with Search</h2>
      
      {/* SEARCH */}
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos..."
      />
      <p>Found {filteredTodos.length} todos</p>
      
      {/* ADD TODO */}
      <input 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      
      {/* TODO LIST */}
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            📝 {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
      
      {/* EMPTY STATES */}
      {todos.length === 0 && <p>No todos yet. Add some above!</p>}
      {todos.length > 0 && filteredTodos.length === 0 && (
        <p>No todos found matching "{search}"</p>
      )}
    </div>
  );
}`,
      liveDemo: (
        <div className="list-search-demo">
          <h2>✅ Todo List with Search</h2>
          
          {/* SEARCH */}
          <div className="search-section">
            <input 
              value={todoSearch}
              onChange={(e) => setTodoSearch(e.target.value)}
              placeholder="Search todos..."
              className="search-input"
            />
            <p className="search-stats">Found {todos.filter(todo => 
              todo.toLowerCase().includes(todoSearch.toLowerCase())
            ).length} todos</p>
          </div>
          
          {/* ADD TODO */}
          <div className="add-section">
            <input 
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="Add a todo"
              className="demo-input"
            />
            <button onClick={() => {
              if (todoInput.trim()) {
                setTodos([...todos, todoInput]);
                setTodoInput('');
              }
            }} className="demo-btn">
              Add Todo
            </button>
          </div>
          
          {/* TODO LIST */}
          <ul className="demo-list">
            {todos.filter(todo => 
              todo.toLowerCase().includes(todoSearch.toLowerCase())
            ).map((todo, index) => (
              <li key={index} className="list-item">
                <span>📝 {todo}</span>
                <button 
                  onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          
          {/* EMPTY STATES */}
          {todos.length === 0 && <p className="empty-state">No todos yet. Add some above!</p>}
          {todos.length > 0 && todos.filter(todo => 
            todo.toLowerCase().includes(todoSearch.toLowerCase())
          ).length === 0 && (
            <p className="empty-state">No todos found matching "{todoSearch}"</p>
          )}
        </div>
      )
    },
    {
      title: "Contact List with Search",
      description: "Search contacts by name or phone number",
      code: `function ContactListWithSearch() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone.includes(search)
  );
  
  const addContact = () => {
    if (name.trim() && phone.trim()) {
      setContacts([...contacts, { id: Date.now(), name, phone }]);
      setName('');
      setPhone('');
    }
  };
  
  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h2>📞 Contact List with Search</h2>
      
      {/* SEARCH */}
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or phone..."
      />
      <p>Found {filteredContacts.length} contacts</p>
      
      {/* ADD CONTACT */}
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button onClick={addContact}>Add Contact</button>
      
      {/* CONTACTS LIST */}
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            👤 <strong>{contact.name}</strong> - {contact.phone}
            <button onClick={() => removeContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-search-demo">
          <h2>📞 Contact List with Search</h2>
          
          {/* SEARCH */}
          <div className="search-section">
            <input 
              value={contactSearch}
              onChange={(e) => setContactSearch(e.target.value)}
              placeholder="Search by name or phone..."
              className="search-input"
            />
            <p className="search-stats">Found {contacts.filter(contact =>
              contact.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
              contact.phone.includes(contactSearch)
            ).length} contacts</p>
          </div>
          
          {/* ADD CONTACT */}
          <div className="add-section">
            <input 
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Name"
              className="demo-input"
            />
            <input 
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Phone"
              className="demo-input"
            />
            <button onClick={() => {
              if (contactName.trim() && contactPhone.trim()) {
                setContacts([...contacts, { 
                  id: Date.now(), 
                  name: contactName, 
                  phone: contactPhone 
                }]);
                setContactName('');
                setContactPhone('');
              }
            }} className="demo-btn">
              Add Contact
            </button>
          </div>
          
          {/* CONTACTS LIST */}
          <ul className="demo-list">
            {contacts.filter(contact =>
              contact.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
              contact.phone.includes(contactSearch)
            ).map(contact => (
              <li key={contact.id} className="list-item">
                <span>👤 <strong>{contact.name}</strong> - {contact.phone}</span>
                <button 
                  onClick={() => setContacts(contacts.filter(c => c.id !== contact.id))}
                  className="remove-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Movie Collection with Search",
      description: "Searchable movie collection with filtering",
      code: `function MovieCollectionWithSearch() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');
  const [search, setSearch] = useState('');
  
  const filteredMovies = movies.filter(movie =>
    movie.toLowerCase().includes(search.toLowerCase())
  );
  
  const addMovie = () => {
    if (movieInput.trim()) {
      setMovies([...movies, movieInput]);
      setMovieInput('');
    }
  };
  
  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>🎬 Movie Collection with Search</h2>
      
      {/* SEARCH */}
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
      />
      <p>Showing {filteredMovies.length} movies</p>
      
      {/* ADD MOVIE */}
      <input 
        value={movieInput}
        onChange={(e) => setMovieInput(e.target.value)}
        placeholder="Add movie title"
      />
      <button onClick={addMovie}>Add Movie</button>
      
      {/* MOVIES LIST */}
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            🎥 {movie}
            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-search-demo">
          <h2>🎬 Movie Collection with Search</h2>
          
          {/* SEARCH */}
          <div className="search-section">
            <input 
              value={movieSearch}
              onChange={(e) => setMovieSearch(e.target.value)}
              placeholder="Search movies..."
              className="search-input"
            />
            <p className="search-stats">Showing {movies.filter(movie =>
              movie.toLowerCase().includes(movieSearch.toLowerCase())
            ).length} movies</p>
          </div>
          
          {/* ADD MOVIE */}
          <div className="add-section">
            <input 
              value={movieInput}
              onChange={(e) => setMovieInput(e.target.value)}
              placeholder="Add movie title"
              className="demo-input"
            />
            <button onClick={() => {
              if (movieInput.trim()) {
                setMovies([...movies, movieInput]);
                setMovieInput('');
              }
            }} className="demo-btn">
              Add Movie
            </button>
          </div>
          
          {/* MOVIES LIST */}
          <ul className="demo-list">
            {movies.filter(movie =>
              movie.toLowerCase().includes(movieSearch.toLowerCase())
            ).map((movie, index) => (
              <li key={index} className="list-item">
                <span>🎥 {movie}</span>
                <button 
                  onClick={() => setMovies(movies.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { problem: "Todo List with Search", stateNames: "todos/todoInput/search", searchPlaceholder: "Search todos..." },
    { problem: "Contact List with Search", stateNames: "contacts/name/phone/search", searchPlaceholder: "Search by name or phone..." },
    { problem: "Movie Collection with Search", stateNames: "movies/movieInput/search", searchPlaceholder: "Search movies..." },
    { problem: "Product Inventory with Search", stateNames: "products/productInput/search", searchPlaceholder: "Search products..." },
    { problem: "Recipe Book with Search", stateNames: "recipes/recipeInput/search", searchPlaceholder: "Search recipes..." },
    { problem: "Book Library with Search", stateNames: "books/bookInput/search", searchPlaceholder: "Search books..." },
    { problem: "Music Playlist with Search", stateNames: "songs/songInput/search", searchPlaceholder: "Search songs..." },
    { problem: "Project Ideas with Search", stateNames: "projects/projectInput/search", searchPlaceholder: "Search projects..." },
    { problem: "Notes App with Search", stateNames: "notes/noteInput/search", searchPlaceholder: "Search notes..." },
    { problem: "Shopping List with Search", stateNames: "groceries/groceryInput/search", searchPlaceholder: "Search groceries..." }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a contact list with search functionality",
      solution: "Use Contact List with Search example",
      tip: "Search both name and phone fields using || operator"
    },
    {
      question: "Build a todo app that can search todos",
      solution: "Use Todo List with Search example", 
      tip: "Add empty states for better user experience"
    },
    {
      question: "Make a product inventory with search",
      solution: "Use Product Inventory with Search example",
      tip: "Show count of filtered vs total items"
    },
    {
      question: "Create a movie database with search",
      solution: "Use Movie Collection with Search example",
      tip: "Case-insensitive search using toLowerCase()"
    }
  ];

  // Search Pattern Steps
  const searchPatternSteps = [
    {
      step: "1",
      title: "Add Search State",
      description: "Add search state variable: const [search, setSearch] = useState('');"
    },
    {
      step: "2",
      title: "Create Filter Logic",
      description: "Filter items: const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));"
    },
    {
      step: "3", 
      title: "Add Search Input",
      description: "Add search input field that updates search state"
    },
    {
      step: "4",
      title: "Use Filtered Items",
      description: "Display filteredItems instead of original items in your list"
    },
    {
      step: "5",
      title: "Add Empty States",
      description: "Show helpful messages when no items or no search results"
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < listSearchExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : listSearchExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🔍 ${listSearchExamples.length}+ Examples` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Search Pattern' },
    { id: 'interviews', label: '💼 Mock Interviews' }
  ];

  return (
    <div className="list-search-mastery-container">
      <header className="mastery-header">
        <h1>🚀 List + Search Pattern Mastery Kit</h1>
        <p>Master search functionality for any list with this universal pattern!</p>
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
              <h2>Universal List + Search Skeleton</h2>
              <p className="section-description">
                Copy this skeleton to add search to ANY list
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="transformation-guide">
                <h3>🎯 The 5-Step Search Pattern:</h3>
                <ol>
                  <li><strong>Add search state</strong> - const [search, setSearch] = useState('')</li>
                  <li><strong>Add search input</strong> - Input that updates search state</li>
                  <li><strong>Use filtered items</strong> - Display filteredItems instead of original</li>
                  <li><strong>Add empty states</strong> - Show helpful messages for empty results</li>
                </ol>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {listSearchExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {listSearchExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{listSearchExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {listSearchExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{listSearchExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - 10+ Searchable Lists</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Problem</div>
                  <div>State Names</div>
                  <div>Search Placeholder</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.problem}</strong></div>
                    <div><code>{item.stateNames}</code></div>
                    <div>"{item.searchPlaceholder}"</div>
                  </div>
                ))}
              </div>

              <div className="pro-tips">
                <h3>💡 PRO TIP:</h3>
                <p>To add search to any list:</p>
                <ol>
                  <li>Add search state</li>
                  <li>Add filteredItems logic</li>
                  <li>Add search input</li>
                  <li>Use filteredItems in display instead of original items</li>
                  <li>Add empty state messages</li>
                </ol>
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

              <div className="code-example">
                <h3>🎯 Core Search Logic (Always the same):</h3>
                <div className="code-block">
                  <pre><code>{`// 🎯 STEP 1: Search state
const [search, setSearch] = useState('');

// 🎯 STEP 2: Filter logic  
const filteredItems = items.filter(item =>
  item.toLowerCase().includes(search.toLowerCase())
);

// 🎯 STEP 3: Search input
<input 
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search..."
/>

// 🎯 STEP 4: Use filtered items
{filteredItems.map(item => (
  // Render your items
))}

// 🎯 STEP 5: Empty states
{items.length === 0 && <p>No items yet</p>}
{items.length > 0 && filteredItems.length === 0 && (
  <p>No items found matching "{search}"</p>
)}`}</code></pre>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 List + Search Mock Interviews</h2>
              
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

              <div className="interview-prep">
                <h3>🎯 Interview Strategy:</h3>
                <div className="strategy-grid">
                  <div className="strategy-item">
                    <h4>1. Identify Pattern</h4>
                    <p>"This is a list + search problem"</p>
                  </div>
                  <div className="strategy-item">
                    <h4>2. Use Skeleton</h4>
                    <p>Copy the universal search skeleton</p>
                  </div>
                  <div className="strategy-item">
                    <h4>3. Customize</h4>
                    <p>Change variable names for the context</p>
                  </div>
                  <div className="strategy-item">
                    <h4>4. Add Features</h4>
                    <p>Multiple fields, empty states, counts</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListWithSearchMastery;