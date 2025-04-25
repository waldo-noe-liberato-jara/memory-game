export function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export function selectRandomArray<T>(array: T[], count: number): T[] {
  return shuffleArray(array).slice(0, count);
}

export function duplicateArray<T>(array: T[]): T[] {
  return array.concat(array);
}

export function isEqually<T extends object>(a: T, b: T): boolean {
  const keys = Object.keys(a) as (keyof T)[];
  return keys.every((key) => a[key] === b[key]);
}

export function areObjectsEqual<T extends object>(obj01: T, obj02: T): boolean {
  const keys = Object.keys(obj01) as (keyof T)[];
  if (keys.length !== Object.keys(obj02).length) return false;

  return keys.every((key) => obj01[key] === obj02[key]);
}
