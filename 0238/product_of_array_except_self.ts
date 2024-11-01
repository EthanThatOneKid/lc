function productExceptSelf(nums: number[]): number[] {
  return computeProductSuffixArray(
    nums,
    makeProductPrefixArray(nums),
  );
}

function makeProductPrefixArray(nums: number[]): number[] {
  const prefixArray = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    prefixArray.push(prefixArray[i] * nums[i]);
  }

  return prefixArray;
}

function computeProductSuffixArray(
  nums: number[],
  prefixArray: number[],
): number[] {
  let productSuffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prefixArray[i] *= productSuffix;
    productSuffix *= nums[i];
  }

  return prefixArray;
}

// deno run 238/product_of_array_except_self.ts
if (import.meta.main) {
  const nums = [1, 2, 3, 4];
  const computedSuffixArray = computeProductSuffixArray(
    nums,
    makeProductPrefixArray(nums),
  );
  console.log({ computedSuffixArray });
}
