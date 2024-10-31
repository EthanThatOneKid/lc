function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isOpening(c)) {
      stack.unshift(c);
    }

    if (isClosing(c)) {
      if (stack.at(0) !== getOpening(c)) {
        return false;
      }

      stack.shift();
    }
  }

  return stack.length === 0;
}

function isOpening(c: string) {
  return pairs.some(({ 0: openingCharacter }) => c === openingCharacter);
}

function isClosing(c: string) {
  return pairs.some(({ 1: closingCharacter }) => c === closingCharacter);
}

function getOpening(c: string) {
  const pair = pairs.find(([_opening, closing]) => closing === c);
  if (pair === undefined) {
    throw new Error("Unexpected undefined pair");
  }

  const [opening] = pair;
  return opening;
}

const pairs: Pair[] = [
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
];

type Pair = [string, string];
