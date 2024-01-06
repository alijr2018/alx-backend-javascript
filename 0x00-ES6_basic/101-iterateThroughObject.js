export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const result of reportWithIterator) {
    result.push(result);
  }
  return result.join(' | ');
}
