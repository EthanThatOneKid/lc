function findCircleNum(isConnected: number[][]): number {
  const visited = new Set<string>();

  // Breadth-first connections visitor.
  function visitConnection(i: number, j: number): void {
    const stack: Array<[number, number]> = [[i, j]];
    while (stack.length > 0) {
      const [cityI, cityJ] = stack.pop()!;
      const connectionKey = key(cityI, cityJ);
      if (visited.has(connectionKey)) {
        continue;
      }

      // Iterate the list to see which others I connect with.
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (!isConnection(isConnected[i][j])) {
        continue;
      }

      visitConnection(i, j);
    }
  }
}

function isConnection(num: number) {
  return num === 1;
}

// isConnected[i][j] = 1 if the ith city and the jth city are directly connected
// isConnected[i][j] = 0 otherwise
// Input: isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
// Output: 2;

function key(i: number, j: number) {
  return `${i},${j}`;
}

// sum provinces
// Iterate the connections TB-LR, skip visited connections
// traverse all connections
// visitedConnections = ``
