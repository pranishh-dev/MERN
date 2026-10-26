let age = "12abc";
console.log(parseInt(age))
console.log(Number(age))
console.log(Number.parseInt(age))

let weight = "123.2";
console.log(parseInt(weight))
console.log(Number(weight))
console.log(Number.parseInt(weight))
 
// Number() → whole string → supports decimals
// parseInt() / Number.parseInt() → beginning of string → integer only

let height = 126.22645234;
console.log(height.toFixed(2))
console.log(height.toFixed());

console.log(height.toPrecision(5)) //5 significant num