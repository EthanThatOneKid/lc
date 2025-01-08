export function lengthOfLastWord(s: string): number {
  const trimmed = s.trim();
  const indexOfLastWord = trimmed.lastIndexOf(" ");
  return trimmed.length - indexOfLastWord - 1;
}
