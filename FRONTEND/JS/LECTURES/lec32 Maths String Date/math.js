let abs = Math.abs(-10); 
//MAth = object , abs() -> func -> absolute
console.log(abs)


console.log(Math.abs(-Infinity));
console.log(typeof(Infinity))

console.log(Math.PI)

console.log(Math.pow(2,4))
console.log(Math.sqrt(-1))
console.log(Math.max(2,10,23,2,9,10,20))

console.log(Math.round(Math.PI))

console.log(Math.ceil(2.0))
console.log(Math.ceil(2.1))

console.log(Math.floor(8.0))
console.log(Math.floor(9.9))

console.log(Math.random()) // random num btn 0 and 1 : [0,1) 1 exluded;
//RANDOM CASE : LUDOO
let min = Math.min(1,2,3,4,5,6);
let max = Math.max(1,2,3,4,5,6);


let random = Math.floor(Math.random() * ( max - min + 1)) + min;
// or
// let random = Math.floor(Math.random() * ( max - min + 1) + min);

console.log(random)