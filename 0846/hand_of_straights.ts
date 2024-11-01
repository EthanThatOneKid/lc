export function isNStraightHand(hand: number[], groupSize: number): boolean {
  return hand.length % groupSize !== 0 ? false : (function checkGroup(
    frequencyMap: Map<number, number>,
    sortedHand: number[],
  ): boolean {
    return sortedHand.length === 0 ? true : (
        Array.from(
          { length: groupSize },
          (_, i) => i + sortedHand[sortedHand.length - 1],
        ).every((i) =>
          !frequencyMap.has(i) ? false : (() => {
            const frequency = frequencyMap.get(i)! - 1;
            frequencyMap.set(i, frequency);
            if (frequency === 0) {
              if (i !== sortedHand[sortedHand.length - 1]) {
                return false;
              }

              sortedHand.pop();
            }

            return true;
          })()
        )
      )
      ? checkGroup(frequencyMap, sortedHand)
      : false;
  })(
    hand.reduce(
      (map, curr) => map.set(curr, (map.get(curr) ?? 0) + 1),
      new Map<number, number>(),
    ),
    Array.from(new Set(hand)).sort((a, b) => b - a),
  );
}
