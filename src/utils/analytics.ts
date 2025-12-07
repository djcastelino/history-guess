import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-TMJBDK16CQ';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track game events
export const trackGameStart = (puzzleName: string, puzzleType: string) => {
  ReactGA.event({
    category: 'Game',
    action: 'game_started',
    label: `${puzzleType}: ${puzzleName}`,
  });
};

export const trackGameComplete = (won: boolean, guesses: number, puzzleName: string, puzzleType: string) => {
  ReactGA.event({
    category: 'Game',
    action: won ? 'game_won' : 'game_lost',
    label: `${puzzleType}: ${puzzleName}`,
    value: guesses,
  });
};

export const trackGuess = (correct: boolean, guessNumber: number) => {
  ReactGA.event({
    category: 'Gameplay',
    action: 'guess_made',
    label: correct ? 'correct' : 'incorrect',
    value: guessNumber,
  });
};

export const trackShare = () => {
  ReactGA.event({
    category: 'Social',
    action: 'result_shared',
  });
};

export const trackStatsView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'stats_viewed',
  });
};

export const trackArchiveView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'archive_viewed',
  });
};

export const trackTestMode = () => {
  ReactGA.event({
    category: 'Content',
    action: 'test_mode_accessed',
  });
};

export const trackPuzzleView = (puzzleName: string, puzzleType: string, difficulty: string) => {
  ReactGA.event({
    category: 'Content',
    action: 'puzzle_viewed',
    label: `${puzzleType}: ${puzzleName}`,
    value: difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3,
  });
};


