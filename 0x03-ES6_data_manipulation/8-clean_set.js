export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.slice(startString.length);
      if (valueSubStr) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
