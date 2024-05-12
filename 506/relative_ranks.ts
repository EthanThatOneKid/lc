export function findRelativeRanks(scores: number[]): string[] {
  return scores
    .map((score, i) => [score, i]) // [score, original_index]
    .sort(([a], [b]) => b - a) // [score, original_index] sorted by score
    .map(([a, b], i) => [a, b, i]) // [score, original_index, rank_index] sorted by score
    .sort(({ 1: a }, { 1: b }) => a - b) // [score, original_index, rank_index] sorted by original_index
    .map(({ 2: n }) =>
      n < 3 ? ["Gold Medal", "Silver Medal", "Bronze Medal"][n] : `${n + 1}`
    ); // formatted ranks sorted by original_index
}
