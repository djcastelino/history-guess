import { useState, useEffect } from 'react';
import type { GameState, HistoryPuzzle } from './types';
import { PUZZLES } from './data/puzzles';
import { loadGameState, saveGameState, isNewDay, updateStats, getTodaysPuzzleType, getTodaysPuzzleNumber } from './utils/storage';
import Header from './components/Header';
import ClueDisplay from './components/ClueDisplay';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameOver from './components/GameOver';
import Stats from './components/Stats';
import './App.css';

const MAX_GUESSES = 6;

function App() {
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

  useEffect(() => {
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

    const newState: GameState = {
      ...gameState,
      guesses: newGuesses,
      isComplete,
      isWon: isCorrect,
    };

    if (isComplete) {
      updateStats(isCorrect, newGuesses.length, gameState.puzzleType);
      
      const stats = JSON.parse(localStorage.getItem('historyguess-stats') || '{}');
      newState.currentStreak = stats.currentStreak || 0;
      newState.maxStreak = stats.maxStreak || 0;
      newState.gamesPlayed = stats.gamesPlayed || 0;
      newState.gamesWon = stats.gamesWon || 0;
    }

    setGameState(newState);
    saveGameState(newState);
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading History Guess...</p>
      </div>
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

        {gameState.isComplete && (
          <GameOver
            isWon={gameState.isWon}
            puzzle={gameState.targetPuzzle}
            guessCount={gameState.guesses.length}
            puzzleNumber={getTodaysPuzzleNumber()}
            guesses={gameState.guesses}
            puzzleType={gameState.puzzleType}
            onStatsClick={() => setShowStats(true)}
          />
        )}
      </main>

      <Stats 
        isOpen={showStats}
        onClose={() => setShowStats(false)}
      />
    </div>
  );
}

export default App;

