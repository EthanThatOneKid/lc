function minLength(s: string): number {
    return s.split("").reduce((prevStack, c, _, __, stack = prevStack + c) => ((
            stack.length >= 2 && (
                (stack[stack.length - 2] === "A" &&
                    stack[stack.length - 1] === "B") ||
                (stack[stack.length - 2] === "C" &&
                    stack[stack.length - 1] === "D")
            )
        )
        ? stack.slice(0, -2)
        : stack), "").length;
}
