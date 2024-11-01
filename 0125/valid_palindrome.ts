function isPalindrome(s: string): boolean {
  const cleanedS = clean(s);
  const reversedCleanedS = cleanedS.split("").reverse().join("");
  return cleanedS === reversedCleanedS;
}

function clean(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}
