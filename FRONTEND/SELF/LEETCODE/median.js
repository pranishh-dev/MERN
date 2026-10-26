data = [1, 2, 3, 5, 6, 1]
data.sort((a, b) => a - b)
let median
len = data.length
if (len % 2 == 0) {
    median = data[(len / 2) - 1] 
    //If the array is of even length, the median is the left middle element.
}
else {
    median = data[Math.floor(len / 2)]
}
console.log(data);
console.log(median);