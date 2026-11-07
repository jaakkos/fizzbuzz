export function isPalindrome(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('Expected a non-negative integer');
  }

  const digits = String(n);
  return digits === digits.split('').reverse().join('');
}
