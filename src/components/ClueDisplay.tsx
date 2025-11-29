import type { HistoryPuzzle, PuzzleType } from '../types';
import './ClueDisplay.css';

interface ClueDisplayProps {
  puzzle: HistoryPuzzle;
  visibleClueCount: number;
  puzzleType: PuzzleType;
}

export default function ClueDisplay({ puzzle, visibleClueCount }: ClueDisplayProps) {
  return (
    <div className="clue-display">
      <h2 className="mystery-title">Today's Puzzle</h2>
      
      <div className="clues-container">
        <h3 className="clues-heading">Clues:</h3>
        <ul className="clues-list">
          {puzzle.clues.map((clue, index) => (
            <li 
              key={index} 
              className={`clue-item ${index < visibleClueCount ? 'visible' : 'locked'}`}
            >
              <span className="clue-number">{index + 1}.</span>
              {index < visibleClueCount ? (
                <span className="clue-text">{clue}</span>
              ) : (
                <span className="clue-locked">
                  🔒 Make another guess to reveal
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

