import { afterEach, describe, expect, test, vi } from "vitest";
import { localStorageToUpper } from "./localStorageToUpper";

describe("convertToNumber function", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("throws when param is convertible to number", () => {
    localStorage.setItem("myKey", "myValue");
    expect(localStorageToUpper("myKey")).toBe("MYVALUE");
    localStorage.removeItem("myKey");
  });
  test("throws when param is convertible to number", () => {
    expect(localStorageToUpper("myKey")).not.toBe("MYVALUE");
  });
  test("throws when param is convertible to number", () => {
    const originalSetItem = localStorage.setItem;
    localStorage.getItem = () => "MYFAKEVALUE";
    expect(localStorageToUpper("myKey")).toBe("MYFAKEVALUE");
    localStorage.getItem = originalSetItem as any;
  });
  test("throws when param is convertible to number", () => {
    vi.spyOn(localStorage, "getItem").mockReturnValue("MYFAKEVALUE");
    expect(localStorageToUpper("myKey")).toBe("MYFAKEVALUE");
  });
  test("throws when param is convertible to number", () => {
    expect(localStorageToUpper("myKey")).toBe("MYFAKEVALUE");
  });
});
