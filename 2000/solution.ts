export function reversePrefix(
  word: string,
  ch: string,
  a = word.split(""),
): string {
  return [
    a.splice(a.indexOf(ch) + 1).join(""),
    a.reverse().join(""),
  ]
    .reverse()
    .join("");
}
