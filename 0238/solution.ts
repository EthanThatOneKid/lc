function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  // Product of elements from 0 to i-1
  const prefixProducts: number[] = new Array(n);
  prefixProducts[0] = 1;

  // Product of elements from i+1 to n-1
  const suffixProducts: number[] = new Array(n);
  suffixProducts[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    // Build prefix products: prefix[i] = product of elements 0 to i-1
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];

    // Build suffix products: suffix[n-1-i] = product of elements (n-1-i+1) to n-1
    suffixProducts[n - 1 - i] = suffixProducts[n - i] * nums[n - i];
  }

  return nums.map((_, i) => prefixProducts[i] * suffixProducts[i]);
}

// Prefix array: prefix[i] = product of elements from index 0 to i-1
// Suffix array: suffix[i] = product of elements from index i+1 to n-1

// Brute-force.
// function productExceptSelf(nums: number[]): number[] {
//     return nums.map((num, i) => {
//       const productExceptSelf = nums.reduce(
//         (product, n, j) => i === j ? product : product * n,
//         1,
//       );
//       return productExceptSelf;
//     });
//   }
