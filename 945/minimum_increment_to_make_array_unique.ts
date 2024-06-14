// Polyfill for Array.prototype.with method.s
Array.prototype.with = function <T>(this: T[], i: number, value: T): T[] {
  this[i] = value;
  return this;
};

// Polyfill for Array.prototype.toSorted method.
Array.prototype.toSorted = function <T>(
  this: T[],
  compareFn: (a: T, b: T) => number,
): T[] {
  return this.slice().sort(compareFn);
};

declare global {
  interface Array<T> {
    with(i: number, value: T): T[];
    toSorted(compareFn: (a: T, b: T) => number): T[];
  }
}

function minIncrementForUnique(nums: number[]): number {
  return Array.from({ length: nums.length - 1 })
    .reduce<{ total: number; nums: number[] }>(
      ({ total, nums }, _, i) => (nums[i + 1] > nums[i] ? { total, nums } : {
        total: total + nums[i] - nums[i + 1] + 1,
        nums: nums.with(i + 1, nums[i] + 1),
      }),
      {
        total: 0,
        nums: nums.toSorted((a, b) => a - b),
      },
    )
    .total;
}
