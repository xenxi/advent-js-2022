export function distributeGifts(
  packOfGifts: Array<string>,
  reindeers: Array<string>
): number {
  const maximumWeight = reindeers.join('').length * 2
  const packWeight =  packOfGifts.join('').length
  return Math.trunc(maximumWeight / packWeight)
}
