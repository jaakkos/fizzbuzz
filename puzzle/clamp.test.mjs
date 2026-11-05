import assert from 'node:assert/strict';
import test from 'node:test';
import { clamp } from './clamp.mjs';

test('returns a number within the range unchanged', () => {
  assert.equal(clamp(5, 1, 10), 5);
});

test('returns the minimum for a number below the range', () => {
  assert.equal(clamp(-3, 1, 10), 1);
});

test('returns the maximum for a number above the range', () => {
  assert.equal(clamp(42, 1, 10), 10);
});

test('throws RangeError when the minimum exceeds the maximum', () => {
  assert.throws(() => clamp(1, 10, 1), RangeError);
});
