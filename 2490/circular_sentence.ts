function isCircularSentence(sentence: string): boolean {
  return sentence
    .split(" ")
    .every(
      (word, i, words) =>
        words[(i + 1) % words.length].startsWith(word[word.length - 1]),
    );
}
