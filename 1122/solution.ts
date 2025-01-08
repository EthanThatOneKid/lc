export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  return ((map) =>
    arr1.sort((a, b) =>
      map.has(a) && map.has(b)
        ? map.get(a)! - map.get(b)!
        : map.has(a)
        ? -1
        : map.has(b)
        ? 1
        : a - b
    ))(arr2.reduce((map, n, i) => map.set(n, i), new Map<number, number>()));
}
