let nums = [2,4,3,5,1]
let reversePair = 0;
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > 2 * nums[j]) {
            reversePair++
        }
    }
}
console.log(reversePair);