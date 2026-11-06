import assert from 'node:assert/strict';
import test from 'node:test';
import { sign } from './sign.mjs';

test('returns the sign of finite numbers', () => {
  assert.equal(sign(-7), -1);
  assert.equal(sign(0), 0);
  assert.equal(sign(-0), 0);
  assert.equal(sign(3), 1);
  assert.equal(sign(-0.5), -1);
  assert.equal(sign(0.5), 1);
});

test('rejects values that are not finite numbers', () => {
  for (const value of [NaN, Infinity, -Infinity, '2', null, undefined, true, {}, [], 2n, Symbol('2')]) {
    assert.throws(() => sign(value), TypeError);
  }
});
