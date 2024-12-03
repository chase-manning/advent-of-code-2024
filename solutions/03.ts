import fs from "fs";

const input = fs.readFileSync("input/03.txt", "utf8");

type Operation = { a: number; b: number };

const getOperations = (input: string, toggle: boolean = false): Operation[] => {
  const operations: Operation[] = [];
  let enabled = true;
  for (let i = 0; i < input.length; i++) {
    if (input.substring(i, i + 4) === "do()") enabled = true;
    if (input.substring(i, i + 7) === "don't()") enabled = false;
    const numberStart = i + 4;
    const numberEnd = input.indexOf(")", numberStart);
    if (input.substring(i, numberStart) === "mul(") {
      const separator = input.indexOf(",", numberStart);
      const aString = input.substring(numberStart, separator);
      const bString = input.substring(separator + 1, numberEnd);
      const validNumber = (value: string) => /^\d+$/.test(value);
      if (!validNumber(aString) || !validNumber(bString)) continue;
      if (toggle && !enabled) continue;
      operations.push({ a: parseInt(aString), b: parseInt(bString) });
    }
  }
  return operations;
};

const process = (operations: Operation[]) => {
  return operations.reduce((acc, cur) => {
    return acc + cur.a * cur.b;
  }, 0);
};

export const day03a = () => process(getOperations(input));

export const day03b = () => process(getOperations(input, true));
