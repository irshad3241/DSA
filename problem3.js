class Problem3 {
    maxSubArray(nums) {
        let maxSum = Number.MIN_SAFE_INTEGER;
        let currentSum = 0;
        for (let num of nums) {
            currentSum += num;
            maxSum = Math.max(maxSum, currentSum);
            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        return maxSum;
    }
}


const solution3 = new Problem3();
const nums3 = [-2, 1, -3, 4, -1, 2];
console.log("Max Subarray Sum:", solution3.maxSubArray(nums3));
