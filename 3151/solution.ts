function isArraySpecial(nums: number[]): boolean {
  let parity = 0;
  for (let i = 0; i < nums.length; i++) {
    const subsequentParity = nums[i] % 2 === 0 ? -1 : 1;
    if (subsequentParity === parity) {
      return false;
    }

    parity = subsequentParity;
  }

  return true;
}
