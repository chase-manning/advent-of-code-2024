import fs from "fs";

const input = fs.readFileSync("input/01.txt", "utf8");

const a = [];
const b = [];
for (const line of input.split("\n")) {
  const items = line.split("   ");
  a.push(items[0]);
  b.push(items[1]);
}

export const part1 = () => {
  a.sort((a, b) => a.localeCompare(b));
  b.sort((a, b) => a.localeCompare(b));

  return a.reduce((acc, cur, i) => {
    return acc + Math.abs(cur - b[i]);
  }, 0);
};

export const part2 = () => {
  const appearance = (list: number[], value: number) => {
    let count = 0;
    for (const item of list) {
      if (item === value) count++;
    }
    return count;
  };

  return a.reduce((acc, cur) => {
    return acc + cur * appearance(b, cur);
  }, 0);
};
