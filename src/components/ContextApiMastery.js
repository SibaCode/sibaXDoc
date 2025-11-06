// src/components/ContextApiMastery.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import './ContextApiMastery.css';

const ContextApiMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Demo Contexts for Live Examples
  const ThemeDemoContext = createContext();
  const UserDemoContext = createContext();
  const CartDemoContext = createContext();
  const NotificationDemoContext = createContext();

  // Theme Provider for Demo
  function ThemeDemoProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    const value = {
      theme,
      toggleTheme,
      isDark: theme === 'dark'
    };

    return (
      <ThemeDemoContext.Provider value={value}>
        {children}
      </ThemeDemoContext.Provider>
    );
  }

  // User Provider for Demo
  function UserDemoProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const login = (userData) => {
      setLoading(true);
      setTimeout(() => {
        setUser(userData);
        setLoading(false);
      }, 1000);
    };
    
    const logout = () => {
      setUser(null);
    };
    
    const value = {
      user,
      loading,
      isAuthenticated: !!user,
      actions: { login, logout }
    };

    return (
      <UserDemoContext.Provider value={value}>
        {children}
      </UserDemoContext.Provider>
    );
  }

  // Cart Provider for Demo
  function CartDemoProvider({ children }) {
    const [items, setItems] = useState([]);
    
    const addToCart = (product) => {
      setItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };
    
    const removeFromCart = (productId) => {
      setItems(prev => prev.filter(item => item.id !== productId));
    };
    
    const clearCart = () => {
      setItems([]);
    };
    
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const value = {
      items,
      totalItems,
      totalPrice,
      actions: { addToCart, removeFromCart, clearCart }
    };

    return (
      <CartDemoContext.Provider value={value}>
        {children}
      </CartDemoContext.Provider>
    );
  }

  // Notification Provider for Demo
  function NotificationDemoProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    
    const addNotification = (message, type = 'info') => {
      const id = Date.now();
      const notification = { id, message, type };
      
      setNotifications(prev => [...prev, notification]);
      
      setTimeout(() => {
        removeNotification(id);
      }, 5000);
    };
    
    const removeNotification = (id) => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    };
    
    const value = {
      notifications,
      actions: { addNotification, removeNotification }
    };

    return (
      <NotificationDemoContext.Provider value={value}>
        {children}
      </NotificationDemoContext.Provider>
    );
  }

  // Demo Components
  function ThemeDemoComponent() {
    const { theme, toggleTheme, isDark } = useContext(ThemeDemoContext);
    
    return (
      <div className={`theme-demo ${theme}`}>
        <h3>Current Theme: {theme}</h3>
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
        <div className="theme-preview">
          <p>This is how your app looks in {theme} mode</p>
        </div>
      </div>
    );
  }

  function UserDemoComponent() {
    const { user, loading, isAuthenticated, actions } = useContext(UserDemoContext);
    
    if (loading) {
      return <div className="loading">Loading user...</div>;
    }
    
    if (!isAuthenticated) {
      return (
        <div className="auth-demo">
          <button 
            onClick={() => actions.login({ name: 'Alex Johnson', email: 'alex@example.com' })}
            className="login-btn"
          >
            Login as Demo User
          </button>
        </div>
      );
    }
    
    return (
      <div className="user-demo">
        <h3>Welcome back! 👋</h3>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button onClick={actions.logout} className="logout-btn">
          Logout
        </button>
      </div>
    );
  }

  function CartDemoComponent() {
    const { items, totalItems, totalPrice, actions } = useContext(CartDemoContext);
    const demoProducts = [
      { id: 1, name: 'React Book', price: 29.99 },
      { id: 2, name: 'JavaScript Course', price: 49.99 },
      { id: 3, name: 'CSS Guide', price: 19.99 }
    ];

    return (
      <div className="cart-demo">
        <div className="products-section">
          <h4>Available Products:</h4>
          {demoProducts.map(product => (
            <div key={product.id} className="product-card">
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => actions.addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-section">
          <h4>Shopping Cart ({totalItems} items)</h4>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <span>{item.name} x {item.quantity}</span>
                  <button onClick={() => actions.removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
              <div className="cart-total">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
              <button onClick={actions.clearCart} className="clear-cart">
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  function NotificationDemoComponent() {
    const { actions } = useContext(NotificationDemoContext);
    
    return (
      <div className="notification-demo">
        <h4>Test Notifications:</h4>
        <div className="notification-buttons">
          <button onClick={() => actions.addNotification('Operation completed successfully!', 'success')}>
            Success Message
          </button>
          <button onClick={() => actions.addNotification('Something went wrong!', 'error')}>
            Error Message
          </button>
          <button onClick={() => actions.addNotification('Please check your input', 'warning')}>
            Warning Message
          </button>
        </div>
      </div>
    );
  }

  function NotificationDisplay() {
    const { notifications, actions } = useContext(NotificationDemoContext);
    
    return (
      <div className="notification-container">
        {notifications.map(notif => (
          <div 
            key={notif.id}
            className={`notification ${notif.type}`}
          >
            <span>{notif.message}</span>
            <button onClick={() => actions.removeNotification(notif.id)}>
              ×
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Universal Context Skeleton
  const universalSkeleton = `import React, { createContext, useContext, useState, useEffect } from 'react';

// 🎯 STEP 1: CREATE CONTEXT (The Bulletin Board)
const MyContext = createContext();

// 🎯 STEP 2: CREATE PROVIDER (The Bulletin Board Owner)
function MyProvider({ children }) {
  // 🎯 STATE - Your data
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  
  // 🎯 EFFECTS - API calls, side effects
  useEffect(() => {
    fetchData();
  }, []);
  
  // 🎯 FUNCTIONS - Actions that update state
  const fetchData = async () => {
    setLoading(true);
    // Your API logic here
    setLoading(false);
  };
  
  const updateData = (newData) => {
    setData(newData);
  };
  
  // 🎯 VALUE - Everything you want to share
  const value = {
    data,
    loading,
    actions: {
      updateData,
      fetchData
    }
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

// 🎯 STEP 3: CUSTOM HOOK (Optional but recommended)
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}

// 🎯 STEP 4: WRAP YOUR APP
function App() {
  return (
    <MyProvider>
      <YourComponents />
    </MyProvider>
  );
}`;

  // Context Examples
  const contextExamples = [
    {
      title: "Theme Context",
      description: "Light/Dark mode toggle with global theme state",
      code: `// 🎨 THEME CONTEXT
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// 🎨 USAGE
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={\`theme-button \${theme}\`}
    >
      Switch to {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}

// 🎨 APP WRAPPER
function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}`,
      liveDemo: (
        <ThemeDemoProvider>
          <div className="context-demo">
            <h3>🎨 Theme Context Demo</h3>
            <ThemeDemoComponent />
          </div>
        </ThemeDemoProvider>
      )
    },
    {
      title: "User Context",
      description: "Authentication state management with user data",
      code: `// 👤 USER CONTEXT
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    actions: { login, logout }
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

// 👤 USAGE
function UserProfile() {
  const { user, isAuthenticated, actions } = useUser();
  
  if (!isAuthenticated) {
    return <button onClick={() => actions.login({ name: 'Alex' })}>Login</button>;
  }
  
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={actions.logout}>Logout</button>
    </div>
  );
}`,
      liveDemo: (
        <UserDemoProvider>
          <div className="context-demo">
            <h3>👤 User Context Demo</h3>
            <UserDemoComponent />
          </div>
        </UserDemoProvider>
      )
    },
    {
      title: "Cart Context",
      description: "Shopping cart management with item operations",
      code: `// 🛒 CART CONTEXT
const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  
  const addToCart = (product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const value = {
    items,
    totalItems,
    totalPrice,
    actions: { addToCart, removeFromCart }
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// 🛒 USAGE
function ProductCard({ product }) {
  const { actions } = useCart();
  
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => actions.addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}`,
      liveDemo: (
        <CartDemoProvider>
          <div className="context-demo">
            <h3>🛒 Cart Context Demo</h3>
            <CartDemoComponent />
          </div>
        </CartDemoProvider>
      )
    },
    {
      title: "Notification Context",
      description: "Global notification system with auto-dismiss",
      code: `// 🔔 NOTIFICATION CONTEXT
const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };
  
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };
  
  const value = {
    notifications,
    actions: { addNotification, removeNotification }
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}

// 🔔 USAGE
function NotificationContainer() {
  const { notifications, actions } = useNotification();
  
  return (
    <div className="notification-container">
      {notifications.map(notif => (
        <div key={notif.id} className={\`notification \${notif.type}\`}>
          {notif.message}
          <button onClick={() => actions.removeNotification(notif.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}`,
      liveDemo: (
        <NotificationDemoProvider>
          <div className="context-demo">
            <h3>🔔 Notification Context Demo</h3>
            <NotificationDemoComponent />
            <NotificationDisplay />
          </div>
        </NotificationDemoProvider>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { useCase: "Theme", state: "theme", functions: "toggleTheme()", values: "theme, isDark" },
    { useCase: "User", state: "user, loading", functions: "login(), logout()", values: "user, isAuthenticated" },
    { useCase: "Cart", state: "items", functions: "addToCart(), removeFromCart()", values: "items, totalItems, totalPrice" },
    { useCase: "Notifications", state: "notifications", functions: "addNotification(), removeNotification()", values: "notifications" },
    { useCase: "App Settings", state: "settings", functions: "updateSettings()", values: "settings, language, currency" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Implement a theme switcher for light/dark mode",
      solution: "Use Theme Context example",
      tip: "Store theme in context and provide toggle function"
    },
    {
      question: "Create a shopping cart that persists across components", 
      solution: "Use Cart Context example",
      tip: "Manage cart items in context with add/remove functions"
    },
    {
      question: "Build a global notification system",
      solution: "Use Notification Context example",
      tip: "Store notifications array in context with auto-remove"
    },
    {
      question: "Manage user authentication state globally",
      solution: "Use User Context example",
      tip: "Store user object and authentication status in context"
    }
  ];

  // Context Pattern Steps
  const contextPatternSteps = [
    {
      step: "1",
      title: "Create Context",
      description: "const MyContext = createContext(); - Creates the bulletin board"
    },
    {
      step: "2", 
      title: "Create Provider",
      description: "Wrapper component that holds state and provides value"
    },
    {
      step: "3",
      title: "Define State & Functions",
      description: "What data to share and what actions can be performed"
    },
    {
      step: "4",
      title: "Create Custom Hook",
      description: "export function useMyContext() - Cleaner usage and error handling"
    },
    {
      step: "5",
      title: "Wrap Your App",
      description: "<MyProvider><App /></MyProvider> - Make context available everywhere"
    }
  ];

  // Pro Tips
  const proTips = [
    "Start Simple - One context at a time, don't over-engineer",
    "Custom Hooks - Create useMyContext() for cleaner consumption",
    "Separate Concerns - Different contexts for different data types",
    "Performance - Only put in context what truly needs to be global",
    "Type Safety - Use TypeScript for better developer experience",
    "Default Values - Provide sensible defaults for your context",
    "Error Handling - Throw errors when context is used outside provider",
    "Computed Values - Derive values in provider rather than components"
  ];

  // Common Patterns
  const commonPatterns = [
    {
      name: "Actions Object",
      code: `const value = {
  data,
  actions: { update, remove, clear } // Group related functions
};`,
      description: "Group all actions in an actions object for better organization"
    },
    {
      name: "Computed Values", 
      code: `const value = {
  items,
  totalItems: items.length, // Derived data
  isEmpty: items.length === 0
};`,
      description: "Calculate derived values in the provider to avoid repetition"
    },
    {
      name: "Loading States",
      code: `const value = {
  data,
  loading,
  error,
  actions: { fetch, refetch }
};`,
      description: "Include loading and error states for async operations"
    },
    {
      name: "Nested Providers",
      code: `function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}`,
      description: "Wrap providers based on dependency order"
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < contextExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : contextExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🎯 ${contextExamples.length}+ Contexts` },
    { id: 'reference', label: '📚 Quick Reference' },
    { id: 'pattern', label: '⚡ Context Pattern' },
    { id: 'patterns', label: '🔄 Common Patterns' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="context-mastery-container">
      <header className="mastery-header">
        <h1>🎯 Context API Pattern Mastery Kit</h1>
        <p>Master global state management with React Context - 4+ ready-to-use context patterns!</p>
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
              <h2>Universal Context API Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY global state management - works for all context types!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="try-it">
                <h3>🎯 When to Use Context API:</h3>
                <div className="pattern-grid">
                  <div className="pattern-item">✅ Theme (Light/Dark mode)</div>
                  <div className="pattern-item">✅ User Authentication</div>
                  <div className="pattern-item">✅ Shopping Cart</div>
                  <div className="pattern-item">✅ Notifications</div>
                  <div className="pattern-item">✅ App Settings</div>
                  <div className="pattern-item">✅ Language/Internationalization</div>
                </div>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Context {currentExample + 1}: {contextExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {contextExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{contextExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {contextExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{contextExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Context API Patterns</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Use Case</div>
                  <div>State</div>
                  <div>Functions</div>
                  <div>Value Properties</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.useCase}</strong></div>
                    <div>{item.state}</div>
                    <div>{item.functions}</div>
                    <div>{item.values}</div>
                  </div>
                ))}
              </div>

              <div className="pattern-summary">
                <h3>⚡ Battle Plan for Any Context:</h3>
                <div className="battle-plan">
                  <div className="plan-step">
                    <h4>Step 1: Identify Global State</h4>
                    <p>Data needed by multiple components?</p>
                    <p>User preferences? App-wide settings?</p>
                  </div>
                  <div className="plan-step">
                    <h4>Step 2: Copy Universal Skeleton</h4>
                    <p>Same structure for all context types</p>
                  </div>
                  <div className="plan-step">
                    <h4>Step 3: Customize Three Things</h4>
                    <p>Context name • State variables • Functions</p>
                  </div>
                  <div className="plan-step">
                    <h4>Step 4: Wrap Your App</h4>
                    <p>Make context available to all components</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Context Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Context API Pattern</h2>
              
              <div className="steps-list">
                {contextPatternSteps.map((step, index) => (
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
                <h3>🎯 Context API Data Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">Provider State</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Context Value</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Components</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Update State</div>
                </div>
              </div>
            </section>
          )}

          {/* Common Patterns */}
          {activeTab === 'patterns' && (
            <section className="patterns-section">
              <h2>🔄 Common Context API Patterns</h2>
              
              <div className="patterns-grid">
                {commonPatterns.map((pattern, index) => (
                  <div key={index} className="pattern-card">
                    <h4>{pattern.name}</h4>
                    <pre><code>{pattern.code}</code></pre>
                    <p>{pattern.description}</p>
                  </div>
                ))}
              </div>

              <div className="provider-composition">
                <h3>🎯 Provider Composition Example:</h3>
                <div className="code-block">
                  <pre><code>{`function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}`}</code></pre>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Context API Mock Interviews</h2>
              
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
                <h3>🎯 Context API Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Identify Global State Need</h4>
                    <p>Does this data need to be shared across components?</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Choose Context Pattern</h4>
                    <p>Theme, User, Cart, Notification, etc.</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Implement Provider</h4>
                    <p>State, functions, and value object</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Demonstrate Usage</h4>
                    <p>Show how components consume the context</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Context API Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Context API Problem!</h3>
                <p>You now have 4+ context patterns using one universal structure! 🚀</p>
                <p>For ANY global state requirement: Create Context → Provider → State → Functions → Wrap App</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContextApiMastery;