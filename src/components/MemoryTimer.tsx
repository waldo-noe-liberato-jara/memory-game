import TimerIcon from "../assets/icons/TimerIcon";
import { formatTimeUnit } from "../utils/time";

type Props = {
  minutes?: number;
  seconds?: number;
};

export default function MemoryTimer({ minutes = 0, seconds = 0 }: Props) {
  return (
    <div className="inline-flex gap-1 items-center px-3 ring-1 rounded-xl">
      <TimerIcon className="w-4 h-4 stroke-2 stroke-black" />

      <div className="flex">
        <p className="font-inter text-base text-black font-medium">
          {formatTimeUnit(minutes)}
        </p>
        <p className="font-inter text-base text-black font-normal">:</p>
        <p className="font-inter text-base text-black font-medium">
          {formatTimeUnit(seconds)}
        </p>
      </div>
    </div>
  );
}
