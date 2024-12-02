import { day01a, day01b } from "../solutions/01";
import { day02a, day02b } from "../solutions/02";

test("Day 01 A", () => {
  expect(day01a()).toBe(2375403);
});

test("Day 01 B", () => {
  expect(day01b()).toBe(23082277);
});

test("Day 02 A", () => {
  expect(day02a()).toBe(299);
});

test("Day 02 B", () => {
  expect(day02b()).toBe(364);
});
