function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); 

nums1 = [1], m = 1;
nums2 = [], n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); 

nums1 = [0], m = 0;
nums2 = [1], n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); 