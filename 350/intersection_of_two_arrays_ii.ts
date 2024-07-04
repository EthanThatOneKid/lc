function intersect(nums1: number[], nums2: number[]): number[] {
  return nums2.reduce(
    (
      { result, map }: { result: number[]; map: Map<number, number> },
      num,
      _,
      __,
      n = map.get(num),
    ) =>
      n !== undefined && n > 0
        ? {
          result: [...result, num],
          map: map.set(num, n - 1),
        }
        : { result, map },
    {
      result: [],
      map: nums1.reduce(
        (map, num) => map.set(num, (map.get(num) ?? 0) + 1),
        new Map<number, number>(),
      ),
    },
  ).result;
}
