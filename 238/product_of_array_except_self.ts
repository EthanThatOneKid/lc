function productExceptSelf(nums: number[]): number[] {
  // https://leetcode.com/problems/product-of-array-except-self/
  return applySuffixArray(nums, makePrefixArray(nums));
}

function makePrefixArray(nums: number[]): number[] {
  return nums.reduce((result, n, i) => {
    if (i > nums.length - 1) {
      return result;
    }

    result.push(result[i] * n);
    return result;
  }, [1]);
}

function applySuffixArray(nums: number[], prefixArray: number[]): number[] {
  return nums.reduceRight((result, _, _i) => {
    // WIP https://youtube.com/watch?v=bNvIQI2wAjk
    return result;
  }, prefixArray);
}
