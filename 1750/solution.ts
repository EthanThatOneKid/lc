export function minimumLength(s: string): number {
  while (s.length > 1) {
    const prefix = findPrefix(s);
    const suffix = findSuffix(s);
    if (prefix[0] !== suffix[0]) {
      break;
    }

    s = s.slice(prefix.length, s.length - suffix.length);
  }

  return s.length;
}

function findPrefix(s: string): string {
  let prefix = "";
  for (let i = 0; i < s.length; i++) {
    if (prefix.length !== 0 && prefix[0] !== s[i]) {
      break;
    }

    prefix += s[i];
  }

  return prefix;
}

function findSuffix(s: string): string {
  let suffix = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (suffix.length !== 0 && suffix[0] !== s[i]) {
      break;
    }

    suffix = s[i] + suffix;
  }

  return suffix;
}
