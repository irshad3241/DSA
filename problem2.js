
class Problem2 {
    sumZero(n) {
        const result = [];
        for (let i = 0; i < Math.floor(n / 2); i++) {
            result.push(-(i + 1), i + 1);
        }
        if (n % 2 !== 0) {
            result.push(0);
        }
        return result;
    }
}

const solution2 = new Problem2();
console.log("Array:", solution2.sumZero(5));
