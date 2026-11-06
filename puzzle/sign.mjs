export function sign(n) {
  if (!Number.isFinite(n)) {
    throw new TypeError('n must be a finite number');
  }

  return n === 0 ? 0 : n < 0 ? -1 : 1;
}
