function judgeSquareSum(
  c: number,
  lo = 0,
  hi = Math.floor(Math.sqrt(c)),
  sum = lo * lo + hi * hi,
): boolean {
  return lo > hi
    ? false
    : sum === c
    ? true
    : sum < c
    ? judgeSquareSum(c, lo + 1, hi)
    : judgeSquareSum(c, lo, hi - 1);
}
