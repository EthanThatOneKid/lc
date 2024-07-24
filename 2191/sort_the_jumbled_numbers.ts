function sortJumbled(mapping: number[], nums: number[]): number[] {
  return nums
    .map((n, i) => [
      fromDigits(digitsOf(n).map((d) => mapping[d])),
      n,
      i,
    ])
    .sort(([a0, _, a2], [b0, __, b2]) => a0 - b0 !== 0 ? a0 - b0 : a2 - b2)
    .map(([, n]) => n);
}

function digitsOf(n: number): number[] {
  const digit = n % 10;
  return n < 10 ? [digit] : [...digitsOf(Math.floor(n * 0.1)), digit];
}

function fromDigits(digits: number[]): number {
  return digits.reduce((sum, digit) => sum * 10 + digit, 0);
}
