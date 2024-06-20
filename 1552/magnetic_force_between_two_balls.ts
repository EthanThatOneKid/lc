function maxDistance(
  position: number[],
  m: number,
  sortedPosition = position.sort((a, b) => a - b),
  lo = 1,
  hi = sortedPosition[sortedPosition.length - 1] - sortedPosition[0],
  mid = ~~((lo + hi) * 0.5),
): number {
  return lo > hi ? hi : sortedPosition.reduce(
      (
        { count, pre },
        cur,
        i,
      ) => (i !== 0 && cur - pre >= mid
        ? { count: count + 1, pre: cur }
        : { count, pre }),
      { count: 1, pre: sortedPosition[0] },
    ).count >= m
    ? maxDistance(position, m, sortedPosition, mid + 1, hi)
    : maxDistance(position, m, sortedPosition, lo, mid - 1);
}
