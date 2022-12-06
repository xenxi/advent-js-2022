import { countHours } from "../../02-Day/hour-counter";

test("Test #02", () => {
  const year = 2023;
  const days = ["01/06", "04/01", "12/25"];

  const result = countHours(year, days);

  expect(result).toBe(4);
});
test("Test #03", () => {
  const year = 2022;
  const days = ["01/06", "04/01", "12/25"];

  const result = countHours(year, days);

  expect(result).toBe(4);
});
test("Test #04", () => {
  const year = 1985;
  const days = [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ];

  const result = countHours(year, days);

  expect(result).toBe(10);
});
test("Test #05", () => {
  const year = 2000;
  const days = ["01/01"];

  const result = countHours(year, days);

  expect(result).toBe(0);
});
