function maxArea(heights: number[]): number {
  let leftIndex = 0;
  let rightIndex = heights.length - 1;
  let maxAreaValue = 0;

  while (leftIndex < rightIndex) {
    const width = rightIndex - leftIndex;
    const height = Math.min(heights[leftIndex], heights[rightIndex]);
    maxAreaValue = Math.max(maxAreaValue, width * height);

    if (heights[leftIndex] < heights[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxAreaValue;
}
