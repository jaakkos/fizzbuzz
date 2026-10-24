import assert from 'node:assert/strict';
import test from 'node:test';
import { fromRoman } from './from-roman.mjs';
import { toRoman } from './roman.mjs';

test('parses standard Roman numerals', () => {
  assert.equal(fromRoman('IV'), 4);
  assert.equal(fromRoman('MCMXCIV'), 1994);
  assert.equal(fromRoman('MMMCMXCIX'), 3999);
});

test('rejects nonstandard numerals and non-string inputs', () => {
  for (const input of [
    'IIII', 'IC', '', 'iv', 'MMMM', 'VX', 'IIV', 'IL', 'VV',
    ' IV', 'IV ', 'IV\n', 'Ⅳ', 'ABC',
    4, null, undefined, true, 4n, {}, [], Symbol('IV'),
  ]) {
    assert.throws(() => fromRoman(input), RangeError);
  }
});

test('round-trips every integer from 1 through 3999', () => {
  for (let n = 1; n <= 3999; n++) {
    assert.equal(fromRoman(toRoman(n)), n);
  }
});
