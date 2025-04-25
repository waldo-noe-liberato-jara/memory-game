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

export type UseMemoryGameReturn = {
  turn: number;
  cards: Card[];
  level: Level;
  seconds: number;
  minutes: number;
  totalMilliseconds: number;
  gameOver: boolean;
  timeIsOver: boolean;
  showModal: boolean;
  handleReset: () => void;
  handleSelectCard: (card: Card) => void;
  handleSelectLevel: (level: Level) => void;
  handleCloseModal: () => void;
};
