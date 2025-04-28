export type Card = {
  id: number;
  value: string;
  state: boolean;
};

export type Level = {
  columns: number;
  rows: number;
  duration: number;
};

export type AppConfigType = {
  images: string[];
  levels: Level[];
  flipDelay: number;
  resetFlipDelay: number;
  timerInterval: number;
};

export type GameState = "IDLE" | "PLAYING" | "WON" | "LOSE";

export type UseMemoryGameReturn = {
  turn: number;
  cards: Card[];
  level: Level;
  selectedLevel: Level;
  seconds: number;
  minutes: number;
  totalMilliseconds: number;
  gameOver: boolean;
  timeIsOver: boolean;
  showModal: boolean;
  handleReset: () => Promise<void>;
  handleSelectCard: (card: Card) => Promise<void>;
  handleSelectLevel: (level: Level) => Promise<void>;
  handleCloseModal: () => void;
};
