export function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = new Set<number>();
  for (const n of nums2) {
    if (set1.has(n)) {
      result.add(n);
    }
  }

  return [...result];
}
