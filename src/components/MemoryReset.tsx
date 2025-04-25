import ResetIcon from "../assets/icons/ResetIcon";

type Props = {
  onReset?: () => void;
};

export default function MemoryReset({ onReset }: Props) {
  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <button
      onClick={handleReset}
      className="p-2 rounded-full ring-1 cursor-pointer"
    >
      <ResetIcon className="w-4 h-4 stroke-2 stroke-black" />
    </button>
  );
}
