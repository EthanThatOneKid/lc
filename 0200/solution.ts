function numIslands(grid: string[][]): number {
  let islands = 0;
  const visited = new Set<string>();

  function visitIsland(i: number, j: number) {
    console.log(`Visiting island ${key(i, j)}`);
    const queue: Array<[number, number]> = [];

    function visitLand(ci: number, cj: number) {
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
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited.has(key(i, j))) {
        continue;
      }

      if (!isLand(grid[i][j])) {
        continue;
      }

      visitIsland(i, j);
      islands++;
    }
  }

  return islands;
}

function key(i: number, j: number) {
  return `${i},${j}`;
}

function isLand(str: string) {
  return str === "1";
}
