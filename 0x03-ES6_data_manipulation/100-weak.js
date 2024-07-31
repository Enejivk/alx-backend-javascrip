export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const callCount = weakMap.get(endpoint) + 1;

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, callCount);
}
