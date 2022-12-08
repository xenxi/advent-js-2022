import { getGiftsToRefill } from "../../07-Day/gifts-refiller";

describe("Day 07", () => {
  test("Test #03", () => {
    const a1 = new Array<string>();
    const a2 = new Array<string>();
    const a3 = new Array<string>();

    const result = getGiftsToRefill(a1, a2, a3);

    expect(result).toStrictEqual([]);
  });

  test("Test #04", () => {
    const a1 = ["a", "a"];
    const a2 = ["a", "a"];
    const a3 = ["a", "a"];

    const result = getGiftsToRefill(a1, a2, a3);

    expect(result).toStrictEqual([]);
  });

  test("Test #05", () => {
    const a1 = ["a", "a"];
    const a2 = ["b", "b"];
    const a3 = ["c", "c"];

    const result = getGiftsToRefill(a1, a2, a3);

    expect(result).toStrictEqual(["a", "b", "c"]);
  });

  test("Test #06", () => {
    const a1 = ["a", "b"];
    const a2 = ["c", "d"];
    const a3 = ["e", "f"];

    const result = getGiftsToRefill(a1, a2, a3);

    expect(result).toStrictEqual(["a", "b", "c", "d", "e", "f"]);
  });
});
