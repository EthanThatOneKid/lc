function maximum69Number(num: number): number {
  let k = 0;
  let targetK = -Infinity;
  while (true) {
    const digit = ~~(num / 10 ** k) % 10;
    if (digit === 0) {
      break;
    }

    if (digit === 6) {
      targetK = k;
    }

    k++;
  }

  if (targetK === -Infinity) {
    return num;
  }

  const difference = (9 - 6) * 10 ** targetK;
  return num + difference;
}
