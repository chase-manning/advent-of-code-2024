import fs from "fs";

const input = fs.readFileSync("input/01.txt", "utf8");

const lines = input.split("\n");

const a = [];
const b = [];

for (const line of lines) {
  const items = line.split("   ");
  a.push(items[0]);
  b.push(items[1]);
}

// sort a and b
a.sort((a, b) => a.localeCompare(b));
b.sort((a, b) => a.localeCompare(b));

const totalPartOne = a.reduce((acc, cur, i) => {
  return acc + Math.abs(cur - b[i]);
}, 0);

console.log(totalPartOne);

const appearance = (list: number[], value: number) => {
  let count = 0;
  for (const item of list) {
    if (item === value) count++;
  }
  return count;
};

const totalPartTwo = a.reduce((acc, cur) => {
  return acc + cur * appearance(b, cur);
}, 0);

console.log(totalPartTwo);
