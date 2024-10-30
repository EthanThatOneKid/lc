function twoSum(nums: number[], target: number): number[] {
    const indexByNum = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const j = indexByNum.get(target - n);
        if (j !== undefined) {
            return [j, i];
        }

        indexByNum.set(n, i);
    }

    throw new Error("No solution");
}
