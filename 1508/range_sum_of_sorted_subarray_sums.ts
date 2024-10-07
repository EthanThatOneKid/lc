function rangeSum(
  nums: number[],
  n: number,
  left: number,
  right: number,
): number {
  const mod = 1e9 + 7;
  const sums = new Array<number>(n + 1).fill(0);
  const sortedSums = new Array<number>(n * (n + 1) / 2);
  let index = 0;

  for (let i = 1; i <= n; i++) {
    sums[i] = sums[i - 1] + nums[i - 1];
    sortedSums[index++] = nums[i - 1];
    for (let j = i + 1; j <= n; j++) {
      sums[j] = sums[j - 1] + nums[j - 1];
      sortedSums[index++] = sums[j] - sums[i - 1];
    }
  }

  sortedSums.sort((a, b) => a - b);

  let result = 0;
  for (let i = left - 1; i < right; i++) {
    result = (result + sortedSums[i]) % mod;
  }

  return result;
}
