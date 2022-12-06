import { distributeGifts } from "../../03-Day/gifts-distributer";
describe("Day 3", () => {
  test("Test #03", () => {
    const packOfGifts = ["a", "b", "c"];
    const reindeers = ["d", "e"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(1);
  });
  test("Test #04", () => {
    const packOfGifts = ["videogames", "console"];
    const reindeers = ["midu"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(0);
  });
  test("Test #05", () => {
    const packOfGifts = ["game", "videoconsole", "computer"];
    const reindeers = [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(5);
  });
  test("Test #06", () => {
    const packOfGifts = ["music"];
    const reindeers = [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(26);
  });
});
