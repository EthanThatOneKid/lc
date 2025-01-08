function threeSum(nums: number[]): Tuple[] {
  const result: Tuple[] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (sum === 0) {
        result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
        while (
          leftIndex < rightIndex &&
          nums[leftIndex] === nums[leftIndex + 1]
        ) {
          leftIndex++;
        }

        while (
          leftIndex < rightIndex &&
          nums[rightIndex] === nums[rightIndex - 1]
        ) {
          rightIndex--;
        }

        leftIndex++;
        rightIndex--;
      } else if (sum < 0) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }

  return result;
}

type Tuple = [number, number, number];
