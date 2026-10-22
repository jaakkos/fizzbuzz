export function fizzbuzz(limit) {
  const values = [];

  for (let number = 1; number <= limit; number += 1) {
    let value = '';
    if (number % 3 === 0) value += 'Fizz';
    if (number % 5 === 0) value += 'Buzz';
    values.push(value || String(number));
  }

  return values.join(',');
}
