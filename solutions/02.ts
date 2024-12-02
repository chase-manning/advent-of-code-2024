import fs from "fs";

const input = fs.readFileSync("input/02.txt", "utf8");

const reports: number[][] = [];
for (const line of input.split("\n")) {
  const items = line.split(" ");
  reports.push(items.map((item) => parseInt(item)));
}

const MIN_GAP = 1;
const MAX_GAP = 3;

const isSafe = (report: number[]) => {
  let isIncreasing: boolean | null = null;
  for (let i = 1; i < report.length; i++) {
    const before = report[i - 1];
    const current = report[i];
    const isIncreasing_ = before < current;
    if (isIncreasing !== null && isIncreasing !== isIncreasing_) return false;
    isIncreasing = isIncreasing_;
    const delta = Math.abs(current - before);
    if (delta < MIN_GAP) return false;
    if (delta > MAX_GAP) return false;
  }
  return true;
};

export const day02a = () => {
  return reports.filter((report) => isSafe(report)).length;
};

export const day02b = () => {
  const isSafeWithTolerance = (report: number[]) => {
    const options = [];
    options.push(report);
    for (let i = 0; i < report.length; i++) {
      const option = [...report];
      option.splice(i, 1);
      options.push(option);
    }
    return options.some((option) => isSafe(option));
  };

  return reports.filter((report) => isSafeWithTolerance(report)).length;
};
