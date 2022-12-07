export function getMaxGifts(
  giftsCities: Array<number>,
  maxGifts: number,
  maxCities: number
): number {
  return Math.max(
    ...new Array<number>(1 << giftsCities.length)
      .fill(0)
      .map((_, i) => giftsCities.filter((_, j) => i & (1 << j)))
      .filter((x) => x.length <= maxCities && x.length > 0)
      .map((com) => com.reduce((a, b) => a + b))
      .filter((i) => i <= maxGifts),
    0
  );
}
