function partition(s: string): string[][] {
  return substringsOf(s).filter((s) => isPalindrome(s.split("")));
}

function substringsOf(s: string): string[] {
  const substrings: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      substrings.push(s.slice(i, j));
    }
  }

  return substrings;
}

function isPalindromePartioning() {
}

function isPalindrome(ss: string[]) {
  return ss.every((s, i) => s === ss[ss.length - i - 1]);
}
