function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[],
  jobs = difficulty.map((d, i) => [d, profit[i]]).sort(([a], [b]) => a - b),
): number {
  return worker.sort((a, b) => a - b).reduce(
    ({ best, maxProfit, i }, ability) =>
      (function find(
        ability: number,
        maxProfit = 0,
        best = 0,
        i = 0,
      ): { best: number; i: number; maxProfit: number } {
        return (i >= jobs.length || jobs[i][0] > ability)
          ? { best, i, maxProfit: maxProfit + best }
          : find(ability, maxProfit, Math.max(best, jobs[i][1]), i + 1);
      })(ability, maxProfit, best, i),
    { best: 0, maxProfit: 0, i: 0 },
  ).maxProfit;
}
