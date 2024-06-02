/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  Array.from({ length: Math.floor(s.length / 2) }).forEach((_, i) =>
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
  );
}
