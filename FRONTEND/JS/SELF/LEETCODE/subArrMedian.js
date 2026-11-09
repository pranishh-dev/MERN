nums = [1, 2, 3]
k = 2


// A subarray is a continuous part of an array.
subArr = []
lenArr = nums.length

for (let i = 0; i < lenArr; i++) {
    for (let j = i; j < lenArr; j++) {
        subArr.push(nums.slice(i, j + 1))
    }
}

function getMedian(arr) {
    len = arr.length
    if (len % 2 == 0) {
        median = arr[(len / 2) - 1]
        //If the array is of even length, the median is the left middle element.
    }
    else {
        median = arr[Math.floor(len / 2)]
    }
    return median
}

subArrMedian = []
subArr.forEach((arr) => {
    if (getMedian(arr) == k) {
        subArrMedian.push(arr)
    }
})
console.log(subArrMedian);