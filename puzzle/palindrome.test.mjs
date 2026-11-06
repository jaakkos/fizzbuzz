import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindrome } from './palindrome.mjs';

test('recognizes palindromes and non-palindromes, including digits', () => {
  for (const text of ['a', 'abba', 'racecar', '12321', 'a1a']) {
    assert.equal(isPalindrome(text), true);
  }
  for (const text of ['ab', 'hello', '123', 'a1b']) {
    assert.equal(isPalindrome(text), false);
  }
});

test('ignores case and characters other than letters and digits', () => {
  assert.equal(isPalindrome('RaceCar'), true);
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('0, p!'), false);
});

test('accepts empty strings and strings with no letters or digits', () => {
  assert.equal(isPalindrome(''), true);
  assert.equal(isPalindrome(' !,\t\n'), true);
});

test('compares Unicode letters and decimal digits as code points', () => {
  assert.equal(isPalindrome('Été'), true);
  assert.equal(isPalindrome('étéa'), false);
  assert.equal(isPalindrome('١٢١'), true);
  assert.equal(isPalindrome('١٢'), false);
  assert.equal(isPalindrome('\u{10400}a\u{10428}'), true);
  assert.equal(isPalindrome('\u{10400}a'), false);
});

test('rejects non-string inputs with TypeError', () => {
  for (const input of [
    null, undefined, 0, NaN, true, 7n, {}, [], Symbol('text'), new String('aba'),
  ]) {
    assert.throws(() => isPalindrome(input), TypeError);
  }
});
