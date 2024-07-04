function threeConsecutiveOdds(arr: number[]): boolean {
  return arr.some((_, i) =>
    arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1
  );
}
