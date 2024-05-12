export function largestLocal(grid: number[][], k = 3): number[][] {
  return Array.from(
    { length: grid.length - (k - 1) },
    (_, i) =>
      Array.from(
        { length: grid[i].length - (k - 1) },
        (_, j) =>
          Math.max(
            ...grid
              .slice(i, i + k)
              .map((row) => row.slice(j, j + k))
              .flat(),
          ),
      ),
  );
}
