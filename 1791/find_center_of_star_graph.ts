function findCenter([[a, b], [c, d]]: number[][]): number {
  return a === c || a === d ? a : b;
}
