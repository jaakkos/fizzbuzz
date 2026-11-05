export function absDiff(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }

  return Math.abs(a - b);
}
