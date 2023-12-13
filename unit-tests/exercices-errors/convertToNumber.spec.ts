import { describe, expect, test } from "vitest";
import { convertToNumber } from "./convertToNumber";

describe("convertToNumber function", () => {
  test("throws when param is convertible to number", () => {
    expect(() => convertToNumber("Romain")).toThrow();
  });
  test("converts to number", () => {
    expect(convertToNumber("123")).toBe(123);
  });
});
