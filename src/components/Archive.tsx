import { PUZZLES } from '../data/puzzles';
import type { HistoryPuzzle } from '../types';
import './Archive.css';

interface ArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPuzzle: (puzzle: HistoryPuzzle, puzzleNumber: number) => void;
}

export default function Archive({ isOpen, onClose, onSelectPuzzle }: ArchiveProps) {
  if (!isOpen) return null;

  // Get completed puzzles from localStorage
  const getCompletedPuzzles = (): Record<number, { solved: boolean; guesses: number }> => {
    const saved = localStorage.getItem('historyguess-archive');
    return saved ? JSON.parse(saved) : {};
  };

  const completedPuzzles = getCompletedPuzzles();

  // Get yesterday's puzzle
  const getYesterdaysPuzzle = () => {
    // Calculate yesterday's puzzle
    const epoch = new Date('2024-12-01');
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const daysSinceEpoch = Math.floor(
      (yesterday.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    const yesterdayPuzzleNumber = daysSinceEpoch + 1;
    const cycleDay = daysSinceEpoch % 3;
    
    let puzzleType: 'figure' | 'event' | 'invention';
    switch (cycleDay) {
      case 0: puzzleType = 'figure'; break;
      case 1: puzzleType = 'event'; break;
      case 2: puzzleType = 'invention'; break;
      default: puzzleType = 'figure';
    }
    
    const puzzlesOfType = PUZZLES.filter(p => p.type === puzzleType);
    const index = (yesterdayPuzzleNumber - 1) % puzzlesOfType.length;
    
    return {
      puzzle: puzzlesOfType[index],
      number: yesterdayPuzzleNumber,
      completed: completedPuzzles[yesterdayPuzzleNumber]
    };
  };

  const yesterdayData = getYesterdaysPuzzle();

  const handlePuzzleClick = () => {
    onSelectPuzzle(yesterdayData.puzzle, yesterdayData.number);
  };

  return (
    <div className="archive-overlay" onClick={onClose}>
      <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="archive-header">
          <h2>📚 Previous Puzzles</h2>
          <button className="archive-close" onClick={onClose}>✕</button>
        </div>

        <div className="archive-info">
          💡 Missed yesterday? Play it now! (Doesn't affect your streak)
        </div>

        <div className="archive-list">
          <div
            className={`archive-item ${yesterdayData.completed ? 'completed' : ''}`}
            onClick={handlePuzzleClick}
          >
            <div className="archive-item-number">
              ⏮️ Yesterday
            </div>
            <div className="archive-item-name">
              {yesterdayData.completed ? yesterdayData.puzzle.name : 'Mystery Puzzle'}
            </div>
            <div className="archive-item-status">
              {yesterdayData.completed ? (
                yesterdayData.completed.solved ? (
                  <span className="solved">✅ {yesterdayData.completed.guesses}/6</span>
                ) : (
                  <span className="failed">❌ Failed</span>
                )
              ) : (
                <span className="not-played">❓ Tap to play!</span>
              )}
            </div>
          </div>
        </div>

        <div className="archive-footer">
          Come back tomorrow for another catch-up puzzle! 📚
        </div>
      </div>
    </div>
  );
}

