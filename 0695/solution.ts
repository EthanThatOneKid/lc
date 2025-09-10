function maxAreaOfIsland(grid: number[][]): number {
  const visited = new Set<string>();

  function visitIsland(i: number, j: number): number {
    const queue: Array<[number, number]> = [];

    let area = 0;
    function visitLand(ci: number, cj: number) {
      area++;
      visited.add(key(ci, cj));
      queue.push([ci, cj]);
    }

    visitLand(i, j);
    while (queue.length > 0) {
      const [ci, cj] = queue.shift()!;
      visited.add(key(ci, cj));

      for (const [di, dj] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
        const [ni, nj] = [ci + di, cj + dj];
        const nkey = key(ni, nj);
        if (visited.has(nkey)) {
          continue;
        }

        if (ni < 0 || ni >= grid.length || nj < 0 || nj >= grid[ni].length) {
          continue;
        }

        if (!isLand(grid[ni][nj])) {
          continue;
        }

        visitLand(ni, nj);
      }
    }

    return area;
  }

  let recordArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited.has(key(i, j))) {
        continue;
      }

      if (!isLand(grid[i][j])) {
        continue;
      }

      const area = visitIsland(i, j);
      recordArea = Math.max(recordArea, area);
    }
  }

  return recordArea;
}

function key(i: number, j: number) {
  return `${i},${j}`;
}

function isLand(num: number) {
  return num === 1;
}
