function numberOfSubarrays(nums: number[], k: number): number {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums: number[], k: number): number {
  let res = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    k -= nums[right] % 2;
    while (k < 0) {
      k += nums[left] % 2;
      left++;
    }
    res += right - left + 1;
  }

  return res;
}
