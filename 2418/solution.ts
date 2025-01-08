function sortPeople(names: string[], heights: number[]): string[] {
  return names.map((name, i) => [heights[i], name] as [number, string])
    .sort(([a], [b]) => a - b)
    .map(([, name]) => name);
}
