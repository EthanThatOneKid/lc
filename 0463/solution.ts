function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!isLand(grid[i][j])) {
        continue;
      }

      for (const [di, dj] of [[-1, 0], [0, 1], [-1, 0], [0, -1]]) {
        const [ci, cj] = [i + di, j + dj];
        if (
          (ci < 0 || ci >= grid.length || cj < 0 || cj >= grid[ci].length) ||
          !isLand(grid[ci][cj])
        ) {
          perimeter++;
        }
      }
    }
  }

  return perimeter;
}

function isLand(num: number) {
  return num === 1;
}

// 1 For each land cell, we can count the edges and add to perimeter
// 1.1 [[-1, 0], [0, 1], [-1, 0], [0, -1]], perimeter++ if [i + di, j + dj] cell is NOT land.
