# JavaScript Scope

> **Scope** = The area of a program where a variable can be accessed or used.

## Types of Scope

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

---

## 1. Global Scope

A variable declared **outside all functions and blocks** has global scope.

```js
let name = "Rahul";

function greet() {
    console.log(name); // accessible
}

console.log(name); // accessible
```

**→ Accessible from almost anywhere in the program.**

---

## 2. Function Scope

Variables declared with `var` inside a function can only be accessed **inside that function**.

```js
function test() {
    var age = 20;

    console.log(age); // accessible
}

console.log(age); // ❌ Error
```

**→ `var` is function-scoped.**

---

## 3. Block Scope

A **block** is code inside `{ }`, such as `if`, `for`, and `while`.

`let` and `const` are **block-scoped**.

```js
if (true) {
    let x = 10;
    const y = 20;
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error
```

**→ `let` and `const` cannot be accessed outside the block.**

---

## Important

| Keyword   |   Scope   |
|---|---|
| `var`     | Function Scope |
| `let`     | Block Scope    |
| `const`   | Block Scope    |

---

## Scope Chain

If JavaScript cannot find a variable in the **current scope**, it searches the **outer scope**, then continues outward until the global scope.

```js
let x = 10;

function test() {
    let y = 20;

    if (true) {
        console.log(x); // 10
        console.log(y); // 20
    }
}
```

### Search order


Current Scope
      ↓
Outer Scope
      ↓
Global Scope


## 🧠 Quick Memory Trick


var   → Function Scope
let   → Block Scope
const → Block Scope
