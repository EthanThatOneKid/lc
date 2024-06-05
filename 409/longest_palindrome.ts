export function longestPalindrome(s: string): number {
  return (({ length, oddness }) => length + oddness)(
    Array.from(
      s.split("").reduce(
        (map, c) => map.set(c, (map.get(c) ?? 0) + 1),
        new Map(),
      ).values(),
    )
      .reduce(
        ({ length, oddness }, frequency) => ({
          length: length + Math.floor(frequency * 0.5) * 2,
          oddness: oddness || frequency % 2,
        }),
        { length: 0, oddness: 0 },
      ),
  );
}
