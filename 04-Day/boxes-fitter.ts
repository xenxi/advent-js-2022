export function fitsInOneBox(boxes: Array<Box>) {
  const biggerSide = (box: Box): number =>
    Math.max(...(Object.values(box) as Array<number>));
  const sortBoxes = (a: Box, b: Box = { l: 0, w: 0, h: 0 }): number =>
    biggerSide(a) < biggerSide(b) ? -1 : 1;
  const boxFit = (a: Box, b: Box): boolean =>
    a.h < b.h && a.l < b.l && a.w < b.w;

  return (
    boxes.sort(sortBoxes).filter((box: Box, index: number) => {
      const nextIndex = index + 1;
      if (nextIndex >= boxes.length) return true;
      return boxFit(box, boxes[nextIndex]);
    }).length == boxes.length
  );
}
interface Box {
  l: number;
  w: number;
  h: number;
}
