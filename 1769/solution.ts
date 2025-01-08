// deno 1769/solution.ts
if (import.meta.main) {
  // O(n) time complexity.
  /** @see https://youtu.be/ZmH3gHiIqfI */
  const example = "001011";
  console.log(simulate(example));
  console.log(simulate(example.split("").reverse().join("")).reverse());
  console.log(minOperations(example));
}

function minOperations(boxes: string): number[] {
  return simulate(
    boxes,
    simulate(boxes.split("").reverse().join("")).reverse(),
  );
}

function simulate(
  boxes: string,
  result = Array.from({ length: boxes.length }, () => 0),
): number[] {
  let balls = 0;
  let moves = 0;
  for (let i = 0; i < boxes.length; i++) {
    const movesAt = balls + moves;
    result[i] += movesAt;
    moves = movesAt;
    if (boxes[i] !== "1") {
      continue;
    }

    balls++;
  }

  return result;
}
