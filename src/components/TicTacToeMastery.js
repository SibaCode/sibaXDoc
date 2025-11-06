// src/components/TicTacToeMastery.js
import React, { useState } from 'react';
import './TicTacToeMastery.css';

const TicTacToeMastery = ({ initialTab = 'skeleton' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentExample, setCurrentExample] = useState(0);

  // Demo states for live examples
  const [basicSquares, setBasicSquares] = useState(Array(9).fill(null));
  const [basicIsXNext, setBasicIsXNext] = useState(true);

  const [enhancedSquares, setEnhancedSquares] = useState(Array(9).fill(null));
  const [enhancedIsXNext, setEnhancedIsXNext] = useState(true);
  const [enhancedWinner, setEnhancedWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const [animatedSquares, setAnimatedSquares] = useState(Array(9).fill(null));
  const [animatedIsXNext, setAnimatedIsXNext] = useState(true);
  const [animatedWinner, setAnimatedWinner] = useState(null);
  const [animations, setAnimations] = useState(Array(9).fill(false));

  // Win condition helper function
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          player: squares[a],
          line: [a, b, c]
        };
      }
    }
    
    if (squares.every(square => square !== null)) {
      return { player: 'Draw' };
    }
    
    return null;
  };

  // Universal Tic Tac Toe Skeleton
  const universalSkeleton = `import React, { useState } from 'react';

function TicTacToeSkeleton() {
  // 🎯 CORE GAME STATE
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);

  // 🎯 COMPUTED VALUES
  const currentPlayer = isXNext ? 'X' : 'O';
  const gameStatus = calculateGameStatus(winner, squares, currentPlayer);

  // 🎯 GAME ACTIONS
  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    
    setSquares(newSquares);
    setIsXNext(!isXNext);
    setHistory(prev => [...prev, squares]);
    
    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) setWinner(gameWinner);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setHistory([]);
  };

  const undoMove = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setSquares(previousState);
    setIsXNext(!isXNext);
    setWinner(null);
    setHistory(prev => prev.slice(0, -1));
  };

  return (
    <div className="tic-tac-toe">
      {/* 🎯 GAME INFO */}
      <div className="game-info">
        <h1>⭕ Tic Tac Toe ❌</h1>
        <div className="status">{gameStatus}</div>
      </div>

      {/* 🎯 GAME BOARD */}
      <div className="board">
        {squares.map((square, index) => (
          <button
            key={index}
            className={\`square \${square ? 'filled' : ''}\`}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      {/* 🎯 GAME CONTROLS */}
      <div className="controls">
        <button onClick={resetGame}>New Game</button>
        <button onClick={undoMove} disabled={history.length === 0}>
          Undo
        </button>
      </div>
    </div>
  );
}

// 🎯 WIN LOGIC HELPER
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        line: [a, b, c]
      };
    }
  }
  
  if (squares.every(square => square !== null)) {
    return { player: 'Draw' };
  }
  
  return null;
}

// 🎯 GAME STATUS HELPER
function calculateGameStatus(winner, squares, currentPlayer) {
  if (winner) {
    return winner.player === 'Draw' 
      ? "Game ended in a draw! 🤝" 
      : \`Player \${winner.player} wins! 🎉\`;
  }
  return \`Next player: \${currentPlayer}\`;
}

export default TicTacToeSkeleton;`;

  // Tic Tac Toe Examples
  const ticTacToeExamples = [
    {
      title: "Basic Tic Tac Toe",
      description: "Minimal implementation with core game logic",
      code: `function BasicTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner 
    ? \`Winner: \${winner}\` 
    : \`Next player: \${isXNext ? 'X' : 'O'}\`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    
    const newSquares = [...squares];
    newSquares[i] = isXNext ? 'X' : 'O';
    
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tic Tac Toe</h1>
      <div style={{ fontSize: '20px', margin: '20px' }}>{status}</div>
      
      <div style={boardStyle}>
        {squares.map((square, i) => (
          <button
            key={i}
            style={squareStyle}
            onClick={() => handleClick(i)}
          >
            {square}
          </button>
        ))}
      </div>
      
      <button onClick={resetGame} style={resetButtonStyle}>
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 100px)',
  gridTemplateRows: 'repeat(3, 100px)',
  gap: '5px',
  justifyContent: 'center',
  margin: '20px auto'
};

const squareStyle = {
  width: '100px',
  height: '100px',
  fontSize: '36px',
  fontWeight: 'bold',
  border: '2px solid #333',
  background: '#fff',
  cursor: 'pointer'
};

const resetButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};`,
      liveDemo: (
        <div className="tic-tac-toe-demo basic-demo">
          <h1>Tic Tac Toe</h1>
          <div className="basic-status">
            {calculateWinner(basicSquares) 
              ? `Winner: ${calculateWinner(basicSquares)?.player}` 
              : `Next player: ${basicIsXNext ? 'X' : 'O'}`}
          </div>
          
          <div className="basic-board">
            {basicSquares.map((square, i) => (
              <button
                key={i}
                className="basic-square"
                onClick={() => {
                  if (basicSquares[i] || calculateWinner(basicSquares)) return;
                  
                  const newSquares = [...basicSquares];
                  newSquares[i] = basicIsXNext ? 'X' : 'O';
                  
                  setBasicSquares(newSquares);
                  setBasicIsXNext(!basicIsXNext);
                }}
              >
                {square}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => {
              setBasicSquares(Array(9).fill(null));
              setBasicIsXNext(true);
            }}
            className="basic-reset"
          >
            Reset Game
          </button>
        </div>
      )
    },
    {
      title: "Enhanced Tic Tac Toe",
      description: "Professional version with scoring and winning highlights",
      code: `function EnhancedTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const currentPlayer = isXNext ? 'X' : 'O';

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner.player !== 'Draw') {
        setScores(prev => ({ ...prev, [gameWinner.player]: prev[gameWinner.player] + 1 }));
      } else {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  const newMatch = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  const getStatus = () => {
    if (winner) {
      return winner.player === 'Draw' 
        ? "It's a draw! 🤝" 
        : \`Player \${winner.player} wins! 🎉\`;
    }
    return \`Player \${currentPlayer}'s turn\`;
  };

  return (
    <div style={enhancedStyles.container}>
      {/* Header */}
      <header style={enhancedStyles.header}>
        <h1>🎮 Tic Tac Toe</h1>
        <div style={enhancedStyles.scores}>
          <div>❌: {scores.X}</div>
          <div>🤝: {scores.draws}</div>
          <div>⭕: {scores.O}</div>
        </div>
      </header>

      {/* Game Status */}
      <div style={enhancedStyles.status}>{getStatus()}</div>

      {/* Game Board */}
      <div style={enhancedStyles.board}>
        {squares.map((square, index) => (
          <button
            key={index}
            style={{
              ...enhancedStyles.square,
              ...(winner?.line?.includes(index) ? enhancedStyles.winningSquare : {}),
              ...(square === 'X' ? enhancedStyles.xStyle : {}),
              ...(square === 'O' ? enhancedStyles.oStyle : {})
            }}
            onClick={() => handleClick(index)}
            disabled={!!winner}
          >
            {square}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div style={enhancedStyles.controls}>
        <button onClick={resetGame} style={enhancedStyles.button}>
          🔄 New Round
        </button>
        <button onClick={newMatch} style={enhancedStyles.button}>
          🆕 New Match
        </button>
      </div>
    </div>
  );
}`,
      liveDemo: (
        <div className="tic-tac-toe-demo enhanced-demo">
          {/* Header */}
          <header className="enhanced-header">
            <h1>🎮 Tic Tac Toe</h1>
            <div className="enhanced-scores">
              <div>❌: {scores.X}</div>
              <div>🤝: {scores.draws}</div>
              <div>⭕: {scores.O}</div>
            </div>
          </header>

          {/* Game Status */}
          <div className="enhanced-status">
            {enhancedWinner 
              ? (enhancedWinner.player === 'Draw' 
                  ? "It's a draw! 🤝" 
                  : `Player ${enhancedWinner.player} wins! 🎉`)
              : `Player ${enhancedIsXNext ? 'X' : 'O'}'s turn`}
          </div>

          {/* Game Board */}
          <div className="enhanced-board">
            {enhancedSquares.map((square, index) => (
              <button
                key={index}
                className={`
                  enhanced-square 
                  ${square === 'X' ? 'x-style' : ''}
                  ${square === 'O' ? 'o-style' : ''}
                  ${enhancedWinner?.line?.includes(index) ? 'winning-square' : ''}
                `}
                onClick={() => {
                  if (enhancedSquares[index] || enhancedWinner) return;

                  const newSquares = [...enhancedSquares];
                  newSquares[index] = enhancedIsXNext ? 'X' : 'O';
                  
                  setEnhancedSquares(newSquares);
                  setEnhancedIsXNext(!enhancedIsXNext);

                  const gameWinner = calculateWinner(newSquares);
                  if (gameWinner) {
                    setEnhancedWinner(gameWinner);
                    if (gameWinner.player !== 'Draw') {
                      setScores(prev => ({ ...prev, [gameWinner.player]: prev[gameWinner.player] + 1 }));
                    } else {
                      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
                    }
                  }
                }}
                disabled={!!enhancedWinner}
              >
                {square}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="enhanced-controls">
            <button 
              onClick={() => {
                setEnhancedSquares(Array(9).fill(null));
                setEnhancedWinner(null);
              }}
              className="enhanced-button"
            >
              🔄 New Round
            </button>
            <button 
              onClick={() => {
                setEnhancedSquares(Array(9).fill(null));
                setEnhancedWinner(null);
                setEnhancedIsXNext(true);
              }}
              className="enhanced-button"
            >
              🆕 New Match
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Animated Tic Tac Toe",
      description: "Visually engaging version with animations and emojis",
      code: `function AnimatedTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [animations, setAnimations] = useState(Array(9).fill(false));

  const handleClick = async (index) => {
    if (squares[index] || winner) return;

    // Trigger animation
    setAnimations(prev => {
      const newAnimations = [...prev];
      newAnimations[index] = true;
      return newAnimations;
    });

    // Small delay for animation
    await new Promise(resolve => setTimeout(resolve, 100));

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) setWinner(gameWinner);

    // Reset animation
    setAnimations(prev => {
      const newAnimations = [...prev];
      newAnimations[index] = false;
      return newAnimations;
    });
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setAnimations(Array(9).fill(false));
  };

  const getStatus = () => {
    if (winner) {
      return winner.player === 'Draw' 
        ? "Game ended in a draw! 🤝" 
        : \`Player \${winner.player} wins! 🎉\`;
    }
    return \`Next player: \${isXNext ? '❌' : '⭕'}\`;
  };

  return (
    <div style={animatedStyles.container}>
      <h1 style={animatedStyles.title}>✨ Tic Tac Toe ✨</h1>
      
      <div style={animatedStyles.status}>{getStatus()}</div>

      <div style={animatedStyles.board}>
        {squares.map((square, index) => (
          <button
            key={index}
            style={{
              ...animatedStyles.square,
              ...(animations[index] ? animatedStyles.pop : {}),
              ...(square === 'X' ? animatedStyles.x : {}),
              ...(square === 'O' ? animatedStyles.o : {}),
              ...(winner?.line?.includes(index) ? animatedStyles.winner : {})
            }}
            onClick={() => handleClick(index)}
          >
            {square === 'X' ? '❌' : square === 'O' ? '⭕' : ''}
          </button>
        ))}
      </div>

      <button onClick={resetGame} style={animatedStyles.resetButton}>
        🎮 New Game
      </button>
    </div>
  );
}`,
      liveDemo: (
        <div className="tic-tac-toe-demo animated-demo">
          <h1 className="animated-title">✨ Tic Tac Toe ✨</h1>
          
          <div className="animated-status">
            {animatedWinner 
              ? (animatedWinner.player === 'Draw' 
                  ? "Game ended in a draw! 🤝" 
                  : `Player ${animatedWinner.player} wins! 🎉`)
              : `Next player: ${animatedIsXNext ? '❌' : '⭕'}`}
          </div>

          <div className="animated-board">
            {animatedSquares.map((square, index) => (
              <button
                key={index}
                className={`
                  animated-square 
                  ${animations[index] ? 'pop' : ''}
                  ${square === 'X' ? 'x' : ''}
                  ${square === 'O' ? 'o' : ''}
                  ${animatedWinner?.line?.includes(index) ? 'winner' : ''}
                `}
                onClick={async () => {
                  if (animatedSquares[index] || animatedWinner) return;

                  // Trigger animation
                  setAnimations(prev => {
                    const newAnimations = [...prev];
                    newAnimations[index] = true;
                    return newAnimations;
                  });

                  // Small delay for animation
                  await new Promise(resolve => setTimeout(resolve, 100));

                  const newSquares = [...animatedSquares];
                  newSquares[index] = animatedIsXNext ? 'X' : 'O';
                  
                  setAnimatedSquares(newSquares);
                  setAnimatedIsXNext(!animatedIsXNext);

                  const gameWinner = calculateWinner(newSquares);
                  if (gameWinner) setAnimatedWinner(gameWinner);

                  // Reset animation
                  setAnimations(prev => {
                    const newAnimations = [...prev];
                    newAnimations[index] = false;
                    return newAnimations;
                  });
                }}
              >
                {square === 'X' ? '❌' : square === 'O' ? '⭕' : ''}
              </button>
            ))}
          </div>

          <button 
            onClick={() => {
              setAnimatedSquares(Array(9).fill(null));
              setAnimatedWinner(null);
              setAnimatedIsXNext(true);
              setAnimations(Array(9).fill(false));
            }}
            className="animated-reset"
          >
            🎮 New Game
          </button>
        </div>
      )
    }
  ];

  // Quick Reference
  const quickReference = [
    { element: "Board State", state: "squares", purpose: "Tracks X/O positions" },
    { element: "Current Player", state: "isXNext", purpose: "Determines whose turn it is" },
    { element: "Winner", state: "winner", purpose: "Tracks game outcome" },
    { element: "Game History", state: "history", purpose: "Enables undo functionality" },
    { element: "Scores", state: "scores", purpose: "Tracks wins/draws across games" },
    { element: "Animations", state: "animations", purpose: "Manages visual effects" }
  ];

  // Mock Interviews
  const mockInterviews = [
    {
      question: "Implement a basic Tic Tac Toe game with win detection",
      solution: "Use Basic Tic Tac Toe example",
      tip: "Start with 3x3 board state and win condition logic"
    },
    {
      question: "Add score tracking and winning move highlights", 
      solution: "Use Enhanced Tic Tac Toe example",
      tip: "Track scores in state and highlight winning line"
    },
    {
      question: "Create an animated version with visual feedback",
      solution: "Use Animated Tic Tac Toe example",
      tip: "Use animation state and CSS transitions"
    },
    {
      question: "Implement undo functionality for moves",
      solution: "Maintain game history in state",
      tip: "Store previous board states and allow reverting"
    }
  ];

  // Tic Tac Toe Pattern Steps
  const ticTacToePatternSteps = [
    {
      step: "1",
      title: "Board State Setup",
      description: "Define 3x3 grid state and current player"
    },
    {
      step: "2", 
      title: "Click Handling",
      description: "Handle square clicks with move validation"
    },
    {
      step: "3",
      title: "Win Condition Logic",
      description: "Check for winning patterns after each move"
    },
    {
      step: "4",
      title: "Game Status",
      description: "Display current player and game outcome"
    },
    {
      step: "5",
      title: "Game Controls",
      description: "Add reset, undo, and other controls"
    }
  ];

  // Pro Tips
  const proTips = [
    "Win Condition Logic - Use predefined winning line patterns for efficient checking",
    "Immutable Updates - Always create new arrays for board state updates",
    "Game State Management - Consider grouping related state in single object",
    "Prevent Invalid Moves - Check if square is empty and game isn't over",
    "Computed Values - Calculate winner and status from current state",
    "Visual Feedback - Highlight winning moves and provide player feedback",
    "Animation Timing - Use async/await for sequenced animations",
    "Accessibility - Add ARIA labels and keyboard navigation"
  ];

  // Enhancement Ideas
  const enhancementIdeas = [
    {
      title: "AI Opponent",
      code: `const makeAIMove = (squares) => {
  const emptySquares = squares.map((sq, idx) => sq === null ? idx : null)
    .filter(val => val !== null);
  const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  return randomIndex;
};`,
      description: "Add simple AI for single-player mode"
    },
    {
      title: "Game History", 
      code: `const [moves, setMoves] = useState([]);
const jumpToMove = (moveIndex) => {
  // Restore game state to specific move
};`,
      description: "Track all moves and allow time travel"
    },
    {
      title: "Sound Effects",
      code: `const playSound = (type) => {
  const audio = new Audio(\`/sounds/\${type}.mp3\`);
  audio.play();
};`,
      description: "Add audio feedback for moves and wins"
    },
    {
      title: "Board Size Options",
      code: `const [boardSize, setBoardSize] = useState(3);
const squares = Array(boardSize * boardSize).fill(null);`,
      description: "Support different board sizes (3x3, 4x4, etc.)"
    }
  ];

  // Navigation
  const nextExample = () => {
    setCurrentExample(prev => prev < ticTacToeExamples.length - 1 ? prev + 1 : 0);
  };

  const prevExample = () => {
    setCurrentExample(prev => prev > 0 ? prev - 1 : ticTacToeExamples.length - 1);
  };

  // Tabs
  const tabs = [
    { id: 'skeleton', label: '🏗️ Universal Skeleton' },
    { id: 'examples', label: `🎮 ${ticTacToeExamples.length}+ Games` },
    { id: 'reference', label: '🎯 Quick Reference' },
    { id: 'pattern', label: '⚡ Game Pattern' },
    { id: 'enhancements', label: '🚀 Enhancements' },
    { id: 'interviews', label: '💼 Mock Interviews' },
    { id: 'tips', label: '💡 Pro Tips' }
  ];

  return (
    <div className="tic-tac-toe-mastery-container">
      <header className="mastery-header">
        <h1>🎯 Tic Tac Toe Pattern Mastery Kit</h1>
        <p>Master game development with React - 3+ ready-to-use Tic Tac Toe implementations!</p>
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
              <h2>Universal Tic Tac Toe Skeleton</h2>
              <p className="section-description">
                Copy this skeleton for ANY Tic Tac Toe game - works for all variations!
              </p>
              
              <div className="code-block">
                <pre><code>{universalSkeleton}</code></pre>
              </div>

              <div className="battle-plan">
                <h3>⚡ 30-Minute Build Plan:</h3>
                <div className="time-grid">
                  <div className="time-slot">
                    <h4>Minutes 1-5</h4>
                    <p>Basic board state & rendering</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 6-10</h4>
                    <p>Click handling & player turns</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 11-15</h4>
                    <p>Win condition logic</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 16-20</h4>
                    <p>Game status & reset</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 21-25</h4>
                    <p>Score tracking & enhancements</p>
                  </div>
                  <div className="time-slot">
                    <h4>Minutes 26-30</h4>
                    <p>Styling & animations</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Examples */}
          {activeTab === 'examples' && (
            <section className="examples-section">
              <div className="example-header">
                <h3>Game {currentExample + 1}: {ticTacToeExamples[currentExample].title}</h3>
                <div className="example-navigation">
                  <button onClick={prevExample} className="btn btn-secondary">
                    ← Previous
                  </button>
                  <span>{currentExample + 1} / {ticTacToeExamples.length}</span>
                  <button onClick={nextExample} className="btn btn-secondary">
                    Next →
                  </button>
                </div>
              </div>
              
              <p>{ticTacToeExamples[currentExample].description}</p>

              <div className="example-demo">
                <h4>Live Game:</h4>
                {ticTacToeExamples[currentExample].liveDemo}
              </div>
              
              <div className="code-block">
                <h4>Code:</h4>
                <pre><code>{ticTacToeExamples[currentExample].code}</code></pre>
              </div>
            </section>
          )}

          {/* Quick Reference */}
          {activeTab === 'reference' && (
            <section className="reference-section">
              <h2>Quick Reference Guide - Tic Tac Toe Patterns</h2>
              
              <div className="reference-table">
                <div className="table-header">
                  <div>Game Element</div>
                  <div>State Variable</div>
                  <div>Purpose</div>
                </div>
                {quickReference.map((item, index) => (
                  <div key={index} className="table-row">
                    <div><strong>{item.element}</strong></div>
                    <div>{item.state}</div>
                    <div>{item.purpose}</div>
                  </div>
                ))}
              </div>

              <div className="win-logic">
                <h3>🎯 Win Condition Logic:</h3>
                <div className="code-block">
                  <pre><code>{`// ✅ Efficient win checking
const lines = [
  [0,1,2], [3,4,5], [6,7,8], // Rows
  [0,3,6], [1,4,7], [2,5,8], // Columns  
  [0,4,8], [2,4,6]           // Diagonals
];

for (let [a, b, c] of lines) {
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
  }
}`}</code></pre>
                </div>
              </div>
            </section>
          )}

          {/* Game Pattern */}
          {activeTab === 'pattern' && (
            <section className="pattern-section">
              <h2>⚡ Universal Tic Tac Toe Pattern</h2>
              
              <div className="steps-list">
                {ticTacToePatternSteps.map((step, index) => (
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
                <h3>🎯 Tic Tac Toe Game Flow:</h3>
                <div className="flow-diagram">
                  <div className="flow-step">Player Click</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Validate Move</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Update Board</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Check Win</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Update Status</div>
                </div>
              </div>
            </section>
          )}

          {/* Enhancements */}
          {activeTab === 'enhancements' && (
            <section className="enhancements-section">
              <h2>🚀 Tic Tac Toe Enhancement Ideas</h2>
              
              <div className="enhancements-grid">
                {enhancementIdeas.map((enhancement, index) => (
                  <div key={index} className="enhancement-card">
                    <h4>{enhancement.title}</h4>
                    <pre><code>{enhancement.code}</code></pre>
                    <p>{enhancement.description}</p>
                  </div>
                ))}
              </div>

              <div className="state-patterns">
                <h3>🎯 State Management Patterns:</h3>
                <div className="pattern-examples">
                  <div className="pattern-example">
                    <h4>✅ Immutable Updates:</h4>
                    <pre><code>{`// ✅ GOOD: Create new array
const newSquares = [...squares];
newSquares[index] = currentPlayer;

// ❌ AVOID: Mutating original array
squares[index] = currentPlayer; // WRONG!`}</code></pre>
                  </div>
                  <div className="pattern-example">
                    <h4>✅ Grouped State:</h4>
                    <pre><code>{`// Keep related state together
const [gameState, setGameState] = useState({
  squares: Array(9).fill(null),
  isXNext: true,
  winner: null,
  history: []
});`}</code></pre>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Mock Interviews */}
          {activeTab === 'interviews' && (
            <section className="interviews-section">
              <h2>💼 Tic Tac Toe Mock Interviews</h2>
              
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
                <h3>🎯 Tic Tac Toe Interview Strategy:</h3>
                <div className="strategy-steps">
                  <div className="strategy-step">
                    <h4>1. Start with Core Logic</h4>
                    <p>Basic board and win conditions first</p>
                  </div>
                  <div className="strategy-step">
                    <h4>2. Add Game State</h4>
                    <p>Player turns, status, and validation</p>
                  </div>
                  <div className="strategy-step">
                    <h4>3. Enhance Features</h4>
                    <p>Scoring, animations, AI opponent</p>
                  </div>
                  <div className="strategy-step">
                    <h4>4. Polish UX</h4>
                    <p>Visual feedback, accessibility, edge cases</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pro Tips */}
          {activeTab === 'tips' && (
            <section className="tips-section">
              <h2>💡 Tic Tac Toe Pro Tips</h2>
              
              <div className="tips-grid">
                {proTips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>

              <div className="success-message">
                <h3>🎉 You're Ready for Any Tic Tac Toe Problem!</h3>
                <p>You now have 3+ Tic Tac Toe games using one universal pattern! 🚀</p>
                <p>For ANY game development requirement: Board → Moves → Win Logic → Status → Enhance</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicTacToeMastery;