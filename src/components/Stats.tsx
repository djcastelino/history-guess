import { getStats } from '../utils/storage';
import './Stats.css';

interface StatsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Stats({ isOpen, onClose }: StatsProps) {
  if (!isOpen) return null;

  const stats = getStats();
  const winRate = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
    : 0;

  // Calculate average guesses (only for wins)
  const totalGuesses = Object.entries(stats.guessDistribution).reduce(
    (sum, [guesses, count]) => sum + (parseInt(guesses) * (count as number)),
    0
  );
  const averageGuesses = stats.gamesWon > 0 
    ? (totalGuesses / stats.gamesWon).toFixed(1) 
    : '0';

  // Find max count for scaling the bars
  const maxCount = Math.max(...(Object.values(stats.guessDistribution) as number[]), 1);

  // Calculate win rates by type
  const figureWinRate = stats.byType.figure.played > 0
    ? Math.round((stats.byType.figure.won / stats.byType.figure.played) * 100)
    : 0;
  const eventWinRate = stats.byType.event.played > 0
    ? Math.round((stats.byType.event.won / stats.byType.event.played) * 100)
    : 0;
  const inventionWinRate = stats.byType.invention.played > 0
    ? Math.round((stats.byType.invention.won / stats.byType.invention.played) * 100)
    : 0;

  return (
    <div className="stats-overlay" onClick={onClose}>
      <div className="stats-modal" onClick={(e) => e.stopPropagation()}>
        <div className="stats-header">
          <h2>📊 Your Statistics</h2>
          <button onClick={onClose} className="stats-close-btn">✕</button>
        </div>

        <div className="stats-summary">
          <div className="stat-box">
            <div className="stat-value">{stats.gamesPlayed}</div>
            <div className="stat-label">Played</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{winRate}%</div>
            <div className="stat-label">Win Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.currentStreak}</div>
            <div className="stat-label">Current Streak</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.maxStreak}</div>
            <div className="stat-label">Max Streak</div>
          </div>
        </div>

        <div className="stats-details">
          <h3>Guess Distribution</h3>
          <div className="distribution-chart">
            {[1, 2, 3, 4, 5, 6].map((guessNum) => {
              const count = (stats.guessDistribution[guessNum] as number) || 0;
              const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
              
              return (
                <div key={guessNum} className="distribution-row">
                  <div className="guess-number">{guessNum}</div>
                  <div className="bar-container">
                    <div 
                      className="bar"
                      style={{ width: `${percentage}%` }}
                    >
                      {count > 0 && <span className="bar-count">{count}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="average-guesses">
            Average Guesses (wins): {averageGuesses}
          </div>
        </div>

        <div className="stats-by-type">
          <h3>Performance by Category</h3>
          
          <div className="type-stat">
            <div className="type-header">
              <span className="type-icon">👤</span>
              <span className="type-name">FIGURES</span>
            </div>
            <div className="type-details">
              <span>{stats.byType.figure.played} played</span>
              <span className="type-winrate">{figureWinRate}% win rate</span>
            </div>
          </div>

          <div className="type-stat">
            <div className="type-header">
              <span className="type-icon">📜</span>
              <span className="type-name">EVENTS</span>
            </div>
            <div className="type-details">
              <span>{stats.byType.event.played} played</span>
              <span className="type-winrate">{eventWinRate}% win rate</span>
            </div>
          </div>

          <div className="type-stat">
            <div className="type-header">
              <span className="type-icon">💡</span>
              <span className="type-name">INVENTIONS</span>
            </div>
            <div className="type-details">
              <span>{stats.byType.invention.played} played</span>
              <span className="type-winrate">{inventionWinRate}% win rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

