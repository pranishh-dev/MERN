// ==========================================
// 1. THIS IN AN OBJECT METHOD
// ==========================================

let student = {
    name: "pranish",
    age: 16,

    printName: function () {
        console.log(this.name);
    }
};

student.printName(); // pranish
// this refers to student because the call is student.printName()
//this == obj before the dot (.)

// ==========================================
// 2. SHARING A METHOD BETWEEN OBJECTS
// ==========================================

let student2 = {
    name: "JAIJAI",
    printName: student.printName
};

student2.printName(); // JAIJAI
// The function is shared, but this depends on how it is called.
// student2.printName() -> this refers to student2


// ==========================================
// 3. EXTRACTING A METHOD INTO A VARIABLE
// ==========================================

name = "Priya"; // In a non-strict browser script, creates/sets a global property.

let result = student.printName;

result();
// Standalone call: this no longer refers to student.
// In a non-strict browser script, this refers to window.
// In strict mode, this is undefined, causing a TypeError at this.name.


// ==========================================
// 4. GLOBAL THIS VS FUNCTION THIS
// ==========================================

console.log(this);
// Classic browser script: window
// ES module: undefined

function fn() {
    console.log(this);
}

fn();
// Regular standalone function call:
// Non-strict mode -> global object
// Strict mode -> undefined


// ==========================================
// 5. REGULAR FUNCTION VS ARROW FUNCTION
// ==========================================


let product = {
    name2: "iphone",

    printName1: function () {
        console.log(this.name2);
    },

    printName2: () => {
        console.log(this.name2);
    }
};

product.printName1(); // iphone
// Regular function: this refers to product.

product.printName2(); // Usually undefined in a classic browser script
// Arrow function: inherits this from its surrounding lexical environment.
// Calling it through product does NOT make this refer to product.


// ==========================================
// 6. ARROW FUNCTION INSIDE A REGULAR METHOD
// ==========================================

let objArrow = {
    name: "Ladili",

    printName: function () {
        let fn = () => {
            console.log(this.name);
        };

        fn();
    }
};

objArrow.printName(); // Ladili
// 1. objArrow.printName() -> this refers to objArrow.
// 2. The arrow function inherits this from printName().
// 3. Therefore, this.name is objArrow.name -> "Ladili".

