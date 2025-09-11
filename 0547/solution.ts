function findCircleNum(isConnected: number[][]): number {
  let provinces = 0;
  const visited = new Set<number>();
  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) {
      continue;
    }

    const stack: number[] = [i];
    while (stack.length > 0) {
      const city = stack.pop()!;
      for (let j = 0; j < isConnected[city].length; j++) {
        if (!isConnection(isConnected[city][j]) || visited.has(j)) {
          continue;
        }

        visited.add(j);
        stack.push(j);
      }
    }

    provinces++;
  }

  return provinces;
}

function isConnection(num: number) {
  return num === 1;
}
