import type { GameState, PuzzleType } from '../types';

const STORAGE_KEY = 'historyguess-game-state';
const STATS_KEY = 'historyguess-stats';

export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

export function loadGameState(): GameState | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
}

export function isNewDay(lastPlayedDate: string): boolean {
  if (!lastPlayedDate) return true;
  
  const today = new Date().toISOString().split('T')[0];
  const lastPlayed = lastPlayedDate.split('T')[0];
  
  return today !== lastPlayed;
}

// Determine puzzle type based on day (3-day rotation)
export function getTodaysPuzzleType(): PuzzleType {
  const epochDate = new Date('2024-12-01'); // Reference date
  const today = new Date();
  
  // Calculate days since epoch
  const daysSinceEpoch = Math.floor(
    (today.getTime() - epochDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  // 3-day cycle: 0 = figure, 1 = event, 2 = invention
  const cycleDay = daysSinceEpoch % 3;
  
  switch (cycleDay) {
    case 0:
      return "figure";
    case 1:
      return "event";
    case 2:
      return "invention";
    default:
      return "figure";
  }
}

// Get today's puzzle number (for share text)
export function getTodaysPuzzleNumber(): number {
  const epochDate = new Date('2024-12-01');
  const today = new Date();
  
  const daysSinceEpoch = Math.floor(
    (today.getTime() - epochDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceEpoch + 1; // Start from puzzle #1
}

export function updateStats(isWon: boolean, guessCount: number, puzzleType: PuzzleType): void {
  try {
    const statsStr = localStorage.getItem(STATS_KEY);
    const stats = statsStr ? JSON.parse(statsStr) : {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {},
      byType: {
        figure: { played: 0, won: 0 },
        event: { played: 0, won: 0 },
        invention: { played: 0, won: 0 }
      }
    };

    stats.gamesPlayed++;
    stats.byType[puzzleType].played++;
    
    if (isWon) {
      stats.gamesWon++;
      stats.byType[puzzleType].won++;
      stats.currentStreak++;
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      stats.guessDistribution[guessCount] = (stats.guessDistribution[guessCount] || 0) + 1;
    } else {
      stats.currentStreak = 0;
    }

    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to update stats:', error);
  }
}

export function getStats() {
  try {
    const statsStr = localStorage.getItem(STATS_KEY);
    return statsStr ? JSON.parse(statsStr) : {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {},
      byType: {
        figure: { played: 0, won: 0 },
        event: { played: 0, won: 0 },
        invention: { played: 0, won: 0 }
      }
    };
  } catch (error) {
    console.error('Failed to get stats:', error);
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {},
      byType: {
        figure: { played: 0, won: 0 },
        event: { played: 0, won: 0 },
        invention: { played: 0, won: 0 }
      }
    };
  }
}

export function getPuzzleTypeIcon(type: PuzzleType): string {
  switch (type) {
    case "figure":
      return "👤";
    case "event":
      return "📜";
    case "invention":
      return "💡";
  }
}

export function getPuzzleTypeName(type: PuzzleType): string {
  switch (type) {
    case "figure":
      return "HISTORICAL FIGURE";
    case "event":
      return "HISTORICAL EVENT";
    case "invention":
      return "INVENTION/DISCOVERY";
  }
}

export function generateShareText(isWon: boolean, guesses: string[], puzzleNumber: number, puzzleType: PuzzleType): string {
  const guessCount = guesses.length;
  const result = isWon ? `${guessCount}/6` : 'X/6';
  const icon = getPuzzleTypeIcon(puzzleType);
  const typeName = puzzleType.toUpperCase();
  
  let grid = '';
  for (let i = 0; i < 6; i++) {
    if (i < guesses.length - 1) {
      grid += '⬜';
    } else if (i === guesses.length - 1) {
      grid += isWon ? '🟩' : '⬜';
    } else {
      grid += '⬛';
    }
    if ((i + 1) % 3 === 0 && i < 5) grid += '\n';
  }
  
  return `History Guess #${puzzleNumber} (${icon} ${typeName}) ${result}\n\n${grid}\n\nLearn history daily! 📚\nPlay at: historyguess.com`;
}

