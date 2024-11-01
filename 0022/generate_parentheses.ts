function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];

  function backtrack(open: number, close: number) {
    if (open == 0 && close == 0) {
      result.push(stack.join(""));
      return;
    }

    if (open > 0) {
      stack.push("(");
      backtrack(open - 1, close);
      stack.pop();
    }

    if (close > open) {
      stack.push(")");
      backtrack(open, close - 1);
      stack.pop();
    }
  }

  backtrack(n, n);
  return result;
}
