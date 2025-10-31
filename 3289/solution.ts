function getSneakyNumbers(nums: number[]): number[] {
  const result: number[] = [];
  const frequencyMap = new Map<number, number>();
  for (const n of nums) {
    const frequency = (frequencyMap.get(n) ?? 0) + 1;
    frequencyMap.set(n, frequency);
    if (frequency === 2) {
      result.push(n);
    }

    if (result.length === 2) {
      return result;
    }
  }

  throw new Error("failed");
}
