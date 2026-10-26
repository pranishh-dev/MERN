# Global Object in Browser vs Node.js

## 1. Browser

In a browser, `window` and `globalThis` refer to the same global object.

```js
window === globalThis // true
this === window       // true (classic script, top level)
```

- `window` → browser's global object
- `globalThis` → standard way to access the global object
- `this` → refers to the global object at the top level of a classic script
- `global` → not a standard browser global

## 2. Node.js

In Node.js, `global` and `globalThis` refer to the same global object.

```js
global === globalThis // true
global != this
```

- `global` → Node.js's traditional global object
- `globalThis` → standard way to access the global object
- Top-level `this` in a CommonJS module is `module.exports`, NOT `globalThis`.

## Quick comparison

| Browser | Node.js |
|---|---|
| `window === globalThis` | `global === globalThis` |
| `window` is the global object | `global` is the global object |
| Top-level `this` in a classic script is `window` | Top-level `this` in CommonJS is `module.exports` |

**Remember:** `globalThis` is the standard cross-environment reference to the global object. Top-level `this` depends on the execution environment and module type.