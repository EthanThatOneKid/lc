function carFleet(target: number, position: number[], speed: number[]): number {
  return position
    .map((p, i) => time(target, p, speed[i]))
    .toSorted((a, b) => a - b)
    .reduce(
      (fleets: number[], t) => {
        if (fleets.length === 0) {
          fleets.unshift(t);
          return fleets;
        }

        // Add new fleet if the current car does not catch up to the previous fleet.
        if (fleets[0] >= t) {
          return fleets;
        }

        fleets.unshift(t);
        return fleets;
      },
      [],
    ).length;
}

function time(target: number, position: number, speed: number): number {
  return (target - position) / speed;
}

// Polyfill for Array.prototype.toSorted method.
Array.prototype.toSorted = function <T>(
  this: T[],
  compareFn?: (a: T, b: T) => number,
): T[] {
  return this.slice().sort(compareFn);
};

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}

// deno run -A 854/car_fleet.ts
if (import.meta.main) {
  const actual = carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
  // const actual = carFleet(10, [3], [3]);
  console.log(actual);
}

// https://leetcode.com/submissions/detail/1441322717/
