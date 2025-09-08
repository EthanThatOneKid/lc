function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    const j = n - i;
    if (!`${i}${j}`.includes("0")) {
      return [i, j];
    }
  }

  throw new Error("No solution");
}
