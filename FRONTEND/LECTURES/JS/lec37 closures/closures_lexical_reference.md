# Closures, Lexical Environment & References

## 1. Lexical Environment
- A **lexical environment** stores variable bindings and a reference to its outer lexical environment.
- It is created as JavaScript evaluates code.
- It helps JavaScript resolve variable names through the scope chain.

## 2. References
- A function's lexical environment includes a link/reference to its outer lexical environment.
- This link allows the function to access variables declared in its outer scopes.
- JavaScript follows these references to find variables that are not available in the current scope.

## 3. Closures
- A **closure** is a function together with access to its surrounding lexical environment.
- A function can access variables from its outer scope even after the outer function has finished executing.
- Closures are useful for data privacy, maintaining state, and creating function factories.

### Example
```js
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

### How it works
1. `outer()` creates the variable `count` and the function `inner`.
2. `outer()` returns `inner`.
3. Even after `outer()` finishes, `inner` retains access to `count` through its lexical environment.
4. Each call to `counter()` increments the same `count` variable.

### Remember
- **Lexical scoping:** Scope depends on where a function is defined.
- **Scope chain:** The path JavaScript follows to find variables.
- **Lexical environment:** Stores variable bindings and a link to the outer environment.
- **Closure:** A function that retains access to its surrounding lexical environment.