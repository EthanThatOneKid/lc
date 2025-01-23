function countServers(grid: number[][]): number {
  const communicating = new Set<number>();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (!communicates(grid, y, x)) {
        continue;
      }

      communicating.add(toLinear(grid[0].length, y, x));
    }
  }

  return communicating.size;
}

function toLinear(width: number, y: number, x: number) {
  return width * y + x;
}

function communicates(grid: number[][], y: number, x: number): boolean {
  if (grid[y][x] !== 1) {
    return false;
  }

  for (let i = 0; i < grid.length; i++) {
    if (i !== y && grid[i][x] === 1) {
      return true;
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    if (i !== x && grid[y][i] === 1) {
      return true;
    }
  }

  return false;
}
