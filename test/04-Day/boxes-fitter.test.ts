import { fitsInOneBox } from "../../04-Day/boxes-fitter";

test("Test #02", () => {
  const boxes = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ];

  const result = fitsInOneBox(boxes);

  expect(result).toBeFalsy();
});

test("Test #03", () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ];

  const result = fitsInOneBox(boxes);

  expect(result).toBeTruthy();
});
test("Test #04", () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ];

  const result = fitsInOneBox(boxes);

  expect(result).toBeFalsy();
});
test("Test #05", () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ];

  const result = fitsInOneBox(boxes);

  expect(result).toBeFalsy();
});
test("Test #06", () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ];

  const result = fitsInOneBox(boxes);

  expect(result).toBeTruthy();
});
