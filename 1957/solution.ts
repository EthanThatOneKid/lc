function makeFancyString(s: string): string {
  let result = "";
  for (const c of s) {
    if (isConsecutive(result, c)) {
      continue;
    }

    result += c;
  }

  return result;
}

function isConsecutive(s: string, c: string): boolean {
  if (s.length < 2) {
    return false;
  }

  const a = s.at(-1);
  const b = s.at(-2);
  return c == a && c == b;
}
