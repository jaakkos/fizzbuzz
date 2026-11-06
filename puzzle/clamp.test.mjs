import assert from 'node:assert/strict';
import test from 'node:test';
import { clamp } from './clamp.mjs';

test('returns a number within the range unchanged', () => {
  assert.equal(clamp(5, 1, 10), 5);
});

test('limits a number below the range to the minimum', () => {
  assert.equal(clamp(-3, 1, 10), 1);
});

test('limits a number above the range to the maximum', () => {
  assert.equal(clamp(42, 1, 10), 10);
});

test('rejects a minimum greater than the maximum', () => {
  assert.throws(() => clamp(1, 10, 1), RangeError);
});
