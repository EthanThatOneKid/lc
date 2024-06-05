export function longestPalindrome(s: string): number {
  const frequencies = Array.from(
    s.split("").reduce(
      (map, c) => map.set(c, (map.get(c) ?? 0) + 1),
      new Map(),
    ).values(),
  );
  const { length, isOdd } = frequencies.reduce(
    ({ length, isOdd }, frequency) => ({
      length: length + Math.floor(frequency * 0.5) * 2,
      isOdd: isOdd || frequency % 2,
    }),
    { length: 0, isOdd: 0 },
  );
  return length + isOdd;
}
