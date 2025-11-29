import type { HistoryPuzzle, PuzzleType } from '../types';
import { generateShareText, getPuzzleTypeIcon } from '../utils/storage';
import './GameOver.css';

interface GameOverProps {
  isWon: boolean;
  puzzle: HistoryPuzzle;
  guessCount: number;
  puzzleNumber: number;
  guesses: string[];
  puzzleType: PuzzleType;
  onStatsClick: () => void;
}

export default function GameOver({ isWon, puzzle, guessCount, puzzleNumber, guesses, puzzleType, onStatsClick }: GameOverProps) {
  const handleShare = () => {
    const shareText = generateShareText(isWon, guesses, puzzleNumber, puzzleType);
    
    if (navigator.share) {
      navigator.share({
        text: shareText
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        alert('Copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

  const icon = getPuzzleTypeIcon(puzzleType);

  return (
    <div className="game-over">
      <div className={`result-banner ${isWon ? 'won' : 'lost'}`}>
        {isWon ? (
          <>
            <div className="result-icon">🎉</div>
            <h2 className="result-title">Correct!</h2>
            <p className="result-subtitle">You got it in {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}!</p>
          </>
        ) : (
          <>
            <div className="result-icon">😔</div>
            <h2 className="result-title">The answer was:</h2>
          </>
        )}
      </div>

      <div className="puzzle-info">
        <div className="puzzle-type-badge">{icon} {puzzleType.toUpperCase()}</div>
        <h3 className="puzzle-name">{puzzle.name}</h3>
        {puzzle.category && <p className="puzzle-category">{puzzle.category}</p>}
        {puzzle.year && <p className="puzzle-year">{puzzle.year}</p>}
        {puzzle.location && <p className="puzzle-location">📍 {puzzle.location}</p>}
        
        <div className="fun-fact">
          <h4>💡 Did You Know?</h4>
          <p>{puzzle.funFact}</p>
          <p className="fact-source">
            Source:{" "}
            <a 
              href={puzzle.funFactSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {puzzle.funFactSource}
            </a>
          </p>
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={handleShare} className="share-button">
          📤 Share Result
        </button>
        <button onClick={onStatsClick} className="stats-button">
          📊 View Stats
        </button>
      </div>

      <p className="next-puzzle-info">
        🔄 New puzzle tomorrow! Come back daily to learn history! 📚
      </p>
    </div>
  );
}

