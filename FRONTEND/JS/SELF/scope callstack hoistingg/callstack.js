console.log("Start of script 2");

setTimeout(() => {
    console.log("A");
}, 0);

setTimeout(() => {
    console.log("B");
}, 3*1000);

setTimeout(() => {
    console.log("C");
}, 2 * 1000);

console.log("End of script");
console.log('Bye Bye');
