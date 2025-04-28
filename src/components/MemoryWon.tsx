import MemoryPlayedTime from "./MemoryPlayedTime";

type Props = {
  millisecondsPlayed?: number;
  turn?: number;
  onReset: () => Promise<void>;
};

export default function MemoryWon({
  millisecondsPlayed = 0,
  turn = 0,
  onReset,
}: Props) {
  const handleReset = async () => {
    if (onReset) {
      await onReset();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl font-bold text-center">¡Felicidades!</p>

      <div className="w-full flex gap-2">
        <div className="flex-1 flex flex-col justify-center items-center bg-black rounded-lg py-8">
          <p className="text-base text-white">Time</p>
          <MemoryPlayedTime milliseconds={millisecondsPlayed} />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center bg-black rounded-lg py-8">
          <p className="text-base text-white">Moves</p>
          <p className="font-inter text-base text-white font-medium">{turn}</p>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="w-full bg-black rounded-lg px-2 py-1 cursor-pointer"
      >
        <span className="text-base text-white">Volver a jugar</span>
      </button>
    </div>
  );
}
