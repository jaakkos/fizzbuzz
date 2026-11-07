import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindrome } from './is-palindrome.mjs';

test('recognizes palindromic non-negative integers', () => {
  for (const n of [0, 1, 9, 121, 1221]) {
    assert.equal(isPalindrome(n), true);
  }
});

test('recognizes non-palindromic non-negative integers', () => {
  for (const n of [10, 123, 1234]) {
    assert.equal(isPalindrome(n), false);
  }
});

test('rejects negative numbers, non-integers and non-numbers', () => {
  for (const input of [
    -1, -1234, 1.5, 0.1, NaN, Infinity, -Infinity,
    '121', null, undefined, true, 7n, {}, [], Symbol('0'),
  ]) {
    assert.throws(() => isPalindrome(input), RangeError);
  }
});
