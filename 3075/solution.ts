export function maximumHappinessSum(happiness: number[], k: number): number {
  return happiness
    .sort((a, b) => b - a)
    .slice(0, k)
    .reduce((sum, happy, i) => sum + happy - Math.min(i, happy), 0);
}
