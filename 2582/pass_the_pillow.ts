function passThePillow(n: number, time: number): number {
  return Array.from({ length: time }).reduce(
    ({ person, direction }) =>
      person === 1
        ? { person: 2, direction: 1 }
        : person === n
        ? { person: n - 1, direction: -1 }
        : { person: person + direction, direction },
    { person: 1, direction: 1 },
  ).person;
}
