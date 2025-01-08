function reverseParentheses(s: string): string {
  return s.split("").reduce(({ stack, result }, c) => {
    if (c === "(") {
      return { stack: [...stack, result], result: "" };
    } else if (c === ")") {
      return {
        stack,
        result: stack.pop() + result.split("").reverse().join(""),
      };
    } else {
      return { stack, result: result + c };
    }
  }, { stack: [], result: "" }).result;
}
