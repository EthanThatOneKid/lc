function canBeTypedWords(text: string, brokenLetters: string): number {
  let sum = 0;
  const broke = new Set(brokenLetters.split(""));
  for (const word of text.split(" ")) {
    if (word.split("").some((char) => broke.has(char))) {
      continue;
    }

    sum++;
  }

  return sum;
}
