function maxDistance(
  position: number[],
  m: number,
  sortedPosition = position.sort((a, b) => a - b),
  lo = 1,
  hi = sortedPosition[sortedPosition.length - 1] - sortedPosition[0],
  mid = ~~((lo + hi) * 0.5),
): number {
  if (lo >= hi) {
    return lo - 1;
  }

  return check(sortedPosition, mid, m)
    ? maxDistance(position, m, sortedPosition, mid + 1, hi)
    : maxDistance(position, m, sortedPosition, lo, mid);
}

/**
 * check checks if the balls can be placed with a distance of mid.
 */
function check(position: number[], mid: number, m: number): boolean {
  let count = 1;
  let pre = position[0];
  for (let i = 1; i < position.length; i++) {
    if (position[i] - pre >= mid) {
      count++;
      pre = position[i];
    }
  }

  return count >= m;
}
