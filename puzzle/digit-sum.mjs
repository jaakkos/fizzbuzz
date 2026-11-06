export function digitSum(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('Expected a non-negative integer');
  }

  let sum = 0;
  for (const digit of String(n)) {
    sum += Number(digit);
  }
  return sum;
}
