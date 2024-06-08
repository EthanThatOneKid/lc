function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) {
    return false;
  }

  let j = 0;
  const sums = new Map<number, number>([[0, -1]]);
  return nums.some((num, i) => {
    j = (j + num) % k;
    if (!sums.has(j)) {
      sums.set(j, i);
      return false;
    }

    if (i - sums.get(j)! > 1) {
      return true;
    }

    return false;
  });
}
