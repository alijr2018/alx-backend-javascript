export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const x = weakMap.get(endpoint);
    if (x >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, x + 1);
    }
  }
}
