export function commonChars(words: string[]): string[] {
  const common = frequencyMapOf(words[0]);
  for (let i = 1; i < words.length; i++) {
    const frequencyMap = frequencyMapOf(words[i]);
    for (const [c, frequency] of common) {
      const nextFrequency = Math.min(frequency, frequencyMap.get(c) ?? 0);
      if (nextFrequency === 0) {
        common.delete(c);
        continue;
      }

      common.set(c, nextFrequency);
    }
  }

  return Array.from(
    common.entries(),
    ([c, frequency]) => new Array(frequency).fill(c),
  ).flat();
}

function frequencyMapOf(word: string): Map<string, number> {
  const frequencyMap = new Map<string, number>();
  for (const c of word) {
    frequencyMap.set(c, (frequencyMap.get(c) ?? 0) + 1);
  }

  return frequencyMap;
}
