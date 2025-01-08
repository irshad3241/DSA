class Problem4 {
    secondLargest(nums) {
        let largest = -Infinity, secondLargest = -Infinity;
        for (let num of nums) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num !== largest) {
                secondLargest = num;
            }
        }
        return secondLargest === -Infinity ? -1 : secondLargest;
    }
}

const solution4 = new Problem4();
const nums4 = [10, 20, 4, 45, 99];
console.log("Second Largest:", solution4.secondLargest(nums4));
