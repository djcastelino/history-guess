import { useState } from 'react';
import { PUZZLES } from '../data/puzzles';
import type { HistoryPuzzle, PuzzleType } from '../data/puzzles';
import './TestMode.css';

interface TestModeProps {
  onSelectPuzzle: (puzzle: HistoryPuzzle) => void;
}

export default function TestMode({ onSelectPuzzle }: TestModeProps) {
  const [selectedType, setSelectedType] = useState<'all' | PuzzleType>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  const filteredPuzzles = PUZZLES.filter(puzzle => {
    const typeMatch = selectedType === 'all' || puzzle.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || puzzle.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const counts = {
    total: PUZZLES.length,
    figures: PUZZLES.filter(p => p.type === 'figure').length,
    events: PUZZLES.filter(p => p.type === 'event').length,
    inventions: PUZZLES.filter(p => p.type === 'invention').length,
    easy: PUZZLES.filter(p => p.difficulty === 'easy').length,
    medium: PUZZLES.filter(p => p.difficulty === 'medium').length,
    hard: PUZZLES.filter(p => p.difficulty === 'hard').length,
  };

  const getTypeIcon = (type: PuzzleType) => {
    switch (type) {
      case 'figure': return '👤';
      case 'event': return '📅';
      case 'invention': return '💡';
    }
  };

  const getTypeLabel = (type: PuzzleType) => {
    switch (type) {
      case 'figure': return 'Historical Figure';
      case 'event': return 'Historical Event';
      case 'invention': return 'Invention/Discovery';
    }
  };

  return (
    <div className="test-mode">
      <div className="test-mode-header">
        <h1>🧪 Test Mode - History Guess</h1>
        <p className="test-mode-subtitle">
          Review all {PUZZLES.length} puzzles • Validate clues, answers, and facts
        </p>
      </div>

      <div className="test-mode-stats">
        <div className="stat-card">
          <div className="stat-number">{counts.total}</div>
          <div className="stat-label">Total Puzzles</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.figures}</div>
          <div className="stat-label">👤 Figures</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.events}</div>
          <div className="stat-label">📅 Events</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.inventions}</div>
          <div className="stat-label">💡 Inventions</div>
        </div>
      </div>

      <div className="test-mode-filters">
        <div className="filter-group">
          <h3>Type:</h3>
          <button 
            className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedType('all')}
          >
            All ({counts.total})
          </button>
          <button 
            className={`filter-btn ${selectedType === 'figure' ? 'active' : ''}`}
            onClick={() => setSelectedType('figure')}
          >
            👤 Figures ({counts.figures})
          </button>
          <button 
            className={`filter-btn ${selectedType === 'event' ? 'active' : ''}`}
            onClick={() => setSelectedType('event')}
          >
            📅 Events ({counts.events})
          </button>
          <button 
            className={`filter-btn ${selectedType === 'invention' ? 'active' : ''}`}
            onClick={() => setSelectedType('invention')}
          >
            💡 Inventions ({counts.inventions})
          </button>
        </div>

        <div className="filter-group">
          <h3>Difficulty:</h3>
          <button 
            className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${selectedDifficulty === 'easy' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('easy')}
          >
            Easy ({counts.easy})
          </button>
          <button 
            className={`filter-btn ${selectedDifficulty === 'medium' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('medium')}
          >
            Medium ({counts.medium})
          </button>
          <button 
            className={`filter-btn ${selectedDifficulty === 'hard' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('hard')}
          >
            Hard ({counts.hard})
          </button>
        </div>
      </div>

      <div className="test-mode-grid">
        {filteredPuzzles.map((puzzle) => (
          <div 
            key={puzzle.id} 
            className={`test-puzzle-card difficulty-${puzzle.difficulty} type-${puzzle.type}`}
            onClick={() => onSelectPuzzle(puzzle)}
          >
            <div className="test-puzzle-header">
              <span className="test-puzzle-id">#{puzzle.id}</span>
              <div className="test-puzzle-badges">
                <span className={`test-puzzle-type ${puzzle.type}`}>
                  {getTypeIcon(puzzle.type)}
                </span>
                <span className={`test-puzzle-difficulty ${puzzle.difficulty}`}>
                  {puzzle.difficulty.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="test-puzzle-type-label">{getTypeLabel(puzzle.type)}</div>
            <h3 className="test-puzzle-name">{puzzle.name}</h3>
            {puzzle.year && <p className="test-puzzle-year">📅 {puzzle.year}</p>}
            {puzzle.location && <p className="test-puzzle-location">📍 {puzzle.location}</p>}
            {puzzle.category && <p className="test-puzzle-category">🏷️ {puzzle.category}</p>}
            <button className="test-play-btn">
              Test This Puzzle →
            </button>
          </div>
        ))}
      </div>

      <div className="test-mode-footer">
        <p>💡 Click any puzzle to test its clues, answer, and "Did You Know" fact</p>
        <p>🔍 Check for: clue progression, answer accuracy, fact quality, source links</p>
      </div>
    </div>
  );
}

