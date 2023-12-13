import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { promiseRandomTimeout } from "./promiseRandomTimeout";

// test('promiseRandomTimeout function', async () => {
//   const value = await promiseRandomTimeout(123);
//   expect(value).toBe(123);
// })

// test('promiseRandomTimeout function', () => {
//   return promiseRandomTimeout(123).then((value) => {
//     expect(value).toBe(123);
//   });
// })

describe("promiseRandomTimeout with fakeTimer", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  test("promiseRandomTimeout function", async () => {
    const promise = promiseRandomTimeout(123);

    vi.advanceTimersByTime(1000);

    const value = await promise;
    expect(value).toBe(123);
  });
});
