function minPatches(
  nums: number[],
  n: number,
  patches = 0,
  i = 0,
  miss = 1,
): number {
  return miss > n
    ? patches
    : (i < nums.length && nums[i] <= miss)
    ? minPatches(nums, n, patches, i + 1, miss + nums[i])
    : minPatches(nums, n, patches + 1, i, miss + miss);
}
