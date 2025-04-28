import TrophyIcon from "../assets/icons/TrophyIcon";

type Props = {
  turn?: number;
};

const MemoryTurn = ({ turn = 0 }: Props) => {
  return (
    <div className="inline-flex gap-2 items-center px-3 ring-1 rounded-xl">
      <TrophyIcon className="w-4 h-4" />

      <p className="text-base text-black font-medium">
        {`${turn} ${turn === 1 ? "Move" : "Moves"}`}
      </p>
    </div>
  );
};

export default MemoryTurn;
