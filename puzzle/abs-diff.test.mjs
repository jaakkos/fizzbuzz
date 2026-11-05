import assert from 'node:assert/strict';
import test from 'node:test';
import { absDiff } from './abs-diff.mjs';

test('returns the absolute difference of finite numbers', () => {
  assert.equal(absDiff(3, 10), 7);
  assert.equal(absDiff(10, 3), 7);
  assert.equal(absDiff(-2, 2), 4);
  assert.equal(absDiff(2, 2), 0);
  assert.equal(absDiff(1.5, 0.25), 1.25);
});

test('rejects either argument when it is not a finite number', () => {
  for (const value of [NaN, Infinity, -Infinity, '1', null, undefined, true, {}, 1n]) {
    assert.throws(() => absDiff(value, 2), TypeError);
    assert.throws(() => absDiff(1, value), TypeError);
  }
});
