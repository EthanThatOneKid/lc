function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longestStreak = 0;
  for (const n of numsSet) {
    const isStartOfStreak = !numsSet.has(n - 1);
    if (!isStartOfStreak) {
      continue;
    }

    let streak = 0;
    while (numsSet.has(n + streak++)) {
      longestStreak = Math.max(longestStreak, streak);
    }
  }

  return longestStreak;
}
