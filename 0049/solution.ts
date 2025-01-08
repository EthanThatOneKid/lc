function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>();
  for (const s of strs) {
    const key = encodeFreaky(makeFreaky(s));
    const group = anagrams.get(key) ?? [];
    group.push(s);
    anagrams.set(key, group);
  }

  return Array.from(anagrams.values());
}

function encodeFreaky(freaky: Map<string, number>): string {
  return Array.from(freaky.keys())
    .toSorted()
    .map((k) => `${k}:${freaky.get(k)}`)
    .join(",");
}

function makeFreaky(s: string): Map<string, number> {
  const freaky = new Map<string, number>();
  for (const c of s) {
    freaky.set(
      c,
      (freaky.get(c) ?? 0) + 1,
    );
  }

  return freaky;
}

// Polyfill for Array.prototype.toSorted method.
Array.prototype.toSorted = function <T>(
  this: T[],
  compareFn?: (a: T, b: T) => number,
): T[] {
  return this.slice().sort(compareFn);
};

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}
