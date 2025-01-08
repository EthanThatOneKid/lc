function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!isPrefixAndSuffix(words[i], words[j])) {
        continue;
      }

      count++;
    }
  }

  return count;
}

function isPrefixAndSuffix(s0: string, s1: string): boolean {
  return s1.startsWith(s0) && s1.endsWith(s0);
}
