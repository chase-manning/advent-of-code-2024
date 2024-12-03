import fs from "fs";

const input = fs.readFileSync("input/03.txt", "utf8");

const getOperations = (input: string, toggle: boolean = false) => {
  const operations: { a: number; b: number }[] = [];
  let enabled = true;
  for (let i = 0; i < input.length; i++) {
    const toggleOn = input.substring(i, i + 4) === "do()";
    if (toggleOn) enabled = true;
    const toggleOff = input.substring(i, i + 7) === "don't()";
    if (toggleOff) enabled = false;
    const numberStart = i + 4;
    const numberEnd = input.indexOf(")", numberStart);
    if (input.substring(i, numberStart) === "mul(") {
      const separator = input.indexOf(",", numberStart);
      const aString = input.substring(numberStart, separator);
      const bString = input.substring(separator + 1, numberEnd);
      const validNumber = (value: string) => /^\d+$/.test(value);
      if (!validNumber(aString) || !validNumber(bString)) continue;
      if (toggle && !enabled) continue;
      operations.push({
        a: parseInt(aString),
        b: parseInt(bString),
      });
    }
  }
  return operations;
};

export const day03a = () => {
  return getOperations(input).reduce((acc, cur) => {
    return acc + cur.a * cur.b;
  }, 0);
};

export const day03b = () => {
  return getOperations(input, true).reduce((acc, cur) => {
    return acc + cur.a * cur.b;
  }, 0);
};
