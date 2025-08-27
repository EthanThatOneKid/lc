// Title: 3000. Maximum Area of Longest Diagonal Rectangle

function areaOfMaxDiagonal(dimensions: number[][]): number {
  let maxArea = -Infinity;
  let maxDiagonal = -Infinity;
  for (const [s0, s1] of dimensions) {
    const area = getArea(s0, s1);
    const diagonal = getDiagonal(s0, s1);
    if (diagonal === maxDiagonal && area > maxArea) {
      maxArea = area;
    } else if (diagonal > maxDiagonal) {
      maxArea = area;
      maxDiagonal = diagonal;
    }
  }

  return maxArea;
}

function getDiagonal(s0: number, s1: number) {
  return Math.sqrt(s0 * s0 + s1 * s1);
}

function getArea(s0: number, s1: number) {
  return s0 * s1;
}
