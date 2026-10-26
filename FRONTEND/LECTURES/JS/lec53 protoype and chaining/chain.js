// chain.js
// Built-in prototype chains, custom methods, and method shadowing.

const arr = [1, 2, 3, 4];
const obj = { name: "PriyaLal" };

console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// Learning demo only: avoid adding methods to built-in prototypes in real projects.
Array.prototype.printItems = function () {
    for (const item of this) {
        console.log(item);
    }
};

arr.printItems();
const colors = ["red", "yellow"];
colors.printItems();

String.prototype.kuchBhi = function () {
    console.log("Ye dekho Shyam, ye hi to hai mere jeevan-pran.");
};
"priyalal".kuchBhi();

// Object.prototype is inherited by many ordinary objects, arrays, and functions.
// Avoid modifying it in real applications because the change affects many objects.
Object.prototype.allInOne = function () {
    console.log("Me to all-in-one hu laadle.");
};

arr.allInOne();        // Array -> Object.prototype
"priyalal".allInOne(); // String wrapper -> Object.prototype
obj.allInOne();        // Object.prototype

function greet() { }
greet.allInOne();      // Function -> Object.prototype
Object(1).allInOne();  // Number wrapper -> Object.prototype
// A primitive can also access inherited methods through temporary boxing:
(1).allInOne();

// Shadowing: an own property takes priority over the inherited property.
const user = {
    name: "LadliLal",
    toString() {
        console.log("Ye to apna method hai bhai.");
    },
};
user.toString(); // Calls user.toString, not Object.prototype.toString

// Clean up prototype modifications after the demo, especially in shared environments.
delete Array.prototype.printItems;
delete String.prototype.kuchBhi;
delete Object.prototype.allInOne;
