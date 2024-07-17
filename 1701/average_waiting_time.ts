function averageWaitingTime(customers: number[][]): number {
  return customers.reduce(
    (
      { totalWaitTime, currentTime },
      [arrivalTime, timeToPrepare],
      _,
      __,
      nextCurrentTime =
        (arrivalTime > currentTime ? arrivalTime : currentTime) +
        timeToPrepare,
    ) => ({
      currentTime: nextCurrentTime,
      totalWaitTime: totalWaitTime + nextCurrentTime - arrivalTime,
    }),
    { totalWaitTime: 0, currentTime: 0 },
  ).totalWaitTime / customers.length;
}
