// array.find((element) => condition);

let colors =  ["Red", "Blue", "Green"]
let res = colors.find((color) => color.includes("e")) //stops after the condition is true. so only one value
console.log(res);