export function equalSubstring(s: string, t: string, maxCost: number): number {
  let left = 0;
  let right = 0;
  let cost = 0;
  // We use two pointers to keep track of the current window of the substring.
  while (right < s.length) {
    // We calculate the cost of the substring by calculating the absolute difference of the characters at the current index.
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

    // If the cost exceeds the maxCost, we move the left pointer to the right by 1 and subtract the cost of the character at the left pointer.
    if (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left += 1;
    }

    // We continue this process until the cost is less than or equal to the maxCost.
    right += 1;
  }

  // We return the length of the substring by subtracting the left pointer from the right pointer.
  return right - left;
}

// Wrong answer:
// Your input
// "abcd"
// "bcdf"
// 3
// Output
// 4
// Expected
// 3
//
export function oneline(s: string, t: string, maxCost: number): number {
  // Two-pointer approach.
  return (({ right, left }) => (right - left))(
    Array.from({ length: s.length }, (_, i) => i)
      .reduce(
        ({ left, right, cost }, i) => ({
          left: left + (cost > maxCost ? 1 : 0),
          right: right + 1,
          cost: cost + Math.abs(s.charCodeAt(i) - t.charCodeAt(i)) -
            (cost > maxCost
              ? Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
              : 0),
        }),
        { left: 0, right: 0, cost: 0 },
      ),
  );
}
