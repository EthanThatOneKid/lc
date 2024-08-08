function spiralMatrixIII(
  rows: number,
  columns: number,
  row: number,
  column: number,
  direction = 0,
  distance = 1,
  previousDistance = 0,
  result: [number, number][] = [],
): number[][] {
  if (result.length === rows * columns) {
    return result;
  }

  for (let i = 0; i < distance; i++) {
    if (row >= 0 && row < rows && column >= 0 && column < columns) {
      result.push([row, column]);
    }

    switch (direction) {
      case 0:
        column++;
        break;
      case 1:
        row++;
        break;
      case 2:
        column--;
        break;
      case 3:
        row--;
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

  return spiralMatrixIII(
    rows,
    columns,
    row,
    column,
    direction,
    distance,
    previousDistance,
    result,
  );
}
