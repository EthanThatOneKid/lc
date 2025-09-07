// Title: 1304. Find N Unique Integers Sum up to Zero
// URL: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// Difficulty: Easy
// Date: 2025-09-07

function sumZero(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i * 2 - n + 1);
}
