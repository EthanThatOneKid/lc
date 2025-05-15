function lengthAfterTransformations(s: string, t: number): number {
  for (let i = 0; i < t; i++) {
    s = transform(s);
  }

  return s.length;
}

function transform(s: string): string {
  let result = "";
  for (const c of s) {
    if (c === "z") {
      result += "ab";
      continue;
    }

    result += String.fromCharCode(c.charCodeAt(0) + 1);
  }

  return result;
}
