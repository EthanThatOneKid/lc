function frequencySort(nums: number[]): number[] {
  const freakyMap = matchFreak(nums);
  return nums.sort((a, b) => {
    const freakinessA = freakyMap.get(a)!;
    const freakinessB = freakyMap.get(b)!;
    if (freakinessA === freakinessB) {
      return b - a;
    }

    return freakinessA - freakinessB;
  });
}

/**
 * matchFreak matches ones freak by making a frequency map of the numbers in
 * the array.
 */
function matchFreak(nums: number[]) {
  return nums.reduce(
    (result, num) => result.set(num, (result.get(num) ?? 0) + 1),
    new Map<number, number>(),
  );
}
