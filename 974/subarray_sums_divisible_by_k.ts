export function subarraysDivByK(nums: number[], k: number): number {
  return nums.reduce(
    ({ result, prefixSum, prefixMap }, n) => {
      prefixSum += n;
      let remainder = prefixSum % k;
      if (prefixSum < 0 && remainder !== 0) {
        remainder += k;
      }

      const prefix = prefixMap.get(remainder) ?? 0;
      result += prefix;
      prefixMap.set(remainder, prefix + 1);
      return { result, prefixSum, prefixMap };
    },
    { result: 0, prefixSum: 0, prefixMap: new Map<number, number>([[0, 1]]) },
  ).result;
}
