function luckyNumbers(matrix: number[][]): number[] {
  return Array.from(
    new Set(matrix.map((row) => Math.min(...row)))
      .intersection(
        new Set(Array.from(
          { length: matrix[0].length },
          (_, i) => Math.max(...matrix.map((row) => row[i])),
        )),
      ),
  );
}

declare global {
  interface Set<T> {
    intersection(set: Set<T>): Set<T>;
  }
}

Set.prototype.intersection = function <T>(set: Set<T>): Set<T> {
  return new Set([...this].filter((x) => set.has(x)));
};
