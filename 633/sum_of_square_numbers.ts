function judgeSquareSum(c: number): boolean {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));
  while (a <= b) {
    const sum = a * a + b * b;
    if (sum === c) {
      return true;
    } else if (sum < c) {
      a++;
    } else {
      b--;
    }
  }

  return false;
}
