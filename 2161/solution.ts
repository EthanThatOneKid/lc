function pivotArray(nums: number[], pivot: number): number[] {
  const left: number[] = [];
  const right: number[] = [];
  const pivots: number[] = [];
  for (const num of nums) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else if (num === pivot) {
      pivots.push(num);
    } else {
      throw new Error("Unexpected num");
    }
  }

  return [...left, ...pivots, ...right];
}
