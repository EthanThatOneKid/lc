// Exact match
// Match with capital error
// Match with vowel errors
// else, return "";

function spellchecker(wordlist: string[], queries: string[]): string[] {
  const exact = new Map<string, string>();
  const caseInsensitive = new Map<string, string>();
  const misspelled = new Map<string, string>();

  for (const word of wordlist) {
    const exactKey = makeExact(word);
    if (!exact.has(exactKey)) {
      exact.set(exactKey, word);
    }

    const caseKey = makeCaseInsensitive(word);
    if (!caseInsensitive.has(caseKey)) {
      caseInsensitive.set(caseKey, word);
    }

    const misspelledKey = makeMisspelled(word);
    if (!misspelled.has(misspelledKey)) {
      misspelled.set(misspelledKey, word);
    }
  }

  const rules: Array<[((word: string) => string), Map<string, string>]> = [
    [makeExact, exact],
    [makeCaseInsensitive, caseInsensitive],
    [makeMisspelled, misspelled],
  ];

  return queries.map((query) => {
    for (const [fn, map] of rules) {
      const match = map.get(fn(query));
      if (!match) {
        continue;
      }

      return match;
    }

    return "";
  });
}

function makeExact(word: string) {
  return word;
}

function makeCaseInsensitive(word: string) {
  return word.toLowerCase();
}

function makeMisspelled(word: string) {
  return makeCaseInsensitive(word).replaceAll(/[aeiou]/g, "*");
}
