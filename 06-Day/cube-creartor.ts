export function createCube(size: number): string {
  const topLeft = '/\\'
  const topRight = '_\\'
  const botLeft = '\\/'
  const botRight = '_/'
  const space = ' '
  const rows = new Array<string>()
  for (let row = 1; row <= size; row++) {
    rows.push( `${space.repeat(size - row)}${topLeft.repeat(row)}${topRight.repeat(size)}`)
  }
  for (let row = 0; row < size; row++) {
    rows.push(`${space.repeat(row)}${botLeft.repeat(size -row)}${botRight.repeat(size)}`)
  }
  return rows.join('\n')
}

