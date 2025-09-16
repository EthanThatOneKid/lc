interface MinStackItem {
  val: number;
  min: number;
}

class MinStack {
  public constructor(
    private data: Array<MinStackItem> = [],
    private min = Infinity,
  ) {}

  public push(val: number): void {
    this.data.push({ val, min: this.min });
    this.min = Math.min(this.min, val);
  }

  public pop(): void {
    this.min = this.data.pop()!.min;
  }

  public top(): number {
    return this.data.at(-1)!.val;
  }

  public getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
