export function toRoman(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    throw new RangeError('Expected an integer from 1 to 3999');
  }

  const numerals = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let result = '';
  for (const [value, symbol] of numerals) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}
