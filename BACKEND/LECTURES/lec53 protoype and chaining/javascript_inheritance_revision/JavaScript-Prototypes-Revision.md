# JavaScript Revision: Prototypes, Inheritance, Classes, and Shadowing

## 1. Prototype-based inheritance

JavaScript objects can inherit properties and methods from another object through a **prototype chain**.

```js
const animal = {
    eat() {
        console.log("Eating");
    },
};

const person = Object.create(animal);
person.walk = () => console.log("Walking");

const student = Object.create(person);
student.study = () => console.log("Studying");

student.eat();   // animal
student.walk();  // person
student.study(); // student
```

`Object.create(proto)` creates a new object whose prototype is `proto`.

```text
student -> person -> animal -> Object.prototype -> null
```

When a property is accessed, JavaScript checks the object first. If it is not found, JavaScript checks its prototype, then the next prototype, until it finds the property or reaches `null`.

### Own vs inherited properties

```js
Object.hasOwn(student, "study"); // true
Object.hasOwn(student, "walk");  // false
"walk" in student;               // true
```

- `Object.hasOwn(obj, key)` checks only the object's own properties.
- `key in obj` checks own **and inherited** properties.
- `hasOwnProperty()` is inherited from `Object.prototype`; it may not exist on objects created with `Object.create(null)`. `Object.hasOwn()` is safer.

### Inspecting and setting prototypes

```js
Object.getPrototypeOf(student);
Object.getPrototypeOf(person);
Object.getPrototypeOf(Object.prototype); // null

const child = {};
Object.setPrototypeOf(child, student);
child.study(); // inherited from student
```

Prefer `Object.create()` when you know the prototype at creation time. Changing an existing object's prototype with `Object.setPrototypeOf()` is usually unnecessary and can hurt performance. `__proto__` is a legacy accessor; prefer `Object.getPrototypeOf()` for inspection.

### An object with no prototype

```js
const dictionary = Object.create(null);
dictionary.message = "Hello";
console.log(Object.getPrototypeOf(dictionary)); // null
```

This object does not inherit `toString()` or `hasOwnProperty()`. Use `Object.hasOwn(dictionary, "message")` to check own keys.

## 2. Classes and instances

JavaScript `class` syntax gives a clean way to define constructor behavior and shared instance methods. Classes still use prototypes underneath.

```js
class BankAccount {
    #balance;
    static totalAccounts = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
        BankAccount.totalAccounts++;
    }

    getBalance() {
        return this.#balance;
    }

    static describe() {
        console.log("A bank account");
    }
}

const account = new BankAccount(100);
account.getBalance();            // 100
BankAccount.describe();          // static method
account instanceof BankAccount;  // true
```

- `constructor()` runs when `new` creates an instance.
- `this` refers to the new instance when called with `new`.
- `#balance` is a private field, accessible only inside the class.
- Instance methods are stored on `BankAccount.prototype`, shared by instances.
- `static` fields and methods belong to the class itself, not individual instances.
- `instanceof` checks whether the constructor's `prototype` appears in an object's prototype chain.

### `instanceof Object`

```js
1 instanceof Object;               // false
Number(1) instanceof Object;       // false: Number(1) is a primitive
new Number(1) instanceof Object;   // true: wrapper object
```

Prefer primitive values such as `1`; wrapper objects such as `new Number(1)` are rarely needed.

## 3. Common prototype chains

```js
const arr = [];
const obj = {};
function greet() {}

Object.getPrototypeOf(arr) === Array.prototype; // true
Object.getPrototypeOf(obj) === Object.prototype; // true
Object.getPrototypeOf(Array.prototype) === Object.prototype; // true
Object.getPrototypeOf(greet) === Function.prototype; // true
Object.getPrototypeOf(Object.prototype); // null
```

Typical chains:

```text
array   -> Array.prototype    -> Object.prototype -> null
object  -> Object.prototype   -> null
function -> Function.prototype -> Object.prototype -> null
```

String and number primitives can access methods through temporary wrapper objects, but the primitive values themselves are not ordinary objects.

## 4. Adding methods to prototypes

```js
Array.prototype.printItems = function () {
    for (const item of this) console.log(item);
};

[1, 2, 3].printItems();
```

This is useful as a learning exercise, but **avoid modifying built-in prototypes in production code**. It can cause conflicts with libraries and other code. Prefer a standalone function:

```js
function printItems(items) {
    for (const item of items) console.log(item);
}

printItems([1, 2, 3]);
```

Avoid modifying `Object.prototype` especially because the change can affect a very large number of objects.

## 5. Method shadowing

An object's own property shadows a property with the same name on its prototype.

```js
const user = {
    toString() {
        console.log("My own method");
    },
};

user.toString();
```

JavaScript finds `toString` directly on `user`, so `Object.prototype.toString` is not called.

## 6. Key takeaways

- Inheritance works through the prototype chain.
- `Object.create(proto)` creates an object with the given prototype.
- `Object.getPrototypeOf(obj)` inspects an object's prototype.
- `Object.hasOwn(obj, key)` checks own properties; `key in obj` includes inherited properties.
- Classes are syntax built on JavaScript's prototype system.
- Private fields (`#field`) are accessible only inside their class.
- Static members belong to the class; instance methods are shared through the prototype.
- `instanceof` checks a prototype-chain relationship, not whether a value is a primitive of a given type.
- Shadowing occurs when an object defines a property also present on its prototype.
- Prototype modifications are best kept to isolated learning demonstrations.

## Run the examples

Run each file separately with Node.js:

```bash
node inheritance.js
node class.js
node chain.js
```

The files are independent; `class.js` does not depend on variables declared in `inheritance.js`.
