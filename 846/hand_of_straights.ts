export function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const frequencyMap = hand.reduce(
    (map, curr) => map.set(curr, (map.get(curr) ?? 0) + 1),
    new Map<number, number>(),
  );
  const sortedHand = Array.from(new Set(hand)).sort((a, b) => b - a);
  while (sortedHand.length > 0) {
    const first = sortedHand[sortedHand.length - 1];
    for (let i = first; i < first + groupSize; i++) {
      if (!frequencyMap.has(i)) {
        return false;
      }

      const frequency = frequencyMap.get(i)! - 1;
      frequencyMap.set(i, frequency);
      if (frequency === 0) {
        if (i !== sortedHand[sortedHand.length - 1]) {
          return false;
        }

        sortedHand.pop();
      }
    }
  }

  return true;
}
