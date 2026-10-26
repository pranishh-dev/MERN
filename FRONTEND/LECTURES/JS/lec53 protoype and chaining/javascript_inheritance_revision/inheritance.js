// inheritance.js
// Prototype-based inheritance: common -> person -> student -> student12

const common = {
    eat() {
        console.log("Me khata hu bhai.");
    },
};

const person = Object.create(common);
person.walk = function () {
    console.log("Me chal bhi leta hu.");
};

const student = Object.create(person);
student.study = function () {
    console.log("Me padh bhi leta hu.");
};

student.eat();   // Found on common through the prototype chain
student.walk();  // Found on person
student.study(); // Found directly on student

console.log(Object.hasOwn(student, "study")); // true
console.log(Object.hasOwn(student, "walk"));  // false
console.log("walk" in student);               // true: includes inherited properties

// A new object whose prototype is student.
const student12 = Object.create(student);
student12.name = "Student 12";
student12.study(); // Inherited from student

console.log(Object.getPrototypeOf(student12) === student); // true

// Chain: student12 -> student -> person -> common -> Object.prototype -> null
let current = student12;
while (current !== null) {
    console.log(current);
    current = Object.getPrototypeOf(current);
}

// Object.create(null) creates an object with no prototype.
const dictionary = Object.create(null);
dictionary.message = "No prototype";
console.log(dictionary.message);
console.log(Object.getPrototypeOf(dictionary)); // null
// Use Object.hasOwn(dictionary, "message") because it has no hasOwnProperty method.
