export function getCommon(nums1: number[], nums2: number[]): number {
  const seen1 = new Set<number>();
  const seen2 = new Set<number>();
  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    const one = nums1.at(i);
    const two = nums2.at(i);
    if (one !== undefined) {
      seen1.add(one);
    }

    if (two !== undefined) {
      seen2.add(two);
    }

    if (one !== undefined && seen2.has(one)) {
      return one;
    }

    if (two !== undefined && seen1.has(two)) {
      return two;
    }
  }

  return -1;
}

export function getCommon_oneLiner(nums1: number[], nums2: number[]): number {
  return Array.from(
    { length: Math.max(nums1.length, nums2.length) },
    (_, i) => [nums1.at(i), nums2.at(i)],
  )
    .reduce(
      ({ seen1, seen2, result }, [one, two]) => (
        result !== -1 ? { seen1, seen2, result } : {
          seen1: one !== undefined ? seen1.add(one) : seen1,
          seen2: two !== undefined ? seen2.add(two) : seen2,
          result: one !== undefined && seen2.has(one)
            ? one
            : two !== undefined && seen1.has(two)
            ? two
            : -1,
        }
      ),
      {
        seen1: new Set<number>(),
        seen2: new Set<number>(),
        result: -1,
      },
    ).result;
}

export function getCommon_simple(nums1: number[], nums2: number[]): number {
  const common = new Set(nums1);
  return nums2.find((n) => common.has(n)) ?? -1;
}
