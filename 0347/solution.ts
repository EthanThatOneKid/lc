function topKFrequent(nums: number[], k: number): number[] {
  return sortByFrequency(makeFreaky(nums)).slice(0, k).map(([n]) => n);
}

function sortByFrequency(freaky: Map<number, number>): [number, number][] {
  return Array.from(freaky.entries()).toSorted((a, b) => b[1] - a[1]);
}

function makeFreaky(nums: number[]): Map<number, number> {
  const freaky = new Map<number, number>();
  for (const n of nums) {
    freaky.set(n, (freaky.get(n) ?? 0) + 1);
  }

  return freaky;
}

// Polyfill for Array.prototype.toSorted method.
Array.prototype.toSorted = function <T>(
  this: T[],
  compareFn?: (a: T, b: T) => number,
): T[] {
  return this.slice().sort(compareFn);
};

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}
