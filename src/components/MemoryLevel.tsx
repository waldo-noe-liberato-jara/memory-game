import { AppConfig } from "../data/config";
import { Level } from "../types/types";
import { areObjectsEqual } from "../utils/arrayHelper";

type Props = {
  level: Level;
  selectedLevel: Level;
  onSelectLevel?: (level: Level) => Promise<void>;
};

export default function MemoryLevel({
  level,
  selectedLevel,
  onSelectLevel,
}: Props) {
  const handleSelectLevel = async (lvl: Level) => {
    if (!areObjectsEqual(lvl, level)) {
      if (onSelectLevel) {
        await onSelectLevel(lvl);
      }
    }
  };

  return (
    <div className="w-full max-w-125 flex flex-row items-center gap-2">
      <p className="text-base font-medium">Nivel:</p>

      <div className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-2">
        {AppConfig.levels.map((lvl, index) => (
          <button
            onClick={() => handleSelectLevel(lvl)}
            key={index}
            className={`ring-1 rounded-lg px-2 py-1 flex justify-center items-center cursor-pointer ${
              areObjectsEqual(selectedLevel, lvl) ? "bg-black text-white" : ""
            }`}
          >
            <span className="text-base">{lvl.columns + "x" + lvl.rows}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
