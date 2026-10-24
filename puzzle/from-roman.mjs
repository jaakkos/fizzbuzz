import { toRoman } from './roman.mjs';

const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

export function fromRoman(text) {
  if (typeof text !== 'string' || !/^[IVXLCDM]+$/.test(text)) {
    throw new RangeError('Expected a standard Roman numeral from I to MMMCMXCIX');
  }

  let result = 0;
  for (let i = 0; i < text.length; i++) {
    const value = values[text[i]];
    result += value < values[text[i + 1]] ? -value : value;
  }

  if (result < 1 || result > 3999 || toRoman(result) !== text) {
    throw new RangeError('Expected a standard Roman numeral from I to MMMCMXCIX');
  }
  return result;
}
