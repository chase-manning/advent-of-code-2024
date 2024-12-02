import fs from "fs";

const input = fs.readFileSync("input/02.txt", "utf8");

const reports: number[][] = [];
for (const line of input.split("\n")) {
  const items = line.split(" ");
  reports.push(items.map((item) => parseInt(item)));
}

export const day02a = () => {
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

  return reports.filter((report) => isSafe(report)).length;
};

export const day02b = () => {
  return 0;
};
