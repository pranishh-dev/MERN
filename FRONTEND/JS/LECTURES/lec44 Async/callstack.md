# JavaScript: `setTimeout`, Web APIs & Event Loop

## 1. `setTimeout()`

- `setTimeout()` is **not part of the JavaScript language itself**; it is provided by the runtime environment.
- In browsers, it is provided by the **Web APIs**.
- In Node.js, timers are provided by the Node.js runtime.

## 2. How It Works

1. `setTimeout()` registers a timer with the runtime.
2. JavaScript continues executing the remaining code.
3. When the timer expires, the callback becomes eligible to enter the **Task Queue**.
4. The **Event Loop** checks whether the Call Stack is empty.
5. When the Call Stack is empty, the callback can be moved to the Call Stack and executed.

## 3. Call Stack vs Task Queue

- **Call Stack → LIFO** (Last In, First Out)
- **Task Queue → FIFO** (First In, First Out)

## 4. Example

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);
//  2000 ms is a minimum delay, not a guarantee that the callback executes exactly after 2 seconds.

console.log("C");
```

**Output:**
```text
A
C
B
```

## 5. Execution Flow

```text
setTimeout()
     ↓
Runtime / Web API starts timer
     ↓
Timer expires
     ↓
Callback becomes eligible for Task Queue
     ↓
Event Loop waits for Call Stack to be empty
     ↓
Callback enters Call Stack
     ↓
Callback executes
```

## Remember

- **Web APIs** → Handle browser features such as timers.
- **Task Queue** → Holds callbacks waiting to execute.
- **Event Loop** → Coordinates when queued callbacks can execute.
- **Call Stack** → Executes JavaScript functions.
- **LIFO** → Last In, First Out.
- **FIFO** → First In, First Out.

> Note: Promise callbacks use the **Microtask Queue**, which is generally processed before the next task from the Task Queue.