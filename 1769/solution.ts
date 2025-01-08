// deno 1769/solution.ts
if (import.meta.main) {
  console.log(simulate("001011"));
  console.log(simulate("001011".split("").reverse().join("")).reverse());
}

function minOperations(boxes: string): number[] {
  const a = simulate(boxes);
  const b = simulate(boxes.split("").reverse().join("")).reverse();
  return a.reduce((acc, _, i) => {
    acc[i] = a[i] + b[i];
    return acc;
  }, Array.from({ length: boxes.length }, () => 0));
}

function simulate(boxes: string): number[] {
  const result: number[] = Array.from({ length: boxes.length }, () => 0);
  for (let i = 0; i < boxes.length; i++) {
    let moves = 0;
    for (let j = i + 1; j < boxes.length; j++) {
      if (boxes[j] === "0") {
        continue;
      }

      moves += j - i;
    }

    result[i] = moves;
  }

  return result;
}
