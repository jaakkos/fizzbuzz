import assert from 'node:assert/strict';
import test from 'node:test';
import { reverseWords } from './reverse-words.mjs';

test('reverses the words of a sentence', () => {
  assert.equal(reverseWords('hello world'), 'world hello');
});

test('ignores extra whitespace around and between words', () => {
  assert.equal(reverseWords('  a  b c '), 'c b a');
});

test('treats tabs and newlines as word separators', () => {
  assert.equal(reverseWords('one\ttwo\nthree'), 'three two one');
});

test('returns a single word unchanged', () => {
  assert.equal(reverseWords('solo'), 'solo');
});

test('returns an empty string for empty and all-whitespace input', () => {
  assert.equal(reverseWords(''), '');
  assert.equal(reverseWords('   '), '');
  assert.equal(reverseWords('\t\n '), '');
});

test('preserves case, punctuation, and Unicode within words', () => {
  assert.equal(reverseWords('Hello, World!'), 'World! Hello,');
  assert.equal(reverseWords('Été déjà vu'), 'vu déjà Été');
});

test('rejects non-string inputs with TypeError', () => {
  for (const input of [
    null, undefined, 0, NaN, true, 7n, {}, [], Symbol('text'), new String('a b'),
  ]) {
    assert.throws(() => reverseWords(input), TypeError);
  }
});
