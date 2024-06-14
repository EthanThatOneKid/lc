export function minIncrementForUnique(nums: number[]): number {
  let total = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const nextValue = nums[i - 1] + 1;
      total += nextValue - nums[i];
      nums[i] = nextValue;
    }
  }

  return total;
}
