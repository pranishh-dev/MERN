

// Constructor functions were used before ES6 classes.
// They are regular functions conventionally called with `new`.

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// `new` creates a separate object for each call.
const p1 = new Product("iPhone", 12345);
const p2 = new Product("Samsung", 9000);

console.log(p1);
console.log(p2);

// p1 and p2 are different objects.
console.log(p1 === p2); // false

// Without `new`, this is just a regular function call.
// In strict mode, `this` is undefined.
// In non-strict mode, `this` may refer to the global object.

// Avoid calling constructor functions without `new`.