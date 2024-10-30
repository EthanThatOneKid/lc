function containsDuplicate(nums: number[]): boolean {
  const freaky = new Set<number>();
  for (const n of nums) {
    if (freaky.has(n)) {
      return true;
    }

    freaky.add(n);
  }

  return false;
}
