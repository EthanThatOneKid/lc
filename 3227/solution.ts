const VOWELS = new Set(["a", "e", "i", "o", "u"]);

function doesAliceWin(s: string): boolean {
  // Use memoization to avoid recalculating the same substrings
  const memo = new Map<string, boolean>();

  function canWin(str: string, isAliceTurn: boolean): boolean {
    if (memo.has(str + isAliceTurn)) {
      return memo.get(str + isAliceTurn)!;
    }

    // Count vowels in current string
    const vowelCount = str.split("").reduce(
      (count, char) => VOWELS.has(char) ? count + 1 : count,
      0,
    );

    let result = false;

    if (isAliceTurn) {
      // Alice's turn: need to find substring with odd vowels
      if (vowelCount % 2 === 1) {
        // Can remove entire string
        result = true;
      } else {
        // Try removing any substring with odd vowels
        for (let i = 0; i < str.length; i++) {
          let currentVowels = 0;
          for (let j = i; j < str.length; j++) {
            if (VOWELS.has(str[j])) {
              currentVowels++;
            }
            if (currentVowels % 2 === 1) {
              // Found substring with odd vowels, try this move
              const remaining = str.slice(0, i) + str.slice(j + 1);
              if (!canWin(remaining, false)) {
                result = true;
                break;
              }
            }
          }
          if (result) break;
        }
      }
    } else {
      // Bob's turn: need to find substring with even vowels
      if (vowelCount % 2 === 0 && vowelCount > 0) {
        // Can remove entire string
        result = true;
      } else {
        // Try removing any substring with even vowels
        for (let i = 0; i < str.length; i++) {
          let currentVowels = 0;
          for (let j = i; j < str.length; j++) {
            if (VOWELS.has(str[j])) {
              currentVowels++;
            }
            if (currentVowels % 2 === 0 && currentVowels > 0) {
              // Found substring with even vowels, try this move
              const remaining = str.slice(0, i) + str.slice(j + 1);
              if (!canWin(remaining, true)) {
                result = true;
                break;
              }
            }
          }
          if (result) break;
        }
      }
    }

    memo.set(str + isAliceTurn, result);
    return result;
  }

  return canWin(s, true);
}
