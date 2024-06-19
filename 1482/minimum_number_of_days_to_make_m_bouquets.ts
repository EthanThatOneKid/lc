function minDays(
  bloomDay: number[],
  m: number,
  k: number,
  lo = 1,
  hi = Math.max(...bloomDay),
  mid = Math.floor((lo + hi) * 0.5),
): number {
  return m * k > bloomDay.length ? -1 : lo === hi ? lo : bloomDay.reduce(
      ({ bouquets, flowers }, day) =>
        day > mid
          ? { bouquets, flowers: 0 }
          : ++flowers === k
          ? { bouquets: ++bouquets, flowers: 0 }
          : { bouquets, flowers },
      { bouquets: 0, flowers: 0 },
    ).bouquets < m
    ? minDays(bloomDay, m, k, mid + 1, hi)
    : minDays(bloomDay, m, k, lo, mid);
}
