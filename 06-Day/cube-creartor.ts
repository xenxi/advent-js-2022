export function createCube(size: number): string {
  const topLeft = '/\\'
  const topRight = '_\\'
  const botLeft = '\\/'
  const botRight = '_/'
  return `${topLeft}${topRight}\n${botLeft}${botRight}`
}