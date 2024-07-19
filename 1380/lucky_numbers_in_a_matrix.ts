function luckyNumbers(matrix: number[][]): number[] {
  const rows = matrix.map((row) => Math.min(...row));
  const cols = Array.from(
    { length: matrix[0].length },
    (_, i) => Math.max(...matrix.map((row) => row[i])),
  );
  return Array.from(new Set(rows).intersection(new Set(cols)));
}

declare global {
  interface Set<T> {
    intersection(set: Set<T>): Set<T>;
  }
}

Set.prototype.intersection = function <T>(set: Set<T>): Set<T> {
  return new Set([...this].filter((x) => set.has(x)));
};
