function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number,
): number[][] {
  let r = rStart;
  let c = cStart;
  let direction = 0;
  let distance = 1;
  let previousDistance = 0;

  const result: [number, number][] = [];
  while (result.length < rows * cols) {
    for (let i = 0; i < distance; i++) {
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        result.push([r, c]);
      }

      switch (direction) {
        case 0:
          c++;
          break;
        case 1:
          r++;
          break;
        case 2:
          c--;
          break;
        case 3:
          r--;
          break;
      }
    }

    direction = (direction + 1) % 4;

    if (direction % 2 === 0) {
      distance++;
    }

    if (direction === 0) {
      previousDistance++;
    }
  }

  return result;
}
