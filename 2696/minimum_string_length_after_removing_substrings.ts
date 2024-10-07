function minLength(s: string): number {
  return s
    .split("")
    .reduce(
      (prevStack, c, _, __, stack = prevStack + c) => (
        (stack.endsWith("AB") || stack.endsWith("CD"))
          ? stack.slice(0, -2)
          : stack
      ),
      "",
    ).length;
}
