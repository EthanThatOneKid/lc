function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[],
): number {
  const maxProfit: number[] = [];
  const minCapital: [number, number][] = capital.map((c, i) => [c, profits[i]]);
  minCapital.sort(([a], [b]) => a - b);
  for (let i = 0; i < k; i++) {
    while (minCapital.length && minCapital[0][0] <= w) {
      const [c, p] = minCapital.shift()!;
      maxProfit.push(-p);
    }

    if (!maxProfit.length) {
      break;
    }

    w -= maxProfit.sort((a, b) => b - a).pop()!;
  }

  return w;
}

// https://github.com/neetcode-gh/leetcode/blob/32bb838f99290c21458f446dbd2fe242eacac8aa/python/0502-ipo.py
