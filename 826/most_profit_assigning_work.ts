function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[],
): number {
  const jobs = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);
  let maxProfit = 0;
  let i = 0;
  let best = 0;
  for (const ability of worker) {
    while (i < jobs.length && jobs[i][0] <= ability) {
      best = Math.max(best, jobs[i][1]);
      i++;
    }
    maxProfit += best;
  }

  return maxProfit;
}
