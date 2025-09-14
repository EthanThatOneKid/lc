const vowels = ["a", "e", "i", "o", "u"];

// Returns true if vowel.
// Returns false if consonant.
function isVowel(c: string) {
  return vowels.includes(c);
}

function maxFreqSum(s: string): number {
  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;
  const freqMap = new Map<string, number>();
  for (const c of s) {
    const freq = (freqMap.get(c) ?? 0) + 1;
    if (isVowel(c)) {
      maxVowelFreq = Math.max(maxVowelFreq, freq);
    } else {
      maxConsonantFreq = Math.max(maxConsonantFreq, freq);
    }

    freqMap.set(c, freq);
  }

  return maxVowelFreq + maxConsonantFreq;
}
