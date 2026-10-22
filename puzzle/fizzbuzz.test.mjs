import assert from 'node:assert/strict';
import test from 'node:test';
import { fizzbuzz } from './fizzbuzz.mjs';

test('returns the classic FizzBuzz sequence from 1 through 15', () => {
  assert.equal(
    fizzbuzz(15),
    '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz',
  );
});
