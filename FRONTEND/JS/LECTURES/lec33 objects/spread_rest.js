let nums = [1, 2, 3, 4, 5, 6]

let max0 = Math.max(nums)
console.log(max0);

//Spread array
// ...num2 spreads num2 array into number list
let max = Math.max(...nums)
console.log(max);


// ARRAY MERGING
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let res = [...arr1, ...arr2]
console.log(arr1, arr2);
console.log(res);
console.log(...res);

// Rest operator
// ...num2 it packs up into array
let [a, b, ...c] = res
console.log(a);
console.log(b);
console.log(c);

// using rest operaotr in func sum
function add(...nums) {
    let sum = 0;
    for (value of nums) {
        sum += value;
    }
    console.log(sum);
}
add(1, 2, 3, 4, 5, 6, 7)

// rest operator in object:
let details = {
    name: "user",
    age: 90,
    address: "gokarna",
    status: "online"
}
let {name, ...remaining} = details
console.log(name , remaining);