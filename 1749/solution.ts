function maxAbsoluteSum(nums: number[]): number {
  return nums.reduce(
    ({ max, min, sum }, num) => {
      sum += num;
      max = Math.max(max, sum);
      min = Math.min(min, sum);
      return { max, min, sum, absoluteSum: max - min };
    },
    { max: 0, min: 0, sum: 0, absoluteSum: 0 }
  ).absoluteSum;
}
