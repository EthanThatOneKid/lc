export function subarraysDivByK(nums: number[], k: number): number {
  return nums.reduce(
    ({ result, prefixSum, prefixMap }, n) => ({
      prefixSum: prefixSum + n,
      result: result + ((prefixMap.get(
        ((prefixSum + n) % k) +
          (((prefixSum + n) < 0 && (prefixSum + n) % k !== 0) ? k : 0),
      )) ?? 0),
      prefixMap: prefixMap.set(
        ((prefixSum + n) % k) +
          (((prefixSum + n) < 0 && (prefixSum + n) % k !== 0) ? k : 0),
        (prefixMap.get(
          ((prefixSum + n) % k) +
            (((prefixSum + n) < 0 && (prefixSum + n) % k !== 0) ? k : 0),
        ) ?? 0) + 1,
      ),
    }),
    {
      result: 0,
      prefixSum: 0,
      prefixMap: new Map<number, number>([[0, 1]]),
    },
  ).result;
}
