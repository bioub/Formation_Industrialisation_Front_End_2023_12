import { expect, test, vi } from "vitest";
import { genererAlea } from "./genererAlea";

// test('genererAlea function', () => {
//   expect(genererAlea(0, 100)).toBeGreaterThanOrEqual(0);
//   expect(genererAlea(0, 100)).toBeLessThanOrEqual(100);
// })

test("genererAlea function", () => {
  vi.spyOn(Math, "random").mockReturnValue(0.5);
  expect(genererAlea(0, 100)).toBe(50);
  vi.restoreAllMocks();
});
