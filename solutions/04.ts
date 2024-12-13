import fs from "fs";

const input = fs.readFileSync("input/04.txt", "utf8");

const lines = input.split("\n");
const chars: string[][] = lines.map((line) => line.split(""));

const diagonalDirections: PosType[] = [
  { i: 1, j: 1 },
  { i: 1, j: -1 },
  { i: -1, j: 1 },
  { i: -1, j: -1 },
];

// List of all possible directions for the search
const directions: PosType[] = [
  ...diagonalDirections,
  { i: 1, j: 0 },
  { i: 0, j: 1 },
  { i: 0, j: -1 },
  { i: -1, j: 0 },
];

interface PosType {
  i: number;
  j: number;
}

const isXmas = (chars: string[][], start: PosType, direction: PosType) => {
  try {
    if (chars[start.i][start.j] !== "X") return false;
    if (chars[start.i + direction.i][start.j + direction.j] !== "M")
      return false;
    if (chars[start.i + direction.i * 2][start.j + direction.j * 2] !== "A")
      return false;
    if (chars[start.i + direction.i * 3][start.j + direction.j * 3] !== "S")
      return false;
    return true;
  } catch (e) {
    return false;
  }
};

const xmasCount = (chars: string[][]) => {
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars[i].length; j++) {
      count += directions.filter((direction) =>
        isXmas(chars, { i, j }, direction)
      ).length;
    }
  }
  return count;
};

export const day04a = () => xmasCount(chars);

const isXMas = (chars: string[][], start: PosType, direction: PosType) => {
  try {
    if (chars[start.i][start.j] !== "M") return false;
    if (chars[start.i + direction.i][start.j + direction.j] !== "A")
      return false;
    if (chars[start.i + direction.i * 2][start.j + direction.j * 2] !== "S")
      return false;
    const a = chars[start.i][start.j + direction.j * 2];
    const b = chars[start.i + direction.i * 2][start.j];
    if (a !== "M" && b !== "M") return false;
    if (a !== "S" && b !== "S") return false;
    if (a === b) return false;
    return true;
  } catch (e) {
    return false;
  }
};

const xMasCount = (chars: string[][]) => {
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars[i].length; j++) {
      count += diagonalDirections.filter((direction) =>
        isXMas(chars, { i, j }, direction)
      ).length;
    }
  }
  return count / 2;
};

export const day04b = () => xMasCount(chars);
