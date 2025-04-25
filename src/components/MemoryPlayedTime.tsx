import { getMinutesFromMs, getSecondsFromMs } from "../utils/time";

type Props = {
  milliseconds?: number;
};

export default function MemoryPlayedTime({ milliseconds = 0 }: Props) {
  return (
    <div className="flex">
      <p className="font-inter text-base text-white font-medium">
        {getMinutesFromMs(milliseconds)}
      </p>
      <p className="font-inter text-base text-white font-normal">:</p>
      <p className="font-inter text-base text-white font-medium">
        {getSecondsFromMs(milliseconds)}
      </p>
    </div>
  );
}
