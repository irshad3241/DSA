class Problem5 {
    searchInsert(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    }
}

const solution5 = new Problem5();
const nums5 = [1, 3, 5, 6];
console.log("Insert Position:", solution5.searchInsert(nums5, 5));
