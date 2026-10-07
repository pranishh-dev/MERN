// Create a user object containing name, email, and role. Use Object.keys() to get all the property names
const user = {
 name: "Rahul",
 email: "rahul@example.com",
 role: "developer"
};

console.log(Object.keys(user));

// Create a product object containing name, price, and category. Use Object.values() to get all the values
// from the object.
const product = {
 name: "Laptop",
 price: 50000,
 category: "Electronics"
};
console.log(Object.values(product));

//  use Object.entries() to convert its properties into key-value pairs.
console.log(Object.entries(product));

