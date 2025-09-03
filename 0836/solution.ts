function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [rx0, ry0, rx1, ry1] = rec1;
  const [sx0, sy0, sx1, sy1] = rec2;
  return sx1 > rx0 && sx0 < rx1 && sy1 > ry0 && sy0 < ry1;
}

// My original approach:
//
// function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
//   return (
//     isPointWithin(rec1, [rec2[0], rec2[1]]) ||
//     isPointWithin(rec1, [rec2[0], rec2[3]]) ||
//     isPointWithin(rec1, [rec2[2], rec2[1]]) ||
//     isPointWithin(rec1, [rec2[2], rec2[3]])
//   );
// }
//
// function isPointWithin(
//   [/*bottom left=*/ rx0, ry0, /*top right=*/ rx1, ry1]: number[],
//   [px, py]: [number, number]
// ) {
//   return px > rx0 && py < ry0 && px < rx1 && py > ry1;
// }
//
