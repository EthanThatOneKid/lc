export function isPowerOfTwo(n: number): boolean {
  return isPowerOf(n, 2);
}

function isPowerOf(n: number, m: number): boolean {
  if (n === 1) {
    return true;
  } else if (n < m) {
    return false;
  }

  return isPowerOf(n / m, m);
}
