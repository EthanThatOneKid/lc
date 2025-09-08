function groupAnagrams(strs: string[]): string[][] {
  return Object.values(Object.groupBy(
    strs,
    (str) => serializeFrequencyMap(makeFrequencyMap(str)),
  ) as Record<string, string[]>);
}

function serializeFrequencyMap(frequencyMap: Map<string, number>) {
  return Array.from(frequencyMap.keys()).toSorted().reduce(
    (result, char) => result + `${char}${frequencyMap.get(char)}`,
    "",
  );
}

function makeFrequencyMap(str: string): Map<string, number> {
  const frequencyMap = new Map<string, number>();
  for (const char of str) {
    const frequency = (frequencyMap.get(char) ?? 0) + 1;
    frequencyMap.set(char, frequency);
  }

  return frequencyMap;
}

// function equals(f1: Map<string, number>, f2: Map<string, number>): boolean {
//   if (f1.size !== f2.size) {
//     return false;
//   }
//
//   for (const [key, frequency] of f1) {
//     if (f2.get(key) === frequency) {
//       continue;
//     }
//
//     return false;
//   }
//
//   return true;
// }
//
