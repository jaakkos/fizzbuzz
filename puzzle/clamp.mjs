export function clamp(n, min, max) {
  if (min > max) {
    throw new RangeError('min must not exceed max');
  }

  return Math.min(Math.max(n, min), max);
}
