// Create a Date object using new Date() and display the current date and time
let date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Create a Date object for a specific date of your choice and display it.
let date1 = new Date("2026-01-01")
console.log(date1.toLocaleDateString());

// Use Date.now() to get and display the current timestamp.
console.log(Date.now());

// Create two Date objects for two different dates and find the difference between them in milliseconds.
let date2 =new Date("January 1, 2026")
let date3 = new Date("January 2, 2026")

let diff = date3.getTime() - date2.getTime()
console.log(diff);