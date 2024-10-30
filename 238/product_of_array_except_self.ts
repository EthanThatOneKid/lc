function productExceptSelf(nums: number[]): number[] {
  return computeProductSuffixArray(
    nums,
    makeProductPrefixArray(nums),
  );
}

function makeProductPrefixArray(nums: number[]): number[] {
  return nums.reduce((result, n, i) => {
    if (i > nums.length - 2) {
      return result;
    }

    result.push(result[i] * n);
    return result;
  }, [1]);
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
