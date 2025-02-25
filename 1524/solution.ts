function numOfSubarrays(arr: number[], limit = 10 ** 9 + 7): number {
  // We'll keep track of the counts of even and odd prefix sums
  let evenCount = 1; // Start with 1 to account for empty prefix
  let oddCount = 0;
  let prefixSum = 0;
  let result = 0;

  for (const num of arr) {
    // Update running prefix sum
    prefixSum = (prefixSum + num) % 2;

    if (prefixSum === 1) {
      // Current prefix sum is odd
      // Add count of even prefix sums seen so far
      result = (result + evenCount) % limit;
      oddCount++;
    } else {
      // Current prefix sum is even
      // Add count of odd prefix sums seen so far
      result = (result + oddCount) % limit;
      evenCount++;
    }
  }

  return result;
}
