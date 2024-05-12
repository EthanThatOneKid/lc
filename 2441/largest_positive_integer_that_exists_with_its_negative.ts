export function findMaxK(nums: number[]): number {
  return Math.max(-1, ...nums.filter((x) => x > 0 && nums.includes(-x)));
}
