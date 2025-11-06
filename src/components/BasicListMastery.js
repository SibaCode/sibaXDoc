// src/components/BasicListMastery.js
import React, { useState } from 'react';
import './BasicListMastery.css';

const BasicListMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all examples
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [groceries, setGroceries] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  const [contacts, setContacts] = useState([]);
  const [contactInput, setContactInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState('');
  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');
  const [songs, setSongs] = useState([]);
  const [songInput, setSongInput] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectInput, setProjectInput] = useState('');
  const [wishes, setWishes] = useState([]);
  const [wishInput, setWishInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  // Universal Basic List Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function BasicListSkeleton() {
  // 🎯 STEP 1: Choose your state names
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  
  // 🎯 STEP 2: Add function
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };
  
  // 🎯 STEP 3: Remove function
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Input Section */}
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
      
      {/* List Section */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

  // All 12+ Basic List Examples
  const basicListExamples = [
    {
      title: "Todo List",
      description: "Simple todo list with add/remove functionality",
      code: `function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  
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
      <h2>📝 My Todos</h2>
      <input 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={addTodo}>Add Todo</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            ✅ {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>📝 My Todos</h2>
          <div className="input-section">
            <input 
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="What needs to be done?"
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
          
          <ul className="demo-list">
            {todos.map((todo, index) => (
              <li key={index} className="list-item">
                <span>✅ {todo}</span>
                <button 
                  onClick={() => setTodos(todos.filter((_, i) => i !== index))}
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
      title: "Shopping List",
      description: "Grocery shopping list with item management",
      code: `function ShoppingList() {
  const [groceries, setGroceries] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');
  
  const addGrocery = () => {
    if (groceryInput.trim()) {
      setGroceries([...groceries, groceryInput]);
      setGroceryInput('');
    }
  };
  
  const removeGrocery = (index) => {
    setGroceries(groceries.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>🛒 Shopping List</h2>
      <input 
        value={groceryInput}
        onChange={(e) => setGroceryInput(e.target.value)}
        placeholder="Add grocery item"
      />
      <button onClick={addGrocery}>Add to Cart</button>
      
      <ul>
        {groceries.map((grocery, index) => (
          <li key={index}>
            🍎 {grocery}
            <button onClick={() => removeGrocery(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>🛒 Shopping List</h2>
          <div className="input-section">
            <input 
              value={groceryInput}
              onChange={(e) => setGroceryInput(e.target.value)}
              placeholder="Add grocery item"
              className="demo-input"
            />
            <button onClick={() => {
              if (groceryInput.trim()) {
                setGroceries([...groceries, groceryInput]);
                setGroceryInput('');
              }
            }} className="demo-btn">
              Add to Cart
            </button>
          </div>
          
          <ul className="demo-list">
            {groceries.map((grocery, index) => (
              <li key={index} className="list-item">
                <span>🍎 {grocery}</span>
                <button 
                  onClick={() => setGroceries(groceries.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Favorite Movies",
      description: "Collection of favorite movies with add/remove",
      code: `function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');
  
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
      <h2>🎬 Favorite Movies</h2>
      <input 
        value={movieInput}
        onChange={(e) => setMovieInput(e.target.value)}
        placeholder="Add a movie title"
      />
      <button onClick={addMovie}>Add Movie</button>
      
      <ul>
        {movies.map((movie, index) => (
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
        <div className="list-demo">
          <h2>🎬 Favorite Movies</h2>
          <div className="input-section">
            <input 
              value={movieInput}
              onChange={(e) => setMovieInput(e.target.value)}
              placeholder="Add a movie title"
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
          
          <ul className="demo-list">
            {movies.map((movie, index) => (
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
    },
    {
      title: "Book Collection",
      description: "Personal book collection tracker",
      code: `function BookCollection() {
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  
  const addBook = () => {
    if (bookInput.trim()) {
      setBooks([...books, bookInput]);
      setBookInput('');
    }
  };
  
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📚 My Book Collection</h2>
      <input 
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        placeholder="Add book title"
      />
      <button onClick={addBook}>Add Book</button>
      
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            📖 {book}
            <button onClick={() => removeBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>📚 My Book Collection</h2>
          <div className="input-section">
            <input 
              value={bookInput}
              onChange={(e) => setBookInput(e.target.value)}
              placeholder="Add book title"
              className="demo-input"
            />
            <button onClick={() => {
              if (bookInput.trim()) {
                setBooks([...books, bookInput]);
                setBookInput('');
              }
            }} className="demo-btn">
              Add Book
            </button>
          </div>
          
          <ul className="demo-list">
            {books.map((book, index) => (
              <li key={index} className="list-item">
                <span>📖 {book}</span>
                <button 
                  onClick={() => setBooks(books.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Contact List",
      description: "Simple contact management system",
      code: `function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [contactInput, setContactInput] = useState('');
  
  const addContact = () => {
    if (contactInput.trim()) {
      setContacts([...contacts, contactInput]);
      setContactInput('');
    }
  };
  
  const removeContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📞 Contact List</h2>
      <input 
        value={contactInput}
        onChange={(e) => setContactInput(e.target.value)}
        placeholder="Add contact name"
      />
      <button onClick={addContact}>Add Contact</button>
      
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            👤 {contact}
            <button onClick={() => removeContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>📞 Contact List</h2>
          <div className="input-section">
            <input 
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              placeholder="Add contact name"
              className="demo-input"
            />
            <button onClick={() => {
              if (contactInput.trim()) {
                setContacts([...contacts, contactInput]);
                setContactInput('');
              }
            }} className="demo-btn">
              Add Contact
            </button>
          </div>
          
          <ul className="demo-list">
            {contacts.map((contact, index) => (
              <li key={index} className="list-item">
                <span>👤 {contact}</span>
                <button 
                  onClick={() => setContacts(contacts.filter((_, i) => i !== index))}
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
      title: "Recipe List",
      description: "Personal recipe collection",
      code: `function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [recipeInput, setRecipeInput] = useState('');
  
  const addRecipe = () => {
    if (recipeInput.trim()) {
      setRecipes([...recipes, recipeInput]);
      setRecipeInput('');
    }
  };
  
  const removeRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>🍳 My Recipes</h2>
      <input 
        value={recipeInput}
        onChange={(e) => setRecipeInput(e.target.value)}
        placeholder="Add recipe name"
      />
      <button onClick={addRecipe}>Add Recipe</button>
      
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            👨‍🍳 {recipe}
            <button onClick={() => removeRecipe(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>🍳 My Recipes</h2>
          <div className="input-section">
            <input 
              value={recipeInput}
              onChange={(e) => setRecipeInput(e.target.value)}
              placeholder="Add recipe name"
              className="demo-input"
            />
            <button onClick={() => {
              if (recipeInput.trim()) {
                setRecipes([...recipes, recipeInput]);
                setRecipeInput('');
              }
            }} className="demo-btn">
              Add Recipe
            </button>
          </div>
          
          <ul className="demo-list">
            {recipes.map((recipe, index) => (
              <li key={index} className="list-item">
                <span>👨‍🍳 {recipe}</span>
                <button 
                  onClick={() => setRecipes(recipes.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Goals List",
      description: "Personal goals and objectives tracker",
      code: `function GoalsList() {
  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');
  
  const addGoal = () => {
    if (goalInput.trim()) {
      setGoals([...goals, goalInput]);
      setGoalInput('');
    }
  };
  
  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>🎯 My Goals</h2>
      <input 
        value={goalInput}
        onChange={(e) => setGoalInput(e.target.value)}
        placeholder="Add a goal"
      />
      <button onClick={addGoal}>Add Goal</button>
      
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            🎯 {goal}
            <button onClick={() => removeGoal(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>🎯 My Goals</h2>
          <div className="input-section">
            <input 
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              placeholder="Add a goal"
              className="demo-input"
            />
            <button onClick={() => {
              if (goalInput.trim()) {
                setGoals([...goals, goalInput]);
                setGoalInput('');
              }
            }} className="demo-btn">
              Add Goal
            </button>
          </div>
          
          <ul className="demo-list">
            {goals.map((goal, index) => (
              <li key={index} className="list-item">
                <span>🎯 {goal}</span>
                <button 
                  onClick={() => setGoals(goals.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Music Playlist",
      description: "Personal music playlist manager",
      code: `function MusicPlaylist() {
  const [songs, setSongs] = useState([]);
  const [songInput, setSongInput] = useState('');
  
  const addSong = () => {
    if (songInput.trim()) {
      setSongs([...songs, songInput]);
      setSongInput('');
    }
  };
  
  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>🎵 My Playlist</h2>
      <input 
        value={songInput}
        onChange={(e) => setSongInput(e.target.value)}
        placeholder="Add song title"
      />
      <button onClick={addSong}>Add Song</button>
      
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            🎵 {song}
            <button onClick={() => removeSong(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>🎵 My Playlist</h2>
          <div className="input-section">
            <input 
              value={songInput}
              onChange={(e) => setSongInput(e.target.value)}
              placeholder="Add song title"
              className="demo-input"
            />
            <button onClick={() => {
              if (songInput.trim()) {
                setSongs([...songs, songInput]);
                setSongInput('');
              }
            }} className="demo-btn">
              Add Song
            </button>
          </div>
          
          <ul className="demo-list">
            {songs.map((song, index) => (
              <li key={index} className="list-item">
                <span>🎵 {song}</span>
                <button 
                  onClick={() => setSongs(songs.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Project Ideas",
      description: "Collection of project ideas and inspiration",
      code: `function ProjectIdeas() {
  const [projects, setProjects] = useState([]);
  const [projectInput, setProjectInput] = useState('');
  
  const addProject = () => {
    if (projectInput.trim()) {
      setProjects([...projects, projectInput]);
      setProjectInput('');
    }
  };
  
  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>💡 Project Ideas</h2>
      <input 
        value={projectInput}
        onChange={(e) => setProjectInput(e.target.value)}
        placeholder="Add project idea"
      />
      <button onClick={addProject}>Add Idea</button>
      
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            💡 {project}
            <button onClick={() => removeProject(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>💡 Project Ideas</h2>
          <div className="input-section">
            <input 
              value={projectInput}
              onChange={(e) => setProjectInput(e.target.value)}
              placeholder="Add project idea"
              className="demo-input"
            />
            <button onClick={() => {
              if (projectInput.trim()) {
                setProjects([...projects, projectInput]);
                setProjectInput('');
              }
            }} className="demo-btn">
              Add Idea
            </button>
          </div>
          
          <ul className="demo-list">
            {projects.map((project, index) => (
              <li key={index} className="list-item">
                <span>💡 {project}</span>
                <button 
                  onClick={() => setProjects(projects.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Wish List",
      description: "Personal wish list for items you want",
      code: `function WishList() {
  const [wishes, setWishes] = useState([]);
  const [wishInput, setWishInput] = useState('');
  
  const addWish = () => {
    if (wishInput.trim()) {
      setWishes([...wishes, wishInput]);
      setWishInput('');
    }
  };
  
  const removeWish = (index) => {
    setWishes(wishes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>⭐ Wish List</h2>
      <input 
        value={wishInput}
        onChange={(e) => setWishInput(e.target.value)}
        placeholder="Add something you want"
      />
      <button onClick={addWish}>Add to Wishlist</button>
      
      <ul>
        {wishes.map((wish, index) => (
          <li key={index}>
            ⭐ {wish}
            <button onClick={() => removeWish(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>⭐ Wish List</h2>
          <div className="input-section">
            <input 
              value={wishInput}
              onChange={(e) => setWishInput(e.target.value)}
              placeholder="Add something you want"
              className="demo-input"
            />
            <button onClick={() => {
              if (wishInput.trim()) {
                setWishes([...wishes, wishInput]);
                setWishInput('');
              }
            }} className="demo-btn">
              Add to Wishlist
            </button>
          </div>
          
          <ul className="demo-list">
            {wishes.map((wish, index) => (
              <li key={index} className="list-item">
                <span>⭐ {wish}</span>
                <button 
                  onClick={() => setWishes(wishes.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Notes List",
      description: "Quick notes and reminders",
      code: `function NotesList() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  
  const addNote = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput]);
      setNoteInput('');
    }
  };
  
  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📋 Quick Notes</h2>
      <input 
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        placeholder="Add a quick note"
      />
      <button onClick={addNote}>Add Note</button>
      
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            📝 {note}
            <button onClick={() => removeNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>📋 Quick Notes</h2>
          <div className="input-section">
            <input 
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="Add a quick note"
              className="demo-input"
            />
            <button onClick={() => {
              if (noteInput.trim()) {
                setNotes([...notes, noteInput]);
                setNoteInput('');
              }
            }} className="demo-btn">
              Add Note
            </button>
          </div>
          
          <ul className="demo-list">
            {notes.map((note, index) => (
              <li key={index} className="list-item">
                <span>📝 {note}</span>
                <button 
                  onClick={() => setNotes(notes.filter((_, i) => i !== index))}
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
      title: "Learning Goals",
      description: "Skills and topics you want to learn",
      code: `function LearningGoals() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  
  const addSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };
  
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📚 Skills to Learn</h2>
      <input 
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        placeholder="Add a skill to learn"
      />
      <button onClick={addSkill}>Add Skill</button>
      
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            📚 {skill}
            <button onClick={() => removeSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      liveDemo: (
        <div className="list-demo">
          <h2>📚 Skills to Learn</h2>
          <div className="input-section">
            <input 
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add a skill to learn"
              className="demo-input"
            />
            <button onClick={() => {
              if (skillInput.trim()) {
                setSkills([...skills, skillInput]);
                setSkillInput('');
              }
            }} className="demo-btn">
              Add Skill
            </button>
          </div>
          
          <ul className="demo-list">
            {skills.map((skill, index) => (
              <li key={index} className="list-item">
                <span>📚 {skill}</span>
                <button 
                  onClick={() => setSkills(skills.filter((_, i) => i !== index))}
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
    { problem: "Todo List", stateNames: "todos/todoInput", placeholder: "What needs to be done?", buttonText: "Add Todo" },
    { problem: "Shopping List", stateNames: "groceries/groceryInput", placeholder: "Add grocery item", buttonText: "Add to Cart" },
    { problem: "Favorite Movies", stateNames: "movies/movieInput", placeholder: "Add a movie title", buttonText: "Add Movie" },
    { problem: "Book Collection", stateNames: "books/bookInput", placeholder: "Add book title", buttonText: "Add Book" },
    { problem: "Contact List", stateNames: "contacts/contactInput", placeholder: "Add contact name", buttonText: "Add Contact" },
    { problem: "Recipe List", stateNames: "recipes/recipeInput", placeholder: "Add recipe name", buttonText: "Add Recipe" },
    { problem: "Goals List", stateNames: "goals/goalInput", placeholder: "Add a goal", buttonText: "Add Goal" },
    { problem: "Music Playlist", stateNames: "songs/songInput", placeholder: "Add song title", buttonText: "Add Song" },
    { problem: "Project Ideas", stateNames: "projects/projectInput", placeholder: "Add project idea", buttonText: "Add Idea" },
    { problem: "Wish List", stateNames: "wishes/wishInput", placeholder: "Add something you want", buttonText: "Add to Wishlist" },
    { problem: "Notes List", stateNames: "notes/noteInput", placeholder: "Add a quick note", buttonText: "Add Note" },
    { problem: "Learning Goals", stateNames: "skills/skillInput", placeholder: "Add a skill to learn", buttonText: "Add Skill" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a simple todo list",
      solution: "Use Todo List example",
      tip: "Focus on add/remove functionality with clear user feedback"
    },
    {
      question: "Build a shopping list app", 
      solution: "Use Shopping List example",
      tip: "Use food-related emojis and clear action labels"
    },
    {
      question: "Make a contact manager",
      solution: "Use Contact List example", 
      tip: "Keep it simple - just names for basic version"
    },
    {
      question: "Create a movie watchlist",
      solution: "Use Favorite Movies example",
      tip: "Movie-themed emojis make it more engaging"
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < basicListExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : basicListExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🔄 ${basicListExamples.length}+ Examples` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'battle-plan', label: '⚡ Battle Plan' }
  ];

  return (
    <div className="basic-list-mastery-container">
      <header className="mastery-header">
        <h1>🚀 Level 1: Basic List Pattern Mastery Kit</h1>
        <p>Master 12+ basic list variations from one universal skeleton!</p>
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
              <h2>Universal Basic List Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY basic list problem
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="transformation-guide">
                <h3>🔄 Change Only These 4 Things:</h3>
                <ol>
                  <li><strong>State variable names</strong> (items/input → todos/todoInput, etc.)</li>
                  <li><strong>Input placeholder</strong> ("Add item" → "What needs to be done?", etc.)</li>
                  <li><strong>Button text</strong> ("Add" → "Add Todo", "Add Movie", etc.)</li>
                  <li><strong>Title and emojis</strong> (Match your problem context)</li>
                </ol>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Example {currentExample + 1}: {basicListExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {basicListExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{basicListExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Demo:</h4>
                {basicListExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{basicListExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - 12+ Variations</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Problem</div>
                  <div>State Names</div>
                  <div>Placeholder</div>
                  <div>Button Text</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.problem}</strong></div>
                    <div><code>{item.stateNames}</code></div>
                    <div>"{item.placeholder}"</div>
                    <div>"{item.buttonText}"</div>
                  </div>
                ))}
              </div>

              <div className="pro-tips">
                <h3>💡 PRO TIP:</h3>
                <p>For ANY basic list problem:</p>
                <ol>
                  <li>Copy the skeleton</li>
                  <li>Change the variable names</li>
                  <li>Change the placeholder text</li>
                  <li>Change the button text</li>
                  <li>Add a relevant title with emojis</li>
                </ol>
                <p className="success-message">You now have 12+ basic list examples! 🚀</p>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Basic List Mock Interviews</h2>
              
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
                <h3>🎯 Interview Preparation:</h3>
                <div className="prep-steps">
                  <div className="prep-step">
                    <h4>1. Listen Carefully</h4>
                    <p>Identify it's a basic list problem</p>
                  </div>
                  <div className="prep-step">
                    <h4>2. Choose Template</h4>
                    <p>Pick the closest example from the 12+ variations</p>
                  </div>
                  <div className="prep-step">
                    <h4>3. Customize</h4>
                    <p>Change variable names and text to match the problem</p>
                  </div>
                  <div className="prep-step">
                    <h4>4. Test</h4>
                    <p>Verify add and remove functionality works</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Battle Plan */}
          {activeTab === 'battle-plan' && (
            <section className="battle-plan-section">
              <h2>⚡ Interview Battle Plan</h2>
              
              <div className="steps-list">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Identify Basic List Pattern</h3>
                    <p>"Is this managing a simple list of items?" → YES = BASIC LIST</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Choose Your Variables</h3>
                    <p>Pick state names: todos/todoInput, groceries/groceryInput, movies/movieInput, etc.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Use the Skeleton</h3>
                    <p>Copy universal basic list skeleton</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Customize for Problem</h3>
                    <p>Change state names, placeholder, button text, and title</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Add Emojis & Style</h3>
                    <p>Use relevant emojis to make it engaging</p>
                  </div>
                </div>
              </div>

              <div className="final-reminder">
                <h3>🎯 REMEMBER:</h3>
                <div className="reminder-content">
                  <p><strong>For ANY basic list problem:</strong></p>
                  <ol>
                    <li>Copy the skeleton</li>
                    <li>Change the state names to match the problem</li>
                    <li>Change the placeholder text to be user-friendly</li>
                    <li>Change the button text to match the context</li>
                    <li>Add a title with relevant emojis</li>
                    <li>Leave the logic unchanged - it always works!</li>
                  </ol>
                  <p className="success-message">You're ready for ANY basic list interview question! 🏆</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicListMastery;