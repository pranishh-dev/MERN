// Store a property name in a variable and use bracket notation to access that property from an object.
const user = {
 name: "Rahul",
 email: "rahul@example.com"
};
const key = "name";
console.log(user[key]);

// Create a user object with name and role. Update the role from "student" to "developer" and display the updated object.
let details = {
 name: "Rahul",
 role: "student"
}
details.role = "developer"
console.log(details);