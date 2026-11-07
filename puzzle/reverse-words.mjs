export function reverseWords(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string');
  }

  const trimmed = text.trim();
  if (trimmed === '') return '';

  return trimmed.split(/\s+/).reverse().join(' ');
}
