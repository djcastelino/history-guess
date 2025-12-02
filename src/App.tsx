import { useState, useEffect } from 'react';
import type { GameState, HistoryPuzzle } from './types';
import { PUZZLES } from './data/puzzles';
import { loadGameState, saveGameState, isNewDay, updateStats, getTodaysPuzzleType, getTodaysPuzzleNumber } from './utils/storage';
import { initGA, trackPageView, trackGameStart, trackGameComplete, trackGuess, trackShare, trackStatsView, trackArchiveView } from './utils/analytics';
import Header from './components/Header';
import ClueDisplay from './components/ClueDisplay';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameOver from './components/GameOver';
import Stats from './components/Stats';
import Archive from './components/Archive';
import TestMode from './components/TestMode';
import './App.css';

const MAX_GUESSES = 6;

function App() {
  const [isTestMode, setIsTestMode] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    targetPuzzle: null,
    guesses: [],
    isComplete: false,
    isWon: false,
    currentStreak: 0,
    maxStreak: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    lastPlayedDate: '',
    puzzleType: 'figure',
  });
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveMode, setArchiveMode] = useState(false);
  const [archivePuzzleNumber, setArchivePuzzleNumber] = useState<number | null>(null);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    trackPageView(window.location.pathname);

    // Check for test mode in URL
    const urlParams = new URLSearchParams(window.location.search);
    const testParam = urlParams.get('test');
    if (testParam === 'true') {
      setIsTestMode(true);
      setLoading(false);
      return;
    }
    
    initGame();
  }, []);

  // Get today's puzzle based on type rotation
  function getTodaysPuzzle(): HistoryPuzzle {
    const puzzleType = getTodaysPuzzleType();
    const puzzleNumber = getTodaysPuzzleNumber();
    
    // Filter puzzles by type
    const puzzlesOfType = PUZZLES.filter(p => p.type === puzzleType);
    
    // Use puzzle number to deterministically select from type
    const index = (puzzleNumber - 1) % puzzlesOfType.length;
    return puzzlesOfType[index];
  }

  function initGame() {
    try {
      const savedState = loadGameState();
      const todayDateOnly = new Date().toISOString().split('T')[0];
      const todaysPuzzleType = getTodaysPuzzleType();

      const shouldStartNewGame = !savedState || 
                                !savedState.targetPuzzle || 
                                !savedState.lastPlayedDate ||
                                isNewDay(savedState.lastPlayedDate);

      if (shouldStartNewGame) {
        const dailyPuzzle = getTodaysPuzzle();
        
        // Track game start
        trackGameStart(dailyPuzzle.name, dailyPuzzle.type);
        
        const newState: GameState = {
          targetPuzzle: dailyPuzzle,
          guesses: [],
          isComplete: false,
          isWon: false,
          currentStreak: savedState?.currentStreak || 0,
          maxStreak: savedState?.maxStreak || 0,
          gamesPlayed: savedState?.gamesPlayed || 0,
          gamesWon: savedState?.gamesWon || 0,
          lastPlayedDate: todayDateOnly,
          puzzleType: todaysPuzzleType,
        };
        
        setGameState(newState);
        saveGameState(newState);
      } else if (savedState.targetPuzzle) {
        setGameState(savedState);
      }

      setLoading(false);
    } catch (error) {
      console.error('Failed to initialize game:', error);
      setLoading(false);
    }
  }

  function getVisibleClueCount(guessCount: number): number {
    if (guessCount === 0) return 1;
    if (guessCount === 1) return 2;
    if (guessCount === 2) return 3;
    if (guessCount === 3) return 4;
    if (guessCount === 4) return 5;
    return 6;
  }

  function handleGuess(guessName: string) {
    if (!gameState.targetPuzzle || gameState.isComplete) return;

    const isCorrect = guessName.toLowerCase() === gameState.targetPuzzle.name.toLowerCase();
    const newGuesses = [...gameState.guesses, guessName];
    const isComplete = isCorrect || newGuesses.length >= MAX_GUESSES;

    // Track the guess
    trackGuess(isCorrect, newGuesses.length);

    const newState: GameState = {
      ...gameState,
      guesses: newGuesses,
      isComplete,
      isWon: isCorrect,
    };

    if (isComplete && !archiveMode) {
      // Track game completion
      trackGameComplete(isCorrect, newGuesses.length, gameState.targetPuzzle.name, gameState.targetPuzzle.type);
      
      updateStats(isCorrect, newGuesses.length, gameState.puzzleType);
      
      const stats = JSON.parse(localStorage.getItem('historyguess-stats') || '{}');
      newState.currentStreak = stats.currentStreak || 0;
      newState.maxStreak = stats.maxStreak || 0;
      newState.gamesPlayed = stats.gamesPlayed || 0;
      newState.gamesWon = stats.gamesWon || 0;
    }

    // Save archive puzzle completion
    if (isComplete && archiveMode && archivePuzzleNumber) {
      const archiveData = JSON.parse(localStorage.getItem('historyguess-archive') || '{}');
      archiveData[archivePuzzleNumber] = {
        solved: isCorrect,
        guesses: newGuesses.length
      };
      localStorage.setItem('historyguess-archive', JSON.stringify(archiveData));
    }

    setGameState(newState);
    if (!archiveMode) {
      saveGameState(newState);
    }
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading History Guess...</p>
      </div>
    );
  }

  // Test Mode
  if (isTestMode) {
    return (
      <TestMode 
        onSelectPuzzle={(puzzle: HistoryPuzzle) => {
          setIsTestMode(false);
          setGameState({
            targetPuzzle: puzzle,
            guesses: [],
            isComplete: false,
            isWon: false,
            currentStreak: 0,
            maxStreak: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            lastPlayedDate: new Date().toISOString().split('T')[0],
            puzzleType: puzzle.type,
          });
        }}
      />
    );
  }

  if (!gameState.targetPuzzle) {
    return (
      <div className="error-screen">
        <p>Failed to load game. Please refresh the page.</p>
      </div>
    );
  }

  // Clue visibility logic
  const visibleClues = gameState.isComplete && gameState.isWon
    ? getVisibleClueCount(gameState.guesses.length - 1)
    : gameState.isComplete && !gameState.isWon
    ? 6
    : getVisibleClueCount(gameState.guesses.length);

  return (
    <div className="app">
      <Header puzzleType={gameState.puzzleType} />

      <main className="main-content">
        <ClueDisplay 
          puzzle={gameState.targetPuzzle} 
          visibleClueCount={visibleClues}
          puzzleType={gameState.puzzleType}
        />

        {!gameState.isComplete && (
          <GuessInput
            onGuess={handleGuess}
            disabled={gameState.isComplete}
          />
        )}

        <GuessList 
          guesses={gameState.guesses} 
          maxGuesses={MAX_GUESSES}
          isComplete={gameState.isComplete}
          isWon={gameState.isWon}
        />

        {gameState.isComplete && !archiveMode && (
          <GameOver
            isWon={gameState.isWon}
            puzzle={gameState.targetPuzzle}
            guessCount={gameState.guesses.length}
            puzzleNumber={getTodaysPuzzleNumber()}
            guesses={gameState.guesses}
            puzzleType={gameState.puzzleType}
            onStatsClick={() => {
              trackStatsView();
              setShowStats(true);
            }}
            onArchiveClick={() => {
              trackArchiveView();
              setShowArchive(true);
            }}
            onShare={() => trackShare()}
          />
        )}

        {gameState.isComplete && archiveMode && (
          <div className="archive-game-complete">
            <p>✅ Archive puzzle complete! (Doesn't affect streak)</p>
            <button onClick={() => {
              setArchiveMode(false);
              setArchivePuzzleNumber(null);
              initGame();
            }} className="back-to-today">
              ← Back to Today's Puzzle
            </button>
            <button onClick={() => setShowArchive(true)} className="browse-archive">
              📚 Browse More Puzzles
            </button>
          </div>
        )}
      </main>

      <Stats 
        isOpen={showStats}
        onClose={() => setShowStats(false)}
      />

      <Archive
        isOpen={showArchive}
        onClose={() => setShowArchive(false)}
        onSelectPuzzle={(puzzle, puzzleNumber) => {
          setShowArchive(false);
          setArchiveMode(true);
          setArchivePuzzleNumber(puzzleNumber);
          setGameState({
            ...gameState,
            targetPuzzle: puzzle,
            guesses: [],
            isComplete: false,
            isWon: false,
          });
        }}
      />
    </div>
  );
}

export default App;

