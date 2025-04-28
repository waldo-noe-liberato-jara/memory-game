type Props = {
  onReset: () => Promise<void>;
};

export default function MemoryLose({ onReset }: Props) {
  const handleReset = async () => {
    if (onReset) {
      await onReset();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl font-bold text-center">¡Se te acabo el tiempo!</p>

      <button
        onClick={handleReset}
        className="w-full bg-black rounded-lg px-2 py-1 cursor-pointer"
      >
        <span className="text-base text-white">Volvera intentar</span>
      </button>
    </div>
  );
}
