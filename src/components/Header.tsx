import { getStats, getPuzzleTypeIcon, getPuzzleTypeName } from '../utils/storage';
import type { PuzzleType } from '../types';
import './Header.css';

interface HeaderProps {
  puzzleType: PuzzleType;
}

export default function Header({ puzzleType }: HeaderProps) {
  const stats = getStats();
  const icon = getPuzzleTypeIcon(puzzleType);
  const typeName = getPuzzleTypeName(puzzleType);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-center">
          <h1 className="title">
            HISTORY GUESS
          </h1>
          <p className="subtitle">Daily History Challenge</p>
          <div className="puzzle-type">
            Today's Challenge: {icon} {typeName}
          </div>
          {stats.currentStreak > 0 && (
            <div className="streak">
              🔥 {stats.currentStreak} day streak
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

