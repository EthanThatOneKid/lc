export function scoreOfString(s: string): number {
  return Array.from(
    { length: s.length - 1 },
    (_, i) => Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)),
  ).reduce((score, diff) => score + diff, 0);
}
