# JavaScript Classes — Revision Notes

## 1. Constructor Functions (Before ES6)

Before ES6, constructor functions were commonly used to create objects.

```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p1 = new Product("iPhone", 12345);
```

- Constructor functions are regular functions.
- They are conventionally named with a capital letter.
- `new` creates a new object and binds `this` to it.
- `this.name` and `this.price` add properties to the new object.
- `return this` is unnecessary when using `new`.

### Important: What happens internally when using `new`?

Consider:

```js
const p1 = new Product("iPhone", 12345);
```

JavaScript conceptually performs these steps:

**Step 1 — Create a new object**

```js
const newObject = {};
```

**Step 2 — Link the prototype**

The new object's internal prototype is linked to `Product.prototype`.

Conceptually:

```js
Object.setPrototypeOf(newObject, Product.prototype);
```

**Step 3 — Bind `this`**

The constructor function is called with `this` pointing to the new object.

```js
Product.call(newObject, "iPhone", 12345);
```

**Step 4 — Execute the constructor**

```js
this.name = name;
this.price = price;
```

The new object now contains:

```js
{
    name: "iPhone",
    price: 12345
}
```

**Step 5 — Return the object**

The new object is returned automatically.

### Constructor return behavior

```js
function Product(name) {
    this.name = name;

    return { name: "Samsung" };
}

const p1 = new Product("iPhone");

console.log(p1.name); // Samsung
```

If a constructor explicitly returns another object, that object replaces the newly created object.

Returning a primitive or `this` does not replace the new object.

---

## 2. ES6 Classes

Classes provide cleaner syntax for defining constructors and methods.

```js
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    greet() {
        console.log("Hii");
    }
}

const p1 = new Product("iPhone", 12345);
```

### Class Members

| Syntax | Meaning |
|---|---|
| `color = "red"` | Instance field |
| `constructor()` | Initializes a new instance |
| `greet() {}` | Instance method |
| `static count = 0` | Static property |
| `static method() {}` | Static method |
| `#balance` | Private field |

### Instance Properties vs Prototype Methods

```js
class Product {
    color = "red";

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}
```

**Instance properties:**

- `name`
- `color`

Each instance gets its own properties.

**Prototype methods:**

- `greet()`

The method is shared through `Product.prototype`.

```js
const p1 = new Product("iPhone");
const p2 = new Product("Samsung");

console.log(p1.greet === p2.greet); // true
```

### Class Fields vs Methods

```js
class Example {
    method() {}

    functionField = () => {};
}
```

- `method()` is a prototype method.
- `functionField` is an instance property containing a function.
- Each instance gets its own `functionField`.
- Prototype methods are shared.

### `this` in Instance Methods

```js
const p1 = new Product("iPhone");

p1.greet();
```

Here, `this` refers to `p1`.

The receiver before the dot determines `this` for a regular method call.

```js
const greet = p1.greet;

greet(); // undefined for `this` in class methods
```

Class bodies run in strict mode.

---

## 3. Private Fields

Private fields use the `#` prefix.

```js
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance()); // 1000
```

Private fields:

- Can only be accessed inside the class.
- Cannot be accessed directly outside the class.
- Are enforced by JavaScript, not just by convention.

```js
// SyntaxError
// console.log(account.#balance);
```

### Important Difference

```js
this.balance
```

and

```js
this.#balance
```

are two different properties.

Use `this.#balance` when accessing the private field.

---

## 4. Static Properties and Methods

Static members belong to the class itself rather than individual instances.

```js
class BankAccount {
    static totalBankAcc = 0;

    constructor() {
        BankAccount.totalBankAcc++;
    }

    static calculateTax() {
        console.log("Calculating tax...");
    }
}
```

Usage:

```js
const acc1 = new BankAccount();
const acc2 = new BankAccount();

console.log(BankAccount.totalBankAcc); // 2

BankAccount.calculateTax();
```

### Static vs Instance Methods

| Instance Method | Static Method |
|---|---|
| `getBalance()` | `calculateTax()` |
| Called on an instance | Called on the class |
| `account.getBalance()` | `BankAccount.calculateTax()` |
| Works with instance data | Used for class-level operations |

```js
account.calculateTax(); // TypeError
```

The static method is not available on individual instances.

---

## 5. Class vs Constructor Function

| Constructor Function | ES6 Class |
|---|---|
| `function Product() {}` | `class Product {}` |
| Uses `new` | Uses `new` |
| Methods commonly added to `.prototype` | Methods defined in class body go to prototype |
| Can be called without `new` | Cannot be called without `new` |
| No built-in private field syntax in older patterns | Supports `#private` fields |

Classes provide cleaner syntax for many constructor-function patterns, but they are not identical in every detail.

---

## Quick Revision

- `new` creates a new object.
- Constructor `this` points to the newly created object.
- `p1` and `p2` can reference the same object if one is assigned to the other.
- Instance properties belong to individual objects.
- Prototype methods are shared.
- Static members belong to the class.
- Private fields use `#`.
- `this` depends on how a regular function or method is called.
- Constructor functions and classes both use `new` to create instances.