import { Card, Level } from "../types/types";
import MemoryCard from "./MemoryCard";

type Props = {
  cards: Card[];
  level: Level;
  onSelectCard?: (card: Card) => void;
};

export default function MemoryCards({
  cards = [],
  level,
  onSelectCard,
}: Props) {
  return (
    <div className="w-full max-w-125 flex justify-center items-center">
      <div
        className="w-full grid gap-2 grid-col"
        style={{
          gridTemplateColumns: `repeat(${level.columns}, minmax(0, 1fr))`,
        }}
      >
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            card={card}
            onSelectCard={() => onSelectCard?.(card)}
          />
        ))}
      </div>
    </div>
  );
}
