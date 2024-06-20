function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);
  let left = 1;
  let right = position[position.length - 1] - position[0];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (check(position, mid, m)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
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
