export function specialArray(nums: number[]): number {
  return nums
    .toSorted((a, b) => a - b)
    .reduce((acc, num, i) =>
      num >= nums.length - i &&
        (i === 0 || nums[i - 1] < nums.length - i)
        ? nums.length - i
        : acc, -1);
}
