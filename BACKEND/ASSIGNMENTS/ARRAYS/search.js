// Use indexOf() to find the index of "JavaScript"
let lang = ["HTML", "CSS", "JavaScript", "React"]
console.log(lang.indexOf("JavaScript"));

// Create an array of user objects containing name and age. Use find() to get the user whose name is "Rahul".
let userDetails = [
 { name: "Rahul", age: 20 },
 { name: "Priya", age: 22 }
]
let user = userDetails.find((user)=> user.name === "Rahul")
console.log(user);


// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".
console.log(userDetails.findIndex((user)=>user.name === "Priya"));