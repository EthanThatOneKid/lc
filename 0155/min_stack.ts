class MinStack {
  public constructor(
    private stack: number[] = [],
    private minStack: number[] = [],
  ) {}

  public push(value: number): void {
    this.stack.push(value);

    const min = Math.min(value, this.getMin() ?? Infinity);
    this.minStack.push(min);
  }

  public pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  public top(): number | undefined {
    return this.stack.at(-1);
  }

  public getMin(): number | undefined {
    return this.minStack.at(-1);
  }
}
