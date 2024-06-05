export function commonChars(words: string[]): string[] {
  return Array.from(
    words.slice(1).reduce(
      (common, word) =>
        Array.from(common.entries())
          .reduce(
            (
              { currentMap, frequencyMap },
              [c, frequency],
            ) => ({
              currentMap: ((frequencyMap.has(c)
                  ? Math.min(frequency, frequencyMap.get(c) ?? 0)
                  : 0) > 0
                ? currentMap.set(
                  c,
                  Math.min(frequency, frequencyMap.get(c) ?? 0),
                )
                : currentMap),
              frequencyMap,
            }),
            {
              currentMap: new Map(),
              frequencyMap: word.split("").reduce(
                (map, c) => map.set(c, (map.get(c) ?? 0) + 1),
                new Map(),
              ),
            },
          ).currentMap,
      words[0].split("").reduce(
        (map, c) => map.set(c, (map.get(c) ?? 0) + 1),
        new Map(),
      ),
    ).entries(),
    ([c, frequency]) => new Array(frequency).fill(c),
  ).flat();
}
