export default function iterateThroughObject(reportWithIterator) {
  const results = [];
  for (const result of reportWithIterator) {
    results.push(result);
  }
  return results.join(' | ');
}
