export function fizzbuzz(limit) {
  if (!Number.isInteger(limit) || limit < 0) {
    throw new RangeError('limit must be a non-negative integer');
  }

  const values = [];

  for (let number = 1; number <= limit; number += 1) {
    let value = '';
    if (number % 3 === 0) value += 'Fizz';
    if (number % 5 === 0) value += 'Buzz';
    values.push(value || String(number));
  }

  return values.join(',');
}
