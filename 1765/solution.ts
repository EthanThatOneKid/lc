// deno -A 1765/solution.ts
// console.log(highestPeak([[0, 1], [0, 0]]));

function highestPeak(isWater: number[][]): number[][] {
  const waters = isolateWaters(isWater);
  for (let i = 0; i < isWater.length; i++) {
    for (let j = 0; j < isWater[i].length; j++) {
      isWater[i][j] = deduceDistance(waters, [i, j]);
    }
  }

  return isWater;
}

function isolateWaters(grid: number[][]): Array<[number, number]> {
  const waters: Array<[number, number]> = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 1) {
        continue;
      }

      waters.push([i, j]);
    }
  }

  return waters;
}

function deduceDistance(
  sources: Array<[number, number]>,
  target: [number, number],
): number {
  return Math.min(
    ...sources.map((source) => calculateDistance(source, target)),
  );
}

function calculateDistance(
  [y0, x0]: [number, number],
  [y1, x1]: [number, number],
): number {
  return Math.abs(y1 - y0) + Math.abs(x1 - x0);
}
