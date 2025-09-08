function longestConsecutive(nums: number[]): number {
  let longest = 0;
  const numsSet = new Set(nums);
  for (const num of numsSet) {
    if (numsSet.has(num - 1)) {
      continue;
    }

    let length = 1;
    while (numsSet.has(num + length)) {
      length++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}
