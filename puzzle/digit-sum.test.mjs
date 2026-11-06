import assert from 'node:assert/strict';
import test from 'node:test';
import { digitSum } from './digit-sum.mjs';

test('sums the decimal digits of non-negative integers', () => {
  assert.equal(digitSum(0), 0);
  assert.equal(digitSum(7), 7);
  assert.equal(digitSum(1234), 10);
});

test('rejects negative numbers, non-integers and non-numbers', () => {
  for (const input of [
    -1, -1234, 1.5, 0.1, NaN, Infinity, -Infinity,
    '123', null, undefined, true, 7n, {}, [], Symbol('7'),
  ]) {
    assert.throws(() => digitSum(input), RangeError);
  }
});
