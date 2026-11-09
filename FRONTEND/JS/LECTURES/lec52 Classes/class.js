// ES6 class syntax provides a cleaner way
// to define constructors and methods.

class Product {

    // Class field: default instance property
    color = "red";

    constructor(name, price, color) {
        // Automatically invoked when an instance is created with `new`.

        this.name = name;
        this.price = price;

        // Override default color if provided.
        if (color !== undefined) {
            this.color = color;
        }
    }

    // Instance method
    // Shared through Product.prototype
    greet() {
        console.log(`Hii, this is ${this.name}`);
    }
}

const u1 = new Product("iPhone", 123);
const u2 = new Product("Samsung", 1234, "blue");

console.log(u1);
u1.greet();

console.log(u2);
u2.greet();

// Each instance has its own properties.
console.log(u1.color); // red
console.log(u2.color); // blue

// Both instances share the same prototype method.
console.log(u1.greet === u2.greet); // true