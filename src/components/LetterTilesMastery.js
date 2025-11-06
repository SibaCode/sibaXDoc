// src/components/LetterTilesMastery.js
import React, { useState } from 'react';
import './LetterTilesMastery.css';

const LetterTilesMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Interactive states for all letter tile examples
  const [wordBuilderTiles, setWordBuilderTiles] = useState(['R', 'E', 'A', 'C', 'T']);
  const [wordBuilderSelected, setWordBuilderSelected] = useState([]);

  const [spellingTiles, setSpellingTiles] = useState(['C', 'A', 'T', 'D', 'O', 'G']);
  const [spellingSelected, setSpellingSelected] = useState([]);
  const [spellingScore, setSpellingScore] = useState(0);

  const [memoryTiles, setMemoryTiles] = useState(['A', 'B', 'C', 'A', 'B', 'C']);
  const [memorySelected, setMemorySelected] = useState([]);
  const [memoryMatched, setMemoryMatched] = useState([]);

  const [anagramTiles, setAnagramTiles] = useState(['S', 'T', 'A', 'R', 'E']);
  const [anagramSelected, setAnagramSelected] = useState([]);
  const [anagramWords, setAnagramWords] = useState([]);

  const [scrabbleTiles, setScrabbleTiles] = useState(['Q', 'U', 'I', 'Z', 'E', 'S']);
  const [scrabbleSelected, setScrabbleSelected] = useState([]);
  const [scrabbleScore, setScrabbleScore] = useState(0);

  // Universal Letter Tiles Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function LetterTilesSkeleton() {
  // 🎯 STEP 1: DEFINE YOUR STATE
  const [tiles, setTiles] = useState(['A', 'B', 'C', 'D', 'E']); // Your letters
  const [selected, setSelected] = useState([]); // Selected letters
  
  // 🎯 STEP 2: TILE CLICK HANDLER (Don't change this pattern)
  const handleTileClick = (letter) => {
    if (!selected.includes(letter)) {
      setSelected(prev => [...prev, letter]);
    }
  };
  
  // 🎯 STEP 3: CONTROL FUNCTIONS (Customize these)
  const shuffleTiles = () => {
    setTiles(prev => [...prev].sort(() => Math.random() - 0.5));
  };
  
  const resetSelection = () => {
    setSelected([]);
  };
  
  const removeLastTile = () => {
    setSelected(prev => prev.slice(0, -1));
  };
  
  // 🎯 STEP 4: TILE STYLING (Customize appearance)
  const getTileStyle = (letter) => {
    const isSelected = selected.includes(letter);
    
    return {
      padding: '15px',
      margin: '5px',
      fontSize: '20px',
      backgroundColor: isSelected ? '#4CAF50' : '#f0f0f0',
      color: isSelected ? 'white' : 'black',
      border: isSelected ? '2px solid #388E3C' : '2px solid #ccc',
      borderRadius: '8px',
      cursor: isSelected ? 'default' : 'pointer'
    };
  };

  return (
    <div>
      {/* 🎯 TILE DISPLAY - Don't change this structure */}
      <div>
        {tiles.map((letter, index) => (
          <button 
            key={index}
            style={getTileStyle(letter)}
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      
      {/* 🎯 CONTROL PANEL - Add/remove buttons as needed */}
      <div>
        <button onClick={shuffleTiles}>Shuffle</button>
        <button onClick={resetSelection}>Clear All</button>
        <button onClick={removeLastTile}>Remove Last</button>
      </div>
      
      {/* 🎯 SELECTED DISPLAY - Customize what shows */}
      <div>
        <h3>Your Word:</h3>
        <p>{selected.join('') || 'No letters selected'}</p>
        <p>Letters: {selected.length}</p>
      </div>
    </div>
  );
}`;

  // Letter Tile Examples
  const letterTileExamples = [
    {
      title: "Basic Word Builder",
      description: "Simple letter selection to build words with shuffle functionality",
      code: `function WordBuilder() {
  const [tiles, setTiles] = useState(['R', 'E', 'A', 'C', 'T']);
  const [selected, setSelected] = useState([]);
  
  const handleTileClick = (letter) => {
    if (!selected.includes(letter)) {
      setSelected(prev => [...prev, letter]);
    }
  };
  
  const shuffleTiles = () => {
    setTiles(prev => [...prev].sort(() => Math.random() - 0.5));
  };
  
  const resetSelection = () => {
    setSelected([]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Word Builder</h2>
      <div>
        {tiles.map((letter, index) => (
          <button 
            key={index}
            style={{
              padding: '15px',
              margin: '5px',
              fontSize: '20px',
              backgroundColor: selected.includes(letter) ? '#4CAF50' : '#f0f0f0',
              color: selected.includes(letter) ? 'white' : 'black',
              border: '2px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={shuffleTiles}>🔀 Shuffle</button>
        <button onClick={resetSelection}>🗑️ Clear</button>
      </div>
      
      <div>
        <h3>Your Word: {selected.join('')}</h3>
        <p>Letters used: {selected.length}</p>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="tile-game-demo">
          <h2>Word Builder</h2>
          <div className="tiles-container">
            {wordBuilderTiles.map((letter, index) => (
              <button 
                key={index}
                className={`tile ${wordBuilderSelected.includes(letter) ? 'selected' : ''}`}
                onClick={() => {
                  if (!wordBuilderSelected.includes(letter)) {
                    setWordBuilderSelected(prev => [...prev, letter]);
                  }
                }}
              >
                {letter}
              </button>
            ))}
          </div>
          
          <div className="game-controls">
            <button onClick={() => setWordBuilderTiles([...wordBuilderTiles].sort(() => Math.random() - 0.5))}>
              🔀 Shuffle
            </button>
            <button onClick={() => setWordBuilderSelected([])}>
              🗑️ Clear
            </button>
          </div>
          
          <div className="word-display">
            <h3>Your Word: {wordBuilderSelected.join('')}</h3>
            <p>Letters used: {wordBuilderSelected.length}</p>
          </div>
        </div>
      )
    },
    {
      title: "Spelling Game",
      description: "Word validation with scoring system and circular tiles",
      code: `function SpellingGame() {
  const [tiles, setTiles] = useState(['C', 'A', 'T', 'D', 'O', 'G']);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  
  const handleTileClick = (letter) => {
    if (!selected.includes(letter)) {
      setSelected(prev => [...prev, letter]);
    }
  };
  
  const checkWord = () => {
    const word = selected.join('');
    const validWords = ['CAT', 'DOG', 'GOT', 'TAG'];
    
    if (validWords.includes(word)) {
      setScore(prev => prev + word.length);
      alert(\`✅ "\${word}" is a valid word! +\${word.length} points\`);
    } else {
      alert(\`❌ "\${word}" is not in our word list\`);
    }
    setSelected([]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Spelling Game 🎯</h2>
      <p>Score: {score} points</p>
      
      <div>
        {tiles.map((letter, index) => (
          <button 
            key={index}
            style={tileStyle(selected.includes(letter))}
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={checkWord}>✅ Check Word</button>
        <button onClick={() => setSelected([])}>🔄 Reset</button>
      </div>
      
      <div style={wordDisplayStyle}>
        <h3>{selected.join('') || 'Select letters to form a word'}</h3>
      </div>
    </div>
  );
}

const tileStyle = (isSelected) => ({
  padding: '15px',
  margin: '5px',
  fontSize: '20px',
  backgroundColor: isSelected ? '#FF6B6B' : '#4ECDC4',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  cursor: 'pointer'
});

const wordDisplayStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2C3E50',
  minHeight: '40px',
  margin: '20px 0'
};`,
      liveDemo: (
        <div className="tile-game-demo">
          <h2>Spelling Game 🎯</h2>
          <p className="score-display">Score: {spellingScore} points</p>
          
          <div className="tiles-container">
            {spellingTiles.map((letter, index) => (
              <button 
                key={index}
                className={`tile spelling-tile ${spellingSelected.includes(letter) ? 'selected' : ''}`}
                onClick={() => {
                  if (!spellingSelected.includes(letter)) {
                    setSpellingSelected(prev => [...prev, letter]);
                  }
                }}
              >
                {letter}
              </button>
            ))}
          </div>
          
          <div className="game-controls">
            <button onClick={() => {
              const word = spellingSelected.join('');
              const validWords = ['CAT', 'DOG', 'GOT', 'TAG'];
              
              if (validWords.includes(word)) {
                setSpellingScore(prev => prev + word.length);
                alert(`✅ "${word}" is a valid word! +${word.length} points`);
              } else {
                alert(`❌ "${word}" is not in our word list`);
              }
              setSpellingSelected([]);
            }}>
              ✅ Check Word
            </button>
            <button onClick={() => setSpellingSelected([])}>
              🔄 Reset
            </button>
          </div>
          
          <div className="word-display spelling-display">
            <h3>{spellingSelected.join('') || 'Select letters to form a word'}</h3>
          </div>
        </div>
      )
    },
    {
      title: "Memory Game",
      description: "Classic memory matching game with flip animation and match detection",
      code: `function MemoryGame() {
  const [tiles, setTiles] = useState(['A', 'B', 'C', 'A', 'B', 'C']);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  
  const handleTileClick = (letter, index) => {
    if (selected.length < 2 && !selected.includes(index)) {
      const newSelected = [...selected, index];
      setSelected(newSelected);
      
      // Check for match after second selection
      if (newSelected.length === 2) {
        const [first, second] = newSelected;
        if (tiles[first] === tiles[second]) {
          setMatched(prev => [...prev, tiles[first]]);
        }
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Memory Game 🧠</h2>
      <p>Matched: {matched.join(', ')}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {tiles.map((letter, index) => (
          <button 
            key={index}
            style={memoryTileStyle(selected.includes(index), matched.includes(letter))}
            onClick={() => handleTileClick(letter, index)}
            disabled={matched.includes(letter)}
          >
            {selected.includes(index) || matched.includes(letter) ? letter : '?'}
          </button>
        ))}
      </div>
    </div>
  );
}

const memoryTileStyle = (isSelected, isMatched) => ({
  padding: '20px',
  margin: '5px',
  fontSize: '18px',
  backgroundColor: isMatched ? '#4CAF50' : isSelected ? '#FFC107' : '#9E9E9E',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  width: '60px',
  height: '60px',
  cursor: 'pointer'
});`,
      liveDemo: (
        <div className="tile-game-demo">
          <h2>Memory Game 🧠</h2>
          <p className="match-display">Matched: {memoryMatched.join(', ')}</p>
          
          <div className="tiles-container memory-container">
            {memoryTiles.map((letter, index) => (
              <button 
                key={index}
                className={`tile memory-tile ${
                  memorySelected.includes(index) ? 'flipped' : 
                  memoryMatched.includes(letter) ? 'matched' : ''
                }`}
                onClick={() => {
                  if (memorySelected.length < 2 && !memorySelected.includes(index)) {
                    const newSelected = [...memorySelected, index];
                    setMemorySelected(newSelected);
                    
                    if (newSelected.length === 2) {
                      const [first, second] = newSelected;
                      if (memoryTiles[first] === memoryTiles[second]) {
                        setMemoryMatched(prev => [...prev, memoryTiles[first]]);
                      }
                      setTimeout(() => setMemorySelected([]), 1000);
                    }
                  }
                }}
                disabled={memoryMatched.includes(letter)}
              >
                {memorySelected.includes(index) || memoryMatched.includes(letter) ? letter : '?'}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Anagram Solver",
      description: "Find all possible words from given letters with real-time validation",
      code: `function AnagramSolver() {
  const [tiles, setTiles] = useState(['S', 'T', 'A', 'R', 'E']);
  const [selected, setSelected] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  
  const validWords = ['STAR', 'RATS', 'ARTS', 'TARS', 'REST', 'ARTS'];
  
  const checkAnagram = () => {
    const word = selected.join('');
    if (validWords.includes(word) && !foundWords.includes(word)) {
      setFoundWords(prev => [...prev, word]);
      alert(\`🎉 Found: \${word}\`);
    }
    setSelected([]);
  };
  
  const resetGame = () => {
    setSelected([]);
    setFoundWords([]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Anagram Solver 🔤</h2>
      <p>Find words using all letters: {tiles.join('')}</p>
      
      <div>
        {tiles.map((letter, index) => (
          <button 
            key={index}
            style={{
              padding: '15px',
              margin: '5px',
              fontSize: '20px',
              backgroundColor: selected.includes(letter) ? '#9C27B0' : '#E1BEE7',
              color: selected.includes(letter) ? 'white' : '#7B1FA2',
              border: '2px solid #7B1FA2',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => {
              if (!selected.includes(letter)) {
                setSelected(prev => [...prev, letter]);
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={checkAnagram}>🔍 Check Word</button>
        <button onClick={resetGame}>🔄 New Game</button>
      </div>
      
      <div>
        <h3>Current: {selected.join('') || 'Select letters'}</h3>
        <div>
          <h4>Found Words:</h4>
          {foundWords.map((word, index) => (
            <span key={index} style={{ 
              display: 'inline-block',
              padding: '5px 10px',
              margin: '2px',
              backgroundColor: '#4CAF50',
              color: 'white',
              borderRadius: '3px'
            }}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="tile-game-demo">
          <h2>Anagram Solver 🔤</h2>
          <p className="anagram-instruction">Find words using all letters: {anagramTiles.join('')}</p>
          
          <div className="tiles-container">
            {anagramTiles.map((letter, index) => (
              <button 
                key={index}
                className={`tile anagram-tile ${anagramSelected.includes(letter) ? 'selected' : ''}`}
                onClick={() => {
                  if (!anagramSelected.includes(letter)) {
                    setAnagramSelected(prev => [...prev, letter]);
                  }
                }}
              >
                {letter}
              </button>
            ))}
          </div>
          
          <div className="game-controls">
            <button onClick={() => {
              const word = anagramSelected.join('');
              const validWords = ['STAR', 'RATS', 'ARTS', 'TARS', 'REST'];
              
              if (validWords.includes(word) && !anagramWords.includes(word)) {
                setAnagramWords(prev => [...prev, word]);
                alert(`🎉 Found: ${word}`);
              }
              setAnagramSelected([]);
            }}>
              🔍 Check Word
            </button>
            <button onClick={() => {
              setAnagramSelected([]);
              setAnagramWords([]);
            }}>
              🔄 New Game
            </button>
          </div>
          
          <div className="word-display">
            <h3>Current: {anagramSelected.join('') || 'Select letters'}</h3>
            <div className="found-words">
              <h4>Found Words:</h4>
              {anagramWords.map((word, index) => (
                <span key={index} className="found-word">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Scrabble Practice",
      description: "Word building with letter values and scoring system",
      code: `function ScrabblePractice() {
  const [tiles, setTiles] = useState(['Q', 'U', 'I', 'Z', 'E', 'S']);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  
  const letterValues = {
    'Q': 10, 'U': 1, 'I': 1, 'Z': 10, 'E': 1, 'S': 1
  };
  
  const calculateScore = (word) => {
    return word.split('').reduce((total, letter) => total + (letterValues[letter] || 0), 0);
  };
  
  const submitWord = () => {
    const word = selected.join('');
    const wordScore = calculateScore(word);
    setScore(prev => prev + wordScore);
    alert(\`🎯 "\${word}" scored \${wordScore} points!\`);
    setSelected([]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Scrabble Practice 🎲</h2>
      <p>Total Score: {score}</p>
      
      <div>
        {tiles.map((letter, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '5px' }}>
            <button 
              style={{
                padding: '15px',
                fontSize: '20px',
                backgroundColor: selected.includes(letter) ? '#795548' : '#D7CCC8',
                color: selected.includes(letter) ? 'white' : '#5D4037',
                border: '2px solid #5D4037',
                borderRadius: '5px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => {
                if (!selected.includes(letter)) {
                  setSelected(prev => [...prev, letter]);
                }
              }}
            >
              {letter}
              <div style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                fontSize: '10px',
                backgroundColor: '#5D4037',
                color: 'white',
                borderRadius: '2px',
                padding: '1px 3px'
              }}>
                {letterValues[letter]}
              </div>
            </button>
          </div>
        ))}
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={submitWord}>📤 Submit Word</button>
        <button onClick={() => setSelected([])}>🗑️ Clear</button>
      </div>
      
      <div>
        <h3>Current Word: {selected.join('')}</h3>
        <p>Word Score: {calculateScore(selected.join(''))}</p>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="tile-game-demo">
          <h2>Scrabble Practice 🎲</h2>
          <p className="score-display">Total Score: {scrabbleScore}</p>
          
          <div className="tiles-container scrabble-container">
            {scrabbleTiles.map((letter, index) => {
              const letterValues = {
                'Q': 10, 'U': 1, 'I': 1, 'Z': 10, 'E': 1, 'S': 1
              };
              
              return (
                <div key={index} className="scrabble-tile-wrapper">
                  <button 
                    className={`tile scrabble-tile ${scrabbleSelected.includes(letter) ? 'selected' : ''}`}
                    onClick={() => {
                      if (!scrabbleSelected.includes(letter)) {
                        setScrabbleSelected(prev => [...prev, letter]);
                      }
                    }}
                  >
                    {letter}
                    <div className="tile-value">
                      {letterValues[letter]}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          
          <div className="game-controls">
            <button onClick={() => {
              const word = scrabbleSelected.join('');
              const letterValues = {
                'Q': 10, 'U': 1, 'I': 1, 'Z': 10, 'E': 1, 'S': 1
              };
              const wordScore = word.split('').reduce((total, letter) => total + (letterValues[letter] || 0), 0);
              
              setScrabbleScore(prev => prev + wordScore);
              alert(`🎯 "${word}" scored ${wordScore} points!`);
              setScrabbleSelected([]);
            }}>
              📤 Submit Word
            </button>
            <button onClick={() => setScrabbleSelected([])}>
              🗑️ Clear
            </button>
          </div>
          
          <div className="word-display">
            <h3>Current Word: {scrabbleSelected.join('')}</h3>
            <p>Word Score: {
              scrabbleSelected.join('').split('').reduce((total, letter) => {
                const letterValues = {'Q': 10, 'U': 1, 'I': 1, 'Z': 10, 'E': 1, 'S': 1};
                return total + (letterValues[letter] || 0);
              }, 0)
            }</p>
          </div>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { type: "Word Builder", tiles: "['R','E','A','C','T']", selection: "Track clicked letters", features: "Shuffle, Clear" },
    { type: "Spelling Game", tiles: "['C','A','T','D','O','G']", selection: "Build words", features: "Validation, Scoring" },
    { type: "Memory Game", tiles: "['A','B','C','A','B','C']", selection: "Track flipped indices", features: "Matching, Timer" },
    { type: "Anagram Solver", tiles: "['S','T','A','R','E']", selection: "Build combinations", features: "Word finding" },
    { type: "Scrabble Practice", tiles: "['Q','U','I','Z','E','S']", selection: "Build words", features: "Letter values, Scoring" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Create a word builder with shuffle functionality",
      solution: "Use Word Builder example",
      tip: "Track selected letters and provide shuffle/clear controls"
    },
    {
      question: "Build a spelling game with word validation", 
      solution: "Use Spelling Game example",
      tip: "Validate against word list and implement scoring"
    },
    {
      question: "Make a memory matching game",
      solution: "Use Memory Game example",
      tip: "Track flipped indices and check for matches"
    },
    {
      question: "Create an anagram solver",
      solution: "Use Anagram Solver example",
      tip: "Find all valid words from given letters"
    }
  ];

  // Letter Tiles Pattern Steps
  const letterTilesPatternSteps = [
    {
      step: "1",
      title: "Define Tile State",
      description: "Create state for tiles and selected letters: const [tiles, setTiles] = useState([]); const [selected, setSelected] = useState([]);"
    },
    {
      step: "2",
      title: "Tile Click Handler",
      description: "Handle tile clicks to add to selection: const handleTileClick = (letter) => { if (!selected.includes(letter)) setSelected(prev => [...prev, letter]); };"
    },
    {
      step: "3", 
      title: "Game Controls",
      description: "Add shuffle, clear, and other control functions"
    },
    {
      step: "4",
      title: "Tile Display",
      description: "Render tiles with conditional styling based on selection state"
    },
    {
      step: "5",
      title: "Game Logic",
      description: "Implement validation, scoring, or matching logic"
    }
  ];

  // Pro Tips
  const proTips = [
    "Always track both tiles and selected state separately",
    "Use index for memory games, letter for word builders",
    "Provide visual feedback for selected/matched tiles",
    "Include shuffle and reset functionality",
    "Consider tile styling for different game types",
    "Add scoring systems for engagement",
    "Use setTimeout for delayed actions in memory games",
    "Validate words against a dictionary or predefined list"
  ];

  // Cheat Sheet
  const cheatSheet = [
    {
      type: "Basic Tile Setup",
      code: `const [tiles, setTiles] = useState(['A','B','C']);
const [selected, setSelected] = useState([]);

const handleTileClick = (letter) => {
  if (!selected.includes(letter)) {
    setSelected(prev => [...prev, letter]);
  }
};`
    },
    {
      type: "Shuffle Tiles",
      code: `const shuffleTiles = () => {
  setTiles(prev => [...prev].sort(() => Math.random() - 0.5));
};`
    },
    {
      type: "Memory Game Logic",
      code: `const handleTileClick = (index) => {
  if (selected.length < 2 && !selected.includes(index)) {
    const newSelected = [...selected, index];
    setSelected(newSelected);
    
    if (newSelected.length === 2) {
      // Check for match
      setTimeout(() => setSelected([]), 1000);
    }
  }
};`
    },
    {
      type: "Word Validation",
      code: `const checkWord = () => {
  const word = selected.join('');
  const isValid = validWords.includes(word);
  if (isValid) {
    // Update score, show success
  }
  setSelected([]);
};`
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < letterTileExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : letterTileExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🎮 ${letterTileExamples.length}+ Games` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Tile Pattern' },
    { id: 'cheatsheet', label: '📋 Cheat Sheet' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="letter-tiles-mastery-container">
      <header className="mastery-header">
        <h1>🎯 Letter Tiles Pattern Mastery Kit</h1>
        <p>Master interactive letter tile games - 5+ ready-to-use examples with one universal pattern!</p>
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
              <h2>Universal Letter Tiles Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY letter tile game - works for all examples!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="try-it">
                <h3>👉 Universal Pattern Works For:</h3>
                <div className="pattern-grid">
                  <div className="pattern-item">✅ Word Builders</div>
                  <div className="pattern-item">✅ Spelling Games</div>
                  <div className="pattern-item">✅ Memory Games</div>
                  <div className="pattern-item">✅ Anagram Solvers</div>
                  <div className="pattern-item">✅ Scrabble Games</div>
                  <div className="pattern-item">✅ And many more!</div>
                </div>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Game {currentExample + 1}: {letterTileExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {letterTileExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{letterTileExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Game:</h4>
                {letterTileExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{letterTileExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Letter Tile Games</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Game Type</div>
                  <div>Tiles</div>
                  <div>Selection</div>
                  <div>Features</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.type}</strong></div>
                    <div>{item.tiles}</div>
                    <div>{item.selection}</div>
                    <div>{item.features}</div>
                  </div>
                ))}
              </div>

              <div className="pattern-summary">
                <h3>🎯 Battle Plan for Any Tile Game:</h3>
                <div className="battle-plan">
                  <div className="plan-step">
                    <h4>Step 1: Choose Game Type</h4>
                    <p>Word Builder → Simple selection</p>
                    <p>Spelling Game → Word validation</p>
                    <p>Memory Game → Pair matching</p>
                  </div>
                  <div className="plan-step">
                    <h4>Step 2: Copy Universal Skeleton</h4>
                    <p>Same state structure for all games</p>
                  </div>
                  <div className="plan-step">
                    <h4>Step 3: Customize Three Things</h4>
                    <p>Initial tiles • Click logic • Game rules</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tile Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Letter Tiles Pattern</h2>
              
              <div className="steps-list">
                {letterTilesPatternSteps.map((step, index) => (
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
                <h3>🎯 Letter Tiles Data Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">User Clicks Tile</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Update Selected</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Re-render Tiles</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Game Logic</div>
                </div>
              </div>
            </section>
          )}

          {/* Cheat Sheet */}
          {activeTab === 'cheatsheet' && (
            <section className="cheatsheet-section">
              <h2>📋 Letter Tiles Pattern Cheat Sheet</h2>
              
              <div className="cheatsheet-grid">
                {cheatSheet.map((item, index) => (
                  <div key={index} className="cheatsheet-item">
                    <h4>{item.type}</h4>
                    <pre><code>{item.code}</code></pre>
                  </div>
                ))}
              </div>

              <div className="usage-examples">
                <h3>🎯 Common Tile Game Use Cases:</h3>
                <div className="usage-grid">
                  <div className="usage-item">
                    <h5>Educational Games</h5>
                    <p>Spelling, vocabulary building</p>
                    <code>Word validation + scoring</code>
                  </div>
                  <div className="usage-item">
                    <h5>Puzzle Games</h5>
                    <p>Anagrams, word searches</p>
                    <code>Letter combinations</code>
                  </div>
                  <div className="usage-item">
                    <h5>Memory Games</h5>
                    <p>Matching, concentration</p>
                    <code>Flip mechanics + timing</code>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Letter Tiles Pattern Mock Interviews</h2>
              
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
                <h3>🎯 Tile Game Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Identify Game Type</h4>
                    <p>What kind of tile interaction is needed?</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Use Universal Pattern</h4>
                    <p>Apply the 5-step tile pattern</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Add Game Mechanics</h4>
                    <p>Scoring, validation, matching</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Polish UX</h4>
                    <p>Visual feedback, controls, animations</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Letter Tiles Pattern Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Tile Game Problem!</h3>
                <p>You now have 5+ letter tile games using one universal pattern! 🚀</p>
                <p>For ANY tile game requirement: Tiles → Selection → Controls → Display → Game Logic</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetterTilesMastery;