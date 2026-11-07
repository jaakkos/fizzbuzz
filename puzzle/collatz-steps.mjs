export function collatzSteps(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new RangeError('Expected a positive integer');
  }

  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps += 1;
  }
  return steps;
}
