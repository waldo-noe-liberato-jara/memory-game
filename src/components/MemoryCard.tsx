import { AppConfig } from "../data/config";
import { Card } from "../types/types";

type Props = {
  card: Card;
  onSelectCard?: (card: Card) => void;
};

export default function MemoryCard({ card, onSelectCard }: Props) {
  const handleSelectCard = (card: Card) => {
    if (onSelectCard) {
      onSelectCard(card);
    }
  };

  return (
    <div
      onClick={() => handleSelectCard(card)}
      className="perspective-distant aspect-square cursor-pointer"
    >
      <div
        className={`relative w-full h-full transform-3d transition-transform ${
          card.state ? "rotate-y-180" : ""
        }`}
        style={{ transitionDuration: `${AppConfig.flipDelay}ms` }}
      >
        <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-gray-500 rounded-lg" />
        <img
          src={card.value}
          className="absolute w-full h-full backface-hidden flex justify-center items-center bg-red-500 rounded-lg rotate-y-180 text-xl"
        />
      </div>
    </div>
  );
}
