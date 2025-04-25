import { duplicateArray, selectRandomArray, shuffleArray } from "./arrayHelper";
import { Card, Level } from "../types/types";
import { convertToCards } from "./cardHelper";

export function getPairCountForLevel(
  level: Level,
  availableItems: number
): number {
  if (level.columns <= 0 || level.rows <= 0) {
    throw new Error("Las dimensiones del nivel deben ser mayores a 0.");
  }

  const totalPairs = (level.columns * level.rows) / 2;

  if (totalPairs > availableItems) {
    throw new Error(
      "No hay suficientes elementos en ITEMS para generar las cartas."
    );
  }

  return totalPairs;
}

export function generateShuffledCardDeck(
  items: string[],
  level: Level
): Card[] {
  const pairCount = getPairCountForLevel(level, items.length);
  const selected = selectRandomArray(items, pairCount);
  const duplicated = duplicateArray(selected);
  const shuffled = shuffleArray(duplicated);
  return convertToCards(shuffled);
}

export function isGameWon(cards: Card[]) {
  return cards.every((item) => item.state);
}

export function markCardsAsMatched(cards: Card[], selectedCards: Card[]) {
  const selectedIds = selectedCards.map((card) => card.id);

  return cards.map((card) =>
    selectedIds.includes(card.id) ? { ...card, state: true } : card
  );
}

export function resetCardSelection(cards: Card[], selectedCards: Card[]) {
  const selectedIds = selectedCards.map((card) => card.id);

  return cards.map((card) =>
    selectedIds.includes(card.id) ? { ...card, state: false } : card
  );
}

export function compareCards(
  cards: Card[],
  selectedCard: Card,
  secondSelectedCard: Card
) {
  if (!selectedCard) return { newCards: cards, result: false };

  let newCards = [];
  let result = false;

  if (selectedCard.value === secondSelectedCard.value) {
    newCards = markCardsAsMatched(cards, [selectedCard, secondSelectedCard]);
    result = isGameWon(newCards);
  } else {
    newCards = resetCardSelection(cards, [selectedCard, secondSelectedCard]);
  }

  return { newCards, result };
}
