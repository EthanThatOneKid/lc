// If the town judge exists, then:
//
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
//

function findJudge(n: number, trust: number[][]): number {
  const judges = Array.from({ length: n }, (_, i) => i + 1)
    .filter((i) => trustsNobody(i, trust) && everyoneTrusts(i, n, trust));
  if (judges.length === 1) {
    return judges[0];
  }

  return -1;
}

function trustsNobody(id: number, trust: number[][]): boolean {
  return trust.every((pair) => pair[0] !== id);
}

function everyoneTrusts(id: number, n: number, trust: number[][]): boolean {
  return Array.from({ length: n }, (_, i) => i + 1)
    .every((i) => {
      if (i === id) {
        return true;
      }

      return trust.some((pair) => pair[1] === id && pair[0] === i);
    });
}
