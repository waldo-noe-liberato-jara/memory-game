import { Card } from "../types/types";

export function convertToCards(items: string[]): Card[] {
  return items.map((item, index) => ({
    id: index + 1,
    value: item,
    state: false,
  }));
}

//BORRAR
export async function animateFlip(
  cards: Card[],
  callback: (indice: number) => void
) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].state) {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (callback) {
            callback;
          }
          resolve(() => {});
        }, 250);
      });
    }
  }
}
