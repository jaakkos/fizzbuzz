import assert from 'node:assert/strict';
import test from 'node:test';
import { isLeapYear } from './leap-year.mjs';

test('identifies Gregorian leap years', () => {
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2000), true);
  assert.equal(isLeapYear(2024), true);
  assert.equal(isLeapYear(2023), false);
});

test('accepts year 1', () => {
  assert.equal(isLeapYear(1), false);
});

test('rejects years below 1 with RangeError', () => {
  assert.throws(() => isLeapYear(0), RangeError);
  assert.throws(() => isLeapYear(-1), RangeError);
  assert.throws(() => isLeapYear(-400), RangeError);
});

test('rejects non-integers with TypeError', () => {
  for (const value of [1.5, -1.5, NaN, Infinity, -Infinity]) {
    assert.throws(() => isLeapYear(value), TypeError);
  }
});

test('rejects non-number inputs with TypeError', () => {
  for (const value of ['2024', true, null, undefined, {}, [], 2024n, Symbol('2024')]) {
    assert.throws(() => isLeapYear(value), TypeError);
  }
});
