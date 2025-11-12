function findMaxForm(strs: string[], m: number, n: number): number {
  const dp = new Map<string, number>();
  return dfs(0, m, n);

  function dfs(i: number, m: number, n: number) {
    if (i === strs.length) {
      return 0;
    }

    const dpKey = key(i, m, n);
    if (dp.has(dpKey)) {
      return dp.get(dpKey)!;
    }

    const { m: mCount, n: nCount } = parseStr(strs[i]);
    dp.set(dpKey, dfs(i + 1, m, n));
    if (mCount <= m && nCount <= n) {
      dp.set(
        dpKey,
        Math.max(dp.get(dpKey)!, 1 + dfs(i + 1, m - mCount, n - nCount)),
      );
    }

    return dp.get(dpKey)!;
  }
}

function key(...args: number[]) {
  return args.join(",");
}

function parseStr(str: string) {
  const ones = countChar(str, "1");
  const zeroes = str.length - ones;
  return { m: zeroes, n: ones };
}

function countChar(str: string, char: string) {
  return str.split("").reduce((sum, c) => sum + (c === char ? 1 : 0), 0);
}
