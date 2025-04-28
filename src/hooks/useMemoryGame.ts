//LIBRARIES
import { useState } from "react";
import { useTimer } from "react-timer-hook";
//FUNCTIONS
import {
  generateShuffledCardDeck,
  isGameWon,
  markCardsAsMatched,
  resetCardSelection,
} from "../utils/gameLogic";
//DATA
import { AppConfig } from "../data/config";
//TYPES
import { Card, Level, UseMemoryGameReturn } from "../types/types";
import { getExpiryTimestamp } from "../utils/time";

export const useMemoryGame = (): UseMemoryGameReturn => {
  const [level, setLevel] = useState<Level>(AppConfig.levels[0]);
  const [selectedLevel, setSelectedLevel] = useState<Level>(
    AppConfig.levels[0]
  );
  const [cards, setCards] = useState<Card[]>(
    generateShuffledCardDeck(AppConfig.images, AppConfig.levels[0])
  );
  const [turn, setTurn] = useState<number>(0);
  const [firstCardSelected, setFirstCardSelected] = useState<Card | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isGameLocked, setIsGameLocked] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timeIsOver, setTimeIsOver] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    isRunning,
    seconds,
    minutes,
    totalMilliseconds,
    pause,
    restart,
    resume,
  } = useTimer({
    autoStart: false,
    expiryTimestamp: getExpiryTimestamp(AppConfig.levels[0].duration),
    interval: AppConfig.timerInterval,
    onExpire: () => {
      setTimeIsOver(true);
      setShowModal(true);
      setIsGameLocked(false);
    },
  });
  const delay = (milliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const animateFlip = async () => {
    const cardsToFlip = cards.filter((card) => card.state);
    for (const card of cardsToFlip) {
      await delay(AppConfig.resetFlipDelay);
      setCards((prevCards) =>
        prevCards.map((c) => (c.id === card.id ? { ...c, state: false } : c))
      );
    }
  };

  const handleReset = async () => {
    if (isAnimating && isGameLocked) return;
    if (isRunning) pause();
    if (showModal) setShowModal(false);
    setIsGameLocked(true);
    setIsAnimating(true);
    await animateFlip();

    await delay(AppConfig.resetFlipDelay);

    restart(getExpiryTimestamp(level.duration), false);
    setCards(generateShuffledCardDeck(AppConfig.images, level));
    setIsGameLocked(false);
    setIsAnimating(false);
    setTimeIsOver(false);
    setFirstCardSelected(null);
    setTurn(0);
  };

  const handleSelectLevel = async (selectedLevel: Level) => {
    if (isAnimating && isGameLocked) return;

    pause();
    setIsGameLocked(true);
    setIsAnimating(true);
    setSelectedLevel(selectedLevel);
    await animateFlip();

    await delay(AppConfig.resetFlipDelay);

    restart(getExpiryTimestamp(selectedLevel.duration), false);
    setLevel(selectedLevel);
    setCards(generateShuffledCardDeck(AppConfig.images, selectedLevel));
    setIsGameLocked(false);
    setIsAnimating(false);
    setTimeIsOver(false);
    setFirstCardSelected(null);
    setTurn(0);
  };

  const handleSelectCard = async (card: Card): Promise<void> => {
    if (isAnimating || isGameLocked || timeIsOver || card.state) return;
    if (!isRunning) resume();

    const newCards = cards.map((d) =>
      d.id === card.id ? { ...d, state: true } : d
    );

    setCards(newCards);
    setFirstCardSelected(card);

    if (firstCardSelected !== null) {
      setIsGameLocked(true);
      setIsAnimating(true);
      setTurn((prev) => prev + 1);

      await delay(AppConfig.flipDelay);

      let newCards = [];
      let won = false;
      if (firstCardSelected.value === card.value) {
        newCards = markCardsAsMatched(cards, [firstCardSelected, card]);
        won = isGameWon(newCards);
      } else {
        newCards = resetCardSelection(cards, [firstCardSelected, card]);
      }

      setCards(newCards);
      setFirstCardSelected(null);
      setIsGameLocked(false);
      setIsAnimating(false);
      setGameOver(won);
      if (won) {
        pause();
        setShowModal(true);
        setIsGameLocked(false);
        setIsAnimating(true);
      }
    }
  };

  return {
    turn,
    cards,
    selectedLevel,
    level,
    seconds,
    minutes,
    totalMilliseconds,
    gameOver,
    timeIsOver,
    showModal,
    handleReset,
    handleSelectCard,
    handleSelectLevel,
    handleCloseModal,
  };
};
