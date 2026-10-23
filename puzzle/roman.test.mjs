import assert from 'node:assert/strict';
import test from 'node:test';
import { toRoman } from './roman.mjs';

test('converts integers to standard Roman numerals', () => {
  for (const [number, roman] of [
    [1, 'I'], [4, 'IV'], [9, 'IX'], [40, 'XL'], [90, 'XC'],
    [400, 'CD'], [944, 'CMXLIV'], [1994, 'MCMXCIV'],
    [3888, 'MMMDCCCLXXXVIII'], [3999, 'MMMCMXCIX'],
  ]) {
    assert.equal(toRoman(number), roman);
  }
});

test('rejects inputs outside the integer range 1 through 3999', () => {
  for (const input of [
    0, -1, 4000, 2.5, NaN, Infinity, -Infinity,
    '1', null, undefined, true, 1n, {}, [], Symbol('1'),
  ]) {
    assert.throws(() => toRoman(input), RangeError);
  }
});
