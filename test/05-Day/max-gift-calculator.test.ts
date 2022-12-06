import { getMaxGifts } from "../../05-Day/max-gift-calculator";
describe("Day 05", () => {
  test("Test #02", () => {
    const giftsCities = [12, 3, 11, 5, 7];
    const maxGifts = 20;
    const maxCities = 3;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(20);
  });
  test("Test #03", () => {
    const giftsCities = [50];
    const maxGifts = 15;
    const maxCities = 1;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(0);
  });
  test("Test #04", () => {
    const giftsCities = [50];
    const maxGifts = 100;
    const maxCities = 1;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(50);
  });
  test("Test #05", () => {
    const giftsCities = [50, 70];
    const maxGifts = 100;
    const maxCities = 1;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(70);
  });
  test("Test #06", () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 2;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(100);
  });
  test("Test #07", () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 3;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(100);
  });
  test("Test #08", () => {
    const giftsCities = [50, 10, 40, 1000, 500, 200];
    const maxGifts = 199;
    const maxCities = 4;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(100);
  });
  test("Test #09", () => {
    const giftsCities = [50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const maxGifts = 1000;
    const maxCities = 1000;

    const result = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(result).toBe(115);
  });
});
