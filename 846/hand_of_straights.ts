export function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const frequencyMap = hand.reduce((acc, curr) => {
    return acc.set(curr, (acc.get(curr) ?? 0) + 1);
  }, new Map<number, number>());

  const queue = Array.from(frequencyMap.keys()).sort((a, b) => a - b);
  while (queue.length > 0) {
    const first = queue[0];
    console.log(first);
    for (let i = first; i < first + groupSize; i++) {
      if (!frequencyMap.has(i)) {
        return false;
      }

      const newFrequency = frequencyMap.get(i)! - 1;
      frequencyMap.set(i, newFrequency);
      if (newFrequency === 0) {
        if (i !== first) {
          return false;
        }

        queue.shift();
      }
    }
  }

  return true;
}
