const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function sortVowels(s: string): string {
  const vowels: string[] = [];
  const vowelIndices: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (!VOWELS.includes(s[i])) {
      continue;
    }

    vowels.push(s[i]);
    vowelIndices.push(i);
  }

  vowels.sort();
  const result = s.split("");
  for (let i = 0; i < vowels.length; i++) {
    result[vowelIndices[i]] = vowels[i];
  }

  return result.join("");
}

// 1. find indices of vowels in the string and create list of vowels and the vowel indices.
// 2. sort the vowels, and repopulate the indices.
