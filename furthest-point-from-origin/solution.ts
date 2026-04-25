function furthestDistanceFromOrigin(moves: string): number {
    const frequencyMap = toFrequencyMap(moves);
    const sum = Math.abs(-1 * (frequencyMap.get("L") ?? 0) + (frequencyMap.get("R") ?? 0));
    const budget = frequencyMap.get("_") ?? 0;
    return Math.max(sum + budget, sum - budget);
};

function toFrequencyMap(moves: string): Map<string, number> {
    return moves.split("").reduce((acc, cur) => {
