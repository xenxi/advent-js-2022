export function getGiftsToRefill(
  a1: Array<string>,
  a2: Array<string>,
  a3: Array<string>
): Array<string> {
  const distinct = (items: Array<string>) =>
    items.filter((item, i) => items.indexOf(item) === i);
  const group = (items: Array<string>) =>
    items.reduce((g: { [id: string]: number }, gif) => {
      g[gif] = (g[gif] || 0) + 1;
      return g;
    }, {});
  const gifts = distinct(a1).concat(distinct(a2)).concat(distinct(a3));
  const grouped = group(gifts);
  return Object.keys(grouped).filter((gif) => grouped[gif] === 1);
}
