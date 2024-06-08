function checkSubarraySum(nums: number[], k: number): boolean {
  return nums.reduce(
    ({ j, sums, found }, num, i) => ({
      j: (j + num) % k,
      sums: sums.has((j + num) % k) ? sums : sums.set((j + num) % k, i),
      found: found ||
        (sums.has((j + num) % k) && i - sums.get((j + num) % k)! > 1),
    }),
    { j: 0, sums: new Map<number, number>([[0, -1]]), found: false },
  ).found;
}
