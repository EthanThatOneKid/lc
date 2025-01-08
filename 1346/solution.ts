function checkIfExist(arr: number[]): boolean {
  const lookingForDouble = new Set<number>();
  const lookingForHalf = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    if (lookingForDouble.has(arr[i]) || lookingForHalf.has(arr[i])) {
      return true;
    }

    lookingForDouble.add(arr[i] * 2);
    lookingForHalf.add(arr[i] * 0.5);
  }

  return false;
}
