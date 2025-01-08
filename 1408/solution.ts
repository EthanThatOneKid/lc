function stringMatching(words: string[]): string[] {
  const results: string[] = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j || !words[j].includes(words[i])) {
        continue;
      }

      results.push(words[i]);
    }
  }

  return results;
}
