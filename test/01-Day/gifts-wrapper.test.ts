import { wrapping } from "../../01-Day/gifs-wrapper";

describe("Day 1", () => {
  test("Test #02", () => {
    const gifts = ["cat", "game", "socks"];

    const result = wrapping(gifts);

    expect(result).toStrictEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
  test("Test #03", () => {
    const gifts = ["midu"];

    const result = wrapping(gifts);

    expect(result).toStrictEqual(["******\n*midu*\n******"]);
  });
  test("Test #04", () => {
    const gifts = ["a"];

    const result = wrapping(gifts);

    expect(result).toStrictEqual(["***\n*a*\n***"]);
  });
  test("Test #05", () => {
    const gifts = new Array<string>();

    const result = wrapping(gifts);

    expect(result).toStrictEqual([]);
  });
});
