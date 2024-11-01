export function subsets(
  nums: number[],
  memo: number[] = [],
  i = 0,
): number[][] {
  return i === nums.length ? [memo] : subsets(nums, memo, i + 1).concat(
    subsets(nums, memo.concat([nums[i]]), i + 1),
  );
}
