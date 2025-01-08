function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = Array.from(
    { length: temperatures.length },
    () => 0,
  );

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      if (index === undefined) {
        throw new Error("index is undefined");
      }

      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}
