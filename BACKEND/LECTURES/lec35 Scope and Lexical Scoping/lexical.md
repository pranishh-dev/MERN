# Lexical Scoping & Environment

### 1. Function Call / Invocation
- **Function call = Function invocation**: executing a function.
- Example: `greet();`

### 2. Lexical Scoping
- A function's scope is determined by **where it is defined**, not where it is called.
- A function can access variables from its own scope and its outer (parent) scopes.
- This is decided by the code's written structure.

### 3. Environment
- An **environment** stores variables and references needed during execution.
- Each function call creates a new execution context with its own local variables.
- JavaScript uses the lexical environment to resolve variable names by looking in the current scope, then outer scopes.

### Example
```js
let name = "Rahul";

function greet() {
    console.log(name);
}

function test() {
    let name = "Priya";
    greet();
}

test(); // Rahul
```

**Why?** `greet()` was defined in the global scope, so it looks for `name` in its lexical parent scope, where the value is `"Rahul"`—not where it was called.