export function isPalindrome(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string');
  }

  const characters = [...text.toLowerCase().replace(/[^\p{L}\p{Nd}]/gu, '')];
  return characters.every((character, index) => character === characters[characters.length - 1 - index]);
}
