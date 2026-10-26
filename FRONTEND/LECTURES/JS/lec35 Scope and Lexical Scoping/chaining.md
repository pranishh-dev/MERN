## Scope Chaining

- **Scope chaining** is the process of searching for a variable in the current scope and then its outer lexical scopes if it is not found.
- Search order: **Local Scope → Outer Scope → Global Scope**
- If the variable is not found anywhere in the chain, JavaScript throws a `ReferenceError`.

### Example
```js
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    inner();
}

outer(); // 10 20 30
```

### Key Points
- Scope is determined by **where a function is defined**, not where it is called.
- Inner functions can access variables from outer scopes.
- Outer functions cannot access variables inside inner scopes.
- The scope chain follows the **lexical (written) structure** of the code.