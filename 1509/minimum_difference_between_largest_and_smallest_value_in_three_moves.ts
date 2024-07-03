function minDifference(nums: number[]): number {
  if (nums.length <= 4) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  return Math.min(
    nums[nums.length - 4] - nums[0],
    nums[nums.length - 3] - nums[1],
    nums[nums.length - 2] - nums[2],
    nums[nums.length - 1] - nums[3],
  );
}
