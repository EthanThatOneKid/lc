// https://www.youtube.com/watch?v=m9Y_YRU4k74
// https://leetcode.com/problems/minimum-number-of-people-to-teach/description/

function minimumTeachings(
  n: number,
  languages: number[][],
  friendships: number[][],
): number {
  let result = Infinity;
  for (let language = 0; language < n; language++) {
    for (const [friend0, friend1] of friendships) {
      const languages0 = languages[friend0];
      const languages1 = languages[friend1];
      const intersection = new Set(languages0).intersection(
        new Set(languages1),
      );
      if (intersection.size === 0) {
      }
    }
  }

  return result;
}

// for (let person = 0; person < languages.length; person++) {
//   const personKnows = languages[person];
// }

//   const adjecencies = friendships.reduce(
//     (acc, [a, b]) => {
//       return acc
//         .set(b, acc.get(b) ?? new Set([a]))
//         .set(a, acc.get(a) ?? new Set([b]));
//     },
//     new Map<number, Set<number>>(),
//   );
