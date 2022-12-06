export function getMaxGifts(
  giftsCities: Array<number>,
  maxGifts: number,
  maxCities: number
): number {
  console.log(giftsCities.length, 1 << giftsCities.length);
  return (
    new Array(1 << giftsCities.length)
      .fill(0)
      .map((g, i) => giftsCities.filter((g2, j) => i & (1 << j)))
      .filter((x) => x.length <= maxCities && x.length > 0)
      .map((com) => com.reduce((a, b) => a + b))
      .filter((i) => i <= maxGifts)
      .sort((a, b) => b - a)[0] || 0
  );
}
