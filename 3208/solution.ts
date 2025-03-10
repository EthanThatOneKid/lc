function numberOfAlternatingGroups(colors: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < colors.length; i++) {
    const group: number[] = [];
    for (let j = 0; j < k; j++) {
      group.push(colors[(i + j) % colors.length]);
    }

    if (alternating(group)) {
      sum++;
    }
  }

  return sum;
}

function alternating(colors: number[]): boolean {
  if (colors.length === 1) {
    return true;
  }

  let current = colors[0];
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === current) {
      return false;
    }

    current = colors[i];
  }

  return true;
}
