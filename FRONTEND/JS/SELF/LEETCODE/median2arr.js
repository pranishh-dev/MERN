arr1 = [1, 2, 3]
arr2 = [2, 3, 4]
newArr = [...arr1, ...arr2]
newArr.sort((a, b) => a - b)

let median
len = newArr.length
if (len % 2 == 0) {
    median = newArr[(len / 2) - 1]  
    //If the array is of even length, the median is the left middle element.
}
else {
    median = newArr[Math.floor(len / 2)]
}
console.log(newArr);
console.log(median);