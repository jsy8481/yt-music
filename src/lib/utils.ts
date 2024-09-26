import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(min: number, max: number) {
  const flooredMin = Math.floor(min);
  const flooredMax = Math.floor(max);
  return Math.floor((flooredMax - flooredMin + 1) * Math.random()) + min;
}

export function getRandomElementFromArray<T>(array: T[]): T {
  const len = array.length;
  return array[getRandomInt(0, len - 1)];
}
export function chunkArray<T>(arr: T[], chunkSize: number) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray;
}

export function generateRandomHex() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
