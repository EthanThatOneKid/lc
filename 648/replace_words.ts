export function replaceWords(dictionary: string[], sentence: string): string {
  dictionary.sort(({ length: a }, { length: b }) => a - b);
  return sentence
    .split(" ")
    .map((word) => dictionary.find((root) => word.startsWith(root)) ?? word)
    .join(" ");
}
