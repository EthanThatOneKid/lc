function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s === goal) {
      return true;
    }

    s = shift(s);
  }

  return false;
}

function shift(s: string): string {
  if (s.length < 2) {
    return s;
  }

  return s.slice(1) + s[0];
}
