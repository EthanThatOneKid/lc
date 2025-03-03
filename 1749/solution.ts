function maxAbsoluteSum(nums: number[]): number {
  return nums.reduce(
    (
      { max, min, sum },
      num,
      _,
      __,
      currentSum = sum + num,
      currentMax = Math.max(max, currentSum),
      currentMin = Math.min(min, currentSum)
    ) => ({
      max: currentMax,
      min: currentMin,
      sum: currentSum,
      absoluteSum: currentMax - currentMin,
    }),
    { max: 0, min: 0, sum: 0, absoluteSum: 0 }
  ).absoluteSum;
}
