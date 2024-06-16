function minPatches(
  nums: number[],
  n: number,
  patches = 0,
  i = 0,
  miss = 1,
): number {
  return miss > n ? patches : minPatches(
    nums,
    n,
    patches + (i >= nums.length || nums[i] > miss ? 1 : 0),
    i + (i < nums.length && nums[i] <= miss ? 1 : 0),
    miss + (i < nums.length && nums[i] <= miss ? nums[i] : miss),
  );
}
