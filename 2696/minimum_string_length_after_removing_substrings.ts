function minLength(s: string): number {
    return s.split("").reduce<string[]>((stack, c) => {
        stack.push(c);
        if (
            stack.length >= 2 && (
                (stack[stack.length - 2] === "A" &&
                    stack[stack.length - 1] === "B") ||
                (stack[stack.length - 2] === "C" &&
                    stack[stack.length - 1] === "D")
            )
        ) {
            return stack.slice(0, -2);
        }

        return stack;
    }, []).length;
}
