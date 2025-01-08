export function heightChecker(heights: number[]): number {
  return heights
    .slice()
    .sort((a, b) => a - b)
    .reduce((sum, height, i) => sum + (height !== heights[i] ? 1 : 0), 0);
}
