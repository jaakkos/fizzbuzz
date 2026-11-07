import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindrome } from './is-palindrome.mjs';

test('identifies palindromic non-negative integers', () => {
  assert.equal(isPalindrome(0), true);
  assert.equal(isPalindrome(121), true);
  assert.equal(isPalindrome(4283929673773769293824), true);
  assert.equal(isPalindrome(123), false);
  assert.equal(isPalindrome(10), false);
});

test('rejects negative numbers, non-integers and non-numbers', () => {
  for (const input of [
    -1, -121, 1.5, 0.1, NaN, Infinity, -Infinity,
    '121', null, undefined, true, 121n, {}, [], Symbol('121'),
  ]) {
    assert.throws(() => isPalindrome(input), RangeError);
  }
});
