function maxAbsoluteSum(nums: number[]): number {
  let max = 0;
  let min = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, sum);
    min = Math.min(min, sum);
  }

  return max - min;
}
