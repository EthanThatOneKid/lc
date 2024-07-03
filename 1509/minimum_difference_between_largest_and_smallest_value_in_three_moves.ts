function minDifference(nums: number[]): number {
  return nums.length <= 4 ? 0 : Math.min(
    ...nums.toSorted((a, b) => a - b)
      .map((_, i, arr) => arr[arr.length - 4 + i] - arr[i])
      .slice(0, 4),
  );
}

// Polyfill for Array.prototype.toSorted method.
Array.prototype.toSorted = function <T>(
  this: T[],
  compareFn: (a: T, b: T) => number,
): T[] {
  return this.slice().sort(compareFn);
};

declare global {
  interface Array<T> {
    toSorted(compareFn: (a: T, b: T) => number): T[];
  }
}
