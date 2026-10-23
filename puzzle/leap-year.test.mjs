import assert from 'node:assert/strict';
import test from 'node:test';
import { isLeapYear } from './leap-year.mjs';

test('identifies Gregorian leap years', () => {
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2000), true);
  assert.equal(isLeapYear(2024), true);
  assert.equal(isLeapYear(2023), false);
});
