export function isPalindrome(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('Expected a non-negative integer');
  }

  const digits = BigInt(n).toString();
  return digits === digits.split('').reverse().join('');
}
