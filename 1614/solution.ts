export function maxDepth(s: string): number {
  let max = 0;
  let depth = 0;
  for (const c of s) {
    depth += c === "(" ? 1 : c === ")" ? -1 : 0;
    max = Math.max(max, depth);
  }

  return max;
}
