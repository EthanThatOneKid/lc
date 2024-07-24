function sortJumbled(mapping: number[], nums: number[]): number[] {
  return nums
    .map((n, i) => [
      fromDigits(digitsOf(n).map((d) => mapping[d])),
      i,
      n,
    ])
    .sort(([a0, a1], [b0, b1]) => a0 - b0 !== 0 ? a0 - b0 : a1 - b1)
    .map(({ 2: n }) => n);
}

function digitsOf(n: number): number[] {
  const digit = n % 10;
  return n < 10 ? [digit] : [...digitsOf(Math.floor(n * 0.1)), digit];
}

function fromDigits(digits: number[]): number {
  return digits.reduce((sum, digit) => sum * 10 + digit, 0);
}
