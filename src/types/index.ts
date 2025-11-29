export type PuzzleType = "figure" | "event" | "invention";

export interface HistoryPuzzle {
  id: number;
  type: PuzzleType;
  name: string;
  clues: string[];
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
  difficulty: "easy" | "medium" | "hard";
  category?: string;
  era?: string;
  year?: string;
  location?: string;
}

export interface GameState {
  targetPuzzle: HistoryPuzzle | null;
  guesses: string[];
  isComplete: boolean;
  isWon: boolean;
  currentStreak: number;
  maxStreak: number;
  gamesPlayed: number;
  gamesWon: number;
  lastPlayedDate: string;
  puzzleType: PuzzleType;
}

export interface Stats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: { [key: number]: number };
  byType: {
    figure: { played: number; won: number };
    event: { played: number; won: number };
    invention: { played: number; won: number };
  };
}

