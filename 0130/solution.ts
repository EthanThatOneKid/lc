const CAPTURED = "X";

// modify board in-place instead.
function solve(board: string[][]): void {
  const visited = new Set<string>();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const currentKey = key(i, j);
      if (visited.has(currentKey)) {
        continue;
      }

      let captured = true;
      const uncaptured: Array<[number, number]> = [];

      // DFS to find all connected 'O's
      function dfs(ci: number, cj: number) {
        if (ci < 0 || ci >= board.length || cj < 0 || cj >= board[ci].length) {
          captured = false;
          return;
        }

        if (isCaptured(board[ci][cj])) {
          return;
        }

        const cellKey = key(ci, cj);
        if (visited.has(cellKey)) {
          return;
        }

        visited.add(cellKey);
        uncaptured.push([ci, cj]);

        // Recursively check all 4 directions
        dfs(ci - 1, cj);
        dfs(ci, cj + 1);
        dfs(ci + 1, cj);
        dfs(ci, cj - 1);
      }

      dfs(i, j);

      // Mark all cells in this region as captured if they're surrounded
      for (const [ci, cj] of uncaptured) {
        if (captured) {
          board[ci][cj] = CAPTURED;
        }
      }
    }
  }
}

function isCaptured(str: string) {
  return str === CAPTURED;
}

function key(i: number, j: number) {
  return `${i},${j}`;
}
