import assert from 'node:assert/strict';
import test from 'node:test';
import { collatzSteps } from './collatz-steps.mjs';

test('returns the number of Collatz steps needed to reach one', () => {
  assert.equal(collatzSteps(1), 0);
  assert.equal(collatzSteps(6), 8);
  assert.equal(collatzSteps(27), 111);
});

test('rejects values that are not positive integers', () => {
  for (const n of [0, -1, 1.5, '5']) {
    assert.throws(() => collatzSteps(n), RangeError);
  }
});
