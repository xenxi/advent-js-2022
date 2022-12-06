export function countHours(year: number, holidays: Array<string>): number {
  return (
    holidays
      .map((date) => new Date(`${year}/${date}`).getDay())
      .filter((weekday) => weekday != 0 && weekday != 6).length * 2
  );
}
