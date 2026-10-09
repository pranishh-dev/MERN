# JavaScript Hoisting

> **Hoisting** = JavaScript moves **declarations** to the top of their scope during the creation phase.
Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.

### `var`

`var` is hoisted and initialized with `undefined`.

```JS
console.log(x); // undefined
var x = 10;
```

### `let` & `const`

They are hoisted, but **not initialized**. They stay in the **Temporal Dead Zone (TDZ)** until the declaration is reached.

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

### Function Declaration

Function declarations are fully hoisted.

```js
greet(); // works

function greet() {
    console.log("Hello");
}
```

## 🧠 Quick Memory

```text
var       → hoisted + undefined
let       → hoisted + not intialised but TDZ 
const       → hoisted + not intialised but TDZ 
function  → fully hoisted
```