function numOfSubarrays(arr: number[], limit = 10 ** 9 + 7): number {
  let oddSums = 0;
  for (const [start, end] of subarrays(arr)) {
    let sum = 0;
    for (let i = start; i < end; i++) {
      sum += arr[i];
    }
    if (sum % 2 === 0) {
      continue;
    }

    oddSums = (oddSums + 1) % limit;
  }

  return oddSums;
}

function* subarrays(arr: number[]): Generator<[number, number]> {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      yield [i, j + 1];
    }
  }
}
