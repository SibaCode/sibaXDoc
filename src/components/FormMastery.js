// src/components/FormMastery.js
import React, { useState } from 'react';
import './FormMastery.css';

const FormMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all form examples
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [registrationForm, setRegistrationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const [jobApplication, setJobApplication] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: '',
    title: '',
    review: ''
  });

  const [shippingForm, setShippingForm] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });

  const [eventRegistration, setEventRegistration] = useState({
    firstName: '',
    lastName: '',
    email: '',
    event: '',
    guests: '1',
    dietary: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    category: '',
    feedback: '',
    rating: ''
  });

  const [subscriptionForm, setSubscriptionForm] = useState({
    email: '',
    frequency: 'weekly',
    categories: []
  });

  const [surveyForm, setSurveyForm] = useState({
    age: '',
    occupation: '',
    satisfaction: '',
    comments: ''
  });

  // Universal Form Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function FormSkeleton() {
  // 🎯 STEP 1: FORM STATE (Object with all fields)
  const [formData, setFormData] = useState({
    field1: '',
    field2: '', 
    field3: ''
  });
  
  // 🎯 STEP 2: HANDLE CHANGE (One function for all inputs)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // 🎯 STEP 3: HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    // 🎯 STEP 4: FORM ELEMENT
    <form onSubmit={handleSubmit}>
      {/* 🎯 INPUTS - All have name, value, and onChange */}
      <input
        name="field1"
        value={formData.field1}
        onChange={handleChange}
        placeholder="Field 1"
      />
      
      <input
        name="field2"
        value={formData.field2}
        onChange={handleChange}
        placeholder="Field 2"
      />
      
      <input
        name="field3"
        value={formData.field3}
        onChange={handleChange}
        placeholder="Field 3"
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}`;

  // Form Examples
  const formExamples = [
    {
      title: "Contact Form",
      description: "Simple contact form with name, email, and message",
      code: `function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert(\`Thanks \${formData.name}! We'll contact you at \${formData.email}\`);
  };

  return (
    <div>
      <h2>📞 Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        />
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}`,
      liveDemo: (
        <div className="form-demo">
          <h2>📞 Contact Us</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Thanks ${contactForm.name}! We'll contact you at ${contactForm.email}`);
          }}>
            <input
              name="name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, [e.target.name]: e.target.value})}
              placeholder="Your Name"
              className="form-input"
              required
            />
            
            <input
              name="email"
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, [e.target.name]: e.target.value})}
              placeholder="Your Email"
              className="form-input"
              required
            />
            
            <textarea
              name="message"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, [e.target.name]: e.target.value})}
              placeholder="Your Message"
              rows="4"
              className="form-textarea"
              required
            />
            
            <button type="submit" className="form-btn">Send Message</button>
          </form>
        </div>
      )
    },
    {
      title: "User Registration Form",
      description: "Complete user registration with validation",
      code: `function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('User registered:', formData);
    alert(\`Welcome \${formData.firstName}! Account created.\`);
  };

  return (
    <div>
      <h2>👤 Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}`,
      liveDemo: (
        <div className="form-demo">
          <h2>👤 Create Account</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (registrationForm.password !== registrationForm.confirmPassword) {
              alert("Passwords don't match!");
              return;
            }
            alert(`Welcome ${registrationForm.firstName}! Account created.`);
          }}>
            <input
              name="firstName"
              value={registrationForm.firstName}
              onChange={(e) => setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})}
              placeholder="First Name"
              className="form-input"
              required
            />
            
            <input
              name="lastName"
              value={registrationForm.lastName}
              onChange={(e) => setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})}
              placeholder="Last Name"
              className="form-input"
              required
            />
            
            <input
              name="email"
              type="email"
              value={registrationForm.email}
              onChange={(e) => setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})}
              placeholder="Email Address"
              className="form-input"
              required
            />
            
            <input
              name="password"
              type="password"
              value={registrationForm.password}
              onChange={(e) => setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})}
              placeholder="Password"
              className="form-input"
              required
            />
            
            <input
              name="confirmPassword"
              type="password"
              value={registrationForm.confirmPassword}
              onChange={(e) => setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})}
              placeholder="Confirm Password"
              className="form-input"
              required
            />
            
            <button type="submit" className="form-btn">Register</button>
          </form>
        </div>
      )
    },
    {
      title: "Login Form",
      description: "Simple login form with username and password",
      code: `function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    alert(\`Welcome back, \${formData.username}!\`);
  };

  return (
    <div>
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username or Email"
          required
        />
        
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`,
      liveDemo: (
        <div className="form-demo">
          <h2>🔐 Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Welcome back, ${loginForm.username}!`);
          }}>
            <input
              name="username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({...loginForm, [e.target.name]: e.target.value})}
              placeholder="Username or Email"
              className="form-input"
              required
            />
            
            <input
              name="password"
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, [e.target.name]: e.target.value})}
              placeholder="Password"
              className="form-input"
              required
            />
            
            <button type="submit" className="form-btn">Login</button>
          </form>
        </div>
      )
    },
    {
      title: "Job Application Form",
      description: "Complete job application with multiple fields",
      code: `function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job application:', formData);
    alert(\`Thank you \${formData.fullName}! We'll review your application for \${formData.position}\`);
  };

  return (
    <div>
      <h2>💼 Job Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        >
          <option value="">Select Position</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Full Stack Developer</option>
        </select>
        
        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Years of Experience"
          type="number"
        />
        
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Cover Letter"
          rows="4"
        />
        
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}`,
      liveDemo: (
        <div className="form-demo">
          <h2>💼 Job Application</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Thank you ${jobApplication.fullName}! We'll review your application for ${jobApplication.position}`);
          }}>
            <input
              name="fullName"
              value={jobApplication.fullName}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              placeholder="Full Name"
              className="form-input"
              required
            />
            
            <input
              name="email"
              type="email"
              value={jobApplication.email}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              placeholder="Email"
              className="form-input"
              required
            />
            
            <input
              name="phone"
              value={jobApplication.phone}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              placeholder="Phone Number"
              className="form-input"
              required
            />
            
            <select
              name="position"
              value={jobApplication.position}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              className="form-select"
              required
            >
              <option value="">Select Position</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
            
            <input
              name="experience"
              value={jobApplication.experience}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              placeholder="Years of Experience"
              type="number"
              className="form-input"
            />
            
            <textarea
              name="coverLetter"
              value={jobApplication.coverLetter}
              onChange={(e) => setJobApplication({...jobApplication, [e.target.name]: e.target.value})}
              placeholder="Cover Letter"
              rows="4"
              className="form-textarea"
            />
            
            <button type="submit" className="form-btn">Submit Application</button>
          </form>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { problem: "Contact Form", stateFields: "name, email, message", inputs: "2 text, 1 textarea" },
    { problem: "User Registration", stateFields: "firstName, lastName, email, password, confirmPassword", inputs: "5 text (2 password)" },
    { problem: "Login Form", stateFields: "username, password", inputs: "2 text (1 password)" },
    { problem: "Job Application", stateFields: "fullName, email, phone, position, experience, coverLetter", inputs: "4 text, 1 select, 1 textarea" },
    { problem: "Product Review", stateFields: "name, rating, title, review", inputs: "2 text, 1 select, 1 textarea" },
    { problem: "Shipping Address", stateFields: "fullName, address, city, state, zipCode, country", inputs: "5 text, 1 select" },
    { problem: "Event Registration", stateFields: "firstName, lastName, email, event, guests, dietary", inputs: "3 text, 2 select, 1 number" },
    { problem: "Feedback Form", stateFields: "name, email, category, feedback, rating", inputs: "2 text, 2 select, 1 textarea" },
    { problem: "Subscription Form", stateFields: "email, frequency, categories", inputs: "1 email, 1 select, checkboxes" },
    { problem: "Survey Form", stateFields: "age, occupation, satisfaction, comments", inputs: "2 text, 1 select, 1 textarea" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a contact form",
      solution: "Use Contact Form example",
      tip: "Include name, email, and message fields with proper validation"
    },
    {
      question: "Build a user registration form", 
      solution: "Use User Registration Form example",
      tip: "Add password confirmation and validation"
    },
    {
      question: "Make a login form",
      solution: "Use Login Form example",
      tip: "Keep it simple with username and password"
    },
    {
      question: "Create a job application form",
      solution: "Use Job Application Form example",
      tip: "Include position dropdown and cover letter textarea"
    }
  ];

  // Form Pattern Steps
  const formPatternSteps = [
    {
      step: "1",
      title: "Form State Object",
      description: "Create state object with all form fields: const [formData, setFormData] = useState({ field1: '', field2: '' });"
    },
    {
      step: "2",
      title: "Universal Handle Change",
      description: "One function for all inputs: const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };"
    },
    {
      step: "3", 
      title: "Handle Submit",
      description: "Prevent default and process data: const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };"
    },
    {
      step: "4",
      title: "Form Structure",
      description: "Use form element with onSubmit and inputs with name, value, onChange"
    }
  ];

  // Pro Tips
  const proTips = [
    "Always use e.preventDefault() in handleSubmit",
    "Input name must match state property name",
    "Use one handleChange for all inputs",
    "Checkboxes/radios need special handling",
    "Add required attribute for validation",
    "Use proper input types (email, password, number)",
    "Include helpful placeholder text",
    "Test form submission and validation"
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < formExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : formExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `📝 ${formExamples.length}+ Examples` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Form Pattern' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="form-mastery-container">
      <header className="mastery-header">
        <h1>🚀 Form Pattern Mastery Kit</h1>
        <p>Master form handling with this universal pattern - 10+ ready-to-use examples!</p>
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
              <h2>Universal Form Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY form - works for all 10+ examples!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="transformation-guide">
                <h3>🎯 The 4-Step Form Pattern:</h3>
                <ol>
                  <li><strong>Form State Object</strong> - One object with all fields</li>
                  <li><strong>Universal Handle Change</strong> - One function for all inputs</li>
                  <li><strong>Handle Submit</strong> - Prevent default and process data</li>
                  <li><strong>Form Structure</strong> - Proper form element with inputs</li>
                </ol>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {formExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {formExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{formExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {formExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{formExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - 10+ Form Types</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Form Type</div>
                  <div>State Fields</div>
                  <div>Input Types</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.problem}</strong></div>
                    <div><code>{item.stateFields}</code></div>
                    <div>{item.inputs}</div>
                  </div>
                ))}
              </div>

              <div className="pattern-summary">
                <h3>🎯 Universal Form Pattern Works For:</h3>
                <div className="pattern-grid">
                  <div className="pattern-item">✅ Contact Forms</div>
                  <div className="pattern-item">✅ Registration Forms</div>
                  <div className="pattern-item">✅ Login Forms</div>
                  <div className="pattern-item">✅ Application Forms</div>
                  <div className="pattern-item">✅ Survey Forms</div>
                  <div className="pattern-item">✅ Feedback Forms</div>
                  <div className="pattern-item">✅ Order Forms</div>
                  <div className="pattern-item">✅ And many more!</div>
                </div>
              </div>
            </section>
          )}

          {/* Form Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Form Pattern</h2>
              
              <div className="steps-list">
                {formPatternSteps.map((step, index) => (
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
                <h3>🎯 Core Form Logic (Always the same):</h3>
                <div className="code-block">
                  <pre><code>{`// 🎯 STEP 1: Form state object
const [formData, setFormData] = useState({
  field1: '',
  field2: '',
  field3: ''
});

// 🎯 STEP 2: Universal handle change
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// 🎯 STEP 3: Handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  // Process your form data here
};

// 🎯 STEP 4: Form structure
<form onSubmit={handleSubmit}>
  <input
    name="field1"
    value={formData.field1}
    onChange={handleChange}
    placeholder="Field 1"
  />
  <button type="submit">Submit</button>
</form>`}</code></pre>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Form Pattern Mock Interviews</h2>
              
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
                <h3>🎯 Form Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Identify Form Type</h4>
                    <p>Choose the closest example from the 10+ patterns</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Use Universal Skeleton</h4>
                    <p>Copy the 4-step form pattern</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Customize Fields</h4>
                    <p>Update state object and inputs for the specific form</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Add Validation</h4>
                    <p>Include required fields and basic validation</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Form Pattern Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready!</h3>
                <p>You now have 10+ form examples using one universal pattern! 🚀</p>
                <p>For ANY form problem: Copy skeleton → Customize fields → Add validation</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormMastery;