export function isLeapYear(year) {
  if (!Number.isInteger(year)) {
    throw new TypeError('year must be an integer');
  }
  if (year < 1) {
    throw new RangeError('year must be at least 1');
  }
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
