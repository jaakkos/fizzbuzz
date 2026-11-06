import assert from 'node:assert/strict';
import test from 'node:test';
import { double } from './double.mjs';
import { fizzbuzz } from './fizzbuzz.mjs';

test('returns an empty sequence for zero', () => {
  assert.equal(fizzbuzz(0), '');
});

test('rejects limits that are not non-negative integers', () => {
  for (const limit of [-3, NaN, 2.5, Infinity, '15']) {
    assert.throws(() => fizzbuzz(limit), RangeError);
  }
});

test('returns the classic FizzBuzz sequence from 1 through 15', () => {
  assert.equal(
    fizzbuzz(15),
    '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz',
  );
});

test('doubles a positive number', () => {
  assert.equal(double(2), 4);
});

test('doubles zero', () => {
  assert.equal(double(0), 0);
});

test('doubles a negative number', () => {
  assert.equal(double(-3), -6);
});
