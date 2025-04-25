import { AppConfig } from "../data/config";
import { Level } from "../types/types";
import { useState } from "react";
import { areObjectsEqual } from "../utils/arrayHelper";

type Props = {
  onSelectLevel?: (level: Level) => void | Promise<void>;
};

export default function MemoryLevel({ onSelectLevel }: Props) {
  const [selectedCell, setSelectedCell] = useState<Level>(AppConfig.levels[0]);

  const handleSelectLevel = async (level: Level) => {
    if (!areObjectsEqual(level, selectedCell)) {
      setSelectedCell(level);
      if (onSelectLevel) {
        await onSelectLevel(level);
      }
    }
  };

  return (
    <div className="w-full max-w-125 flex flex-row items-center gap-2">
      <p className="text-base font-medium">Nivel:</p>

      <div className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-2">
        {AppConfig.levels.map((level, index) => (
          <button
            onClick={() => handleSelectLevel(level)}
            key={index}
            className={`ring-1 rounded-lg px-2 py-1 flex justify-center items-center cursor-pointer ${
              selectedCell === level ? "bg-black text-white" : ""
            }`}
          >
            <span className="text-base">
              {level.columns + "x" + level.rows}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
