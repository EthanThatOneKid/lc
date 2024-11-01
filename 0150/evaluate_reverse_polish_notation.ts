function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (isEvaluatorToken(token)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error("Invalid RPN expression");
      }

      stack.push(evaluate(token, a, b));
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  const result = stack.pop();
  if (result === undefined || stack.length > 0) {
    throw new Error("Invalid RPN expression");
  }

  return result;
}

function evaluate(token: EvaluatorToken, a: number, b: number): number {
  return evaluators[token](a, b);
}

function isEvaluatorToken(token: string): token is EvaluatorToken {
  return token in evaluators;
}

const evaluators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
} as const satisfies Record<string, Evaluator>;

type Evaluator = (a: number, b: number) => number;

type EvaluatorToken = keyof typeof evaluators;
