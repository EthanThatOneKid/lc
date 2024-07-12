function maximumGain(s: string, x: number, y: number): number {
  let result = 0;
  const stack = [];
  const first = x > y ? "ab" : "ba";
  const second = x > y ? "ba" : "ab";
  const firstScore = x > y ? x : y;
  const secondScore = x > y ? y : x;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === first[1] && stack[stack.length - 1] === first[0]) {
      stack.pop();
      result += firstScore;
    } else {
      stack.push(s[i]);
    }
  }

  const temp = [];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === second[1] && temp[temp.length - 1] === second[0]) {
      temp.pop();
      result += secondScore;
    } else {
      temp.push(stack[i]);
    }
  }

  return result;
}
