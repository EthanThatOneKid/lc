export function isIsomorphic(s: string, t: string): boolean {
  const cypheredS = cypher(s);
  const cypheredT = cypher(t);
  return cypheredS === cypheredT;
}

function cypher(s: string): string {
  let result = "";
  const map = new Map<string, number>();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, map.size);
    }

    result += String.fromCharCode(map.get(c)! + 97);
  }

  return result;
}
