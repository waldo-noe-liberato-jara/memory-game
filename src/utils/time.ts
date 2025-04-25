export function getExpiryTimestamp(milliseconds: number): Date {
  return new Date(Date.now() + milliseconds);
}
export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, "0");
}
export function getMinutesFromMs(milliseconds: number): string {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  return formatTimeUnit(minutes);
}

export function getSecondsFromMs(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const seconds = totalSeconds % 60;
  return formatTimeUnit(seconds);
}
