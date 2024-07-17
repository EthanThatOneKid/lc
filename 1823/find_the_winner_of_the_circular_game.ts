function findTheWinner(n: number, k: number): number {
  return n === 1 ? 1 : ((findTheWinner(n - 1, k) + k - 1) % n) + 1;
}
