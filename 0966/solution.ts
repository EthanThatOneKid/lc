// Exact match
// Match with capital error
// Match with vowel errors
// else, return "";

function spellchecker(wordlist: string[], queries: string[]): string[] {
  return queries.map((query) => spellcheck(wordlist, query));
}

function spellcheck(wordlist: string[], query: string): string {
  for (const fn of [matches, matchesCaseInsensitive, matchesMisspelled]) {
    // TODO: This for-loop for a O(1) lookup.
    for (const word of wordlist) {
      if (!fn(word, query)) {
        continue;
      }

      return word;
    }
  }

  return "";
}

function matches(word: string, query: string): boolean {
  return word === query;
}

function matchesCaseInsensitive(word: string, query: string): boolean {
  return word.toLowerCase() === query.toLowerCase();
}

function matchesMisspelled(word: string, query: string): boolean {
  return word.toLowerCase().replaceAll(/[aeiou]/g, "*") ===
    query.toLowerCase().replaceAll(/[aeiou]/g, "*");
}
