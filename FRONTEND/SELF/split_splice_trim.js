let greet = "  Jai Jai sri hit harivanshh  "

console.log(greet.trim()); //removes whitespaces from start and end
console.log(greet.trimStart());
console.log(greet.trimEnd());

console.log(greet.split(" ")); //returns array 


//Slice
let word = "JAVASCRIPT";

console.log(word.slice(0, 4));  // "JAVA"
console.log(word.slice(4));    // "SCRIPT"
console.log(word.slice(-6));   // "SCRIPT"