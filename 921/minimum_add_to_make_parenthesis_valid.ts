function minAddToMakeValid(s: string): number {
  return s
    .split("")
    .reduce(
      (
        prevStack,
        c,
        _,
        __,
        stack = prevStack + c,
      ) => (stack.endsWith("()") ? stack.slice(0, -2) : stack),
      "",
    )
    .length;
}
