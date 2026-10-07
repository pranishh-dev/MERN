// Create a user object and use the spread operator to create a copy of it.
const user = {
    name: "Rahul",
    role: "developer"
};

let userCopy1 = { ...user }
console.log(userCopy1);

// copy the user and change into student
let userCopy2 = {
    ...user,
    role: "student"
}
console.log(userCopy2);

//  Combine Two Arrays Using Spread
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

let lang = [...frontend, ...backend]
console.log(lang);



//. Rest Parameters

// Create a function named showSkills that accepts a developer's name as the first parameter and any
// number of skills using a rest parameter. Display the name and skills.
function showSkills(name , ...skills) {
    console.log(name, skills);
    
}
showSkills("Rahul", "HTML", "CSS", "JavaScript");