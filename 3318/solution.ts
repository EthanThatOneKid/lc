function findXSum(nums: number[], k: number, x: number): number[] {
  const result: number[] = [];
  for (const subarray of subarrays(nums, k)) {
    const frequencyMap = new Map<number, number>();
    for (const num of subarray) {
      const frequency = (frequencyMap.get(num) ?? 0) + 1;
      frequencyMap.set(num, frequency);
    }

    const sortedByFrequency = Array.from(frequencyMap.entries())
      .toSorted(
        ([numA, frequencyA], [numB, frequencyB]) => {
          const frequencyDelta = frequencyB - frequencyA;
          if (frequencyDelta === 0) {
            const numDelta = numB - numA;
            return numDelta;
          }

          return frequencyDelta;
        },
      );

    const topX = sortedByFrequency.slice(0, x);
    const topXSum = topX.reduce(
      (acc, [num, frequency]) => acc + num * frequency,
      0,
    );
    result.push(topXSum);
  }

  return result;
}

function* subarrays(nums: number[], k: number) {
  for (let i = 0; i < nums.length - k + 1; i++) {
    yield nums.slice(i, i + k);
  }
}
