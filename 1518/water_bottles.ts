function numWaterBottles(numBottles: number, numExchange: number): number {
  return numBottles + ~~((numBottles - 1) / (numExchange - 1));
}
