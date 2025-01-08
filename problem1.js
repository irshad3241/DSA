class Problem1 {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return []; 
    }
}


const solution1 = new Problem1();
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Indices:", solution1.twoSum(nums1, target1));
