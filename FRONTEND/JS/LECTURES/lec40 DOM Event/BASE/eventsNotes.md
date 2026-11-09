# JavaScript DOM Events — Notes from Basics to Event Capturing

## 1. What is an event?

An **event** is something that happens in the browser that JavaScript can react to.

Examples:
- A user clicks a button.
- A user double-clicks an element.
- The mouse moves over an element.
- A keyboard key is pressed.
- A form is submitted.

**Analogy:** An event is like a doorbell ringing. The event is the ring; the callback function is what you do after hearing it.

```text
User action → Event occurs → Listener notices it → Callback runs
```

## 2. Prerequisites: selecting elements

Before attaching an event listener, JavaScript usually needs to select the HTML element.

```js
let body = document.querySelector("body");
let btn1 = document.querySelector("#btn1");
```

- `document` represents the web page.
- `querySelector()` finds the **first** element matching a CSS selector.
- `"body"` selects the `<body>` element.
- `"#btn1"` selects the element whose `id` is `btn1`. The `#` comes from CSS ID-selector syntax.
- `let` declares a variable that can be reassigned.

Example HTML:

```html
<button id="btn1">Click me</button>
```

**Important:** If no element matches the selector, `querySelector()` returns `null`. Trying to call `addEventListener()` on `null` causes an error. Make sure the element exists and that your script runs after the HTML element has been parsed (for example, put the script near the end of `<body>` or use `defer` on an external script).

## 3. `addEventListener()` — listening for events

### Basic syntax

```js
element.addEventListener(eventType, callback);
```

- `element`: the HTML element to listen on.
- `eventType`: the event name as a string, such as `"click"` or `"dblclick"`.
- `callback`: the function JavaScript runs when that event happens.

### Example A: inline arrow callback

```js
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("Pyariju ko meri sudh kaun karawe");
});
```

When `btn1` is clicked, the arrow function runs and prints the message.

### Example B: named callback function

```js
let btn2 = document.querySelector("#btn2");

let naamJap = () => {
    console.log("Radhavallabh sri harivansh");
};

btn2.addEventListener("dblclick", naamJap);
```

When `btn2` is double-clicked, `naamJap` runs.

**Why use a named function?**
- It can be reused by multiple listeners.
- It can be removed later by passing the same function reference to `removeEventListener()`.
- It can make event-handling code easier to read.

### Common event types

| Event | What triggers it |
|---|---|
| `click` | Click or tap/click activation |
| `dblclick` | Double-click |
| `mousedown` | Mouse button is pressed down |
| `mouseup` | Mouse button is released |
| `mouseover` | Pointer enters an element or one of its descendants |
| `mouseout` | Pointer leaves an element or moves to another descendant |
| `mouseenter` | Pointer enters the element; does not bubble |
| `mouseleave` | Pointer leaves the element; does not bubble |
| `mousemove` | Pointer moves over an element |
| `keydown` | A keyboard key is pressed |
| `keyup` | A keyboard key is released |
| `input` | An input's value changes as the user edits it |
| `change` | A value change is committed, depending on the control |
| `submit` | A form is submitted |

Use the exact lowercase event name, without the `on` prefix:
- Correct: `addEventListener("click", fn)`
- Not the recommended pattern: `addEventListener("onclick", fn)`

## 4. Creating and showing HTML elements

Your code creates a new heading when `btn3` is clicked:

```js
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Naam jap gara bhai sri radhavallabh sri harivansh";
    body.append(h1);
});
```

Step by step:
1. `document.createElement("h1")` creates a new `<h1>` element in memory.
2. `h1.innerText = "..."` sets its visible text.
3. `body.append(h1)` inserts it into the page.
4. Each click creates and appends **another** heading.

### Avoid repeated headings

If the heading should appear only once, create it once or check whether it already exists.

```js
let btn3 = document.querySelector("#btn3");
let h1 = document.createElement("h1");
h1.innerText = "Naam jap gara bhai sri radhavallabh sri harivansh";

btn3.addEventListener("click", () => {
    if (!document.querySelector("#revealed-heading")) {
        h1.id = "revealed-heading";
        body.append(h1);
    }
});
```

Alternatively, toggle an existing element's visibility with CSS instead of creating new elements.

## 5. Changing visibility with `classList`

Your code:

```js
let btn4 = document.querySelector("#btn4");
let gift = document.querySelector("#gift");

btn4.addEventListener("click", () => {
    gift.classList.toggle("hidden");
});
```

`classList` provides methods to add, remove, or toggle CSS classes.

```js
gift.classList.add("visible");    // Add the class
gift.classList.remove("hidden");  // Remove the class
gift.classList.toggle("hidden");  // Add if absent; remove if present
gift.classList.contains("hidden");// true if the class exists
```

Example CSS:

```css
.hidden {
    display: none;
}
```

If `gift` starts with the `hidden` class, each click toggles it between hidden and visible.

**Common mistake:** `toggle("hidden")` does not inherently mean “show.” It switches the class on/off. Its initial state depends on the element's existing classes and CSS.

## 6. The event object

The browser can pass an **event object** to the callback. It contains information about the event.

```js
clickThis.addEventListener("dblclick", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.clientX);
    console.log(e.clientY);
});
```

`e` is just a variable name. `event` is another common name. The browser supplies the event object when it calls the callback.

### Useful event-object properties

| Property | Meaning |
|---|---|
| `e.type` | Event type, e.g. `"dblclick"` |
| `e.target` | The element where the event originated |
| `e.currentTarget` | The element whose listener is currently running |
| `e.clientX` | Pointer's horizontal position relative to the viewport |
| `e.clientY` | Pointer's vertical position relative to the viewport |
| `e.key` | Keyboard key information for keyboard events |
| `e.defaultPrevented` | Whether the event's default action has been prevented |

**Important correction:** `e.key` is useful for keyboard events such as `keydown` and `keyup`. In a `dblclick` event, it will generally be `undefined`.

### `target` vs `currentTarget`

Imagine a button contains a `<span>`:

```html
<button id="clickThis"><span>Click this text</span></button>
```

If the listener is attached to the button and the user clicks the span:
- `e.target` may be the `<span>` because that is where the event began.
- `e.currentTarget` is the `<button>` because its listener is running.

```text
<button id="clickThis">  ← currentTarget (listener is here)
    <span>Text</span>    ← target (click began here)
</button>
```

`currentTarget` refers to the current listener's element. It can differ as an event travels through ancestors.

### Pointer coordinates

- `clientX` and `clientY` are measured from the top-left of the **visible browser viewport**.
- They are not coordinates relative to the entire web page.
- For page-relative coordinates, look at `pageX` and `pageY`.



## 7. Removing an event listener

You wrote:

```js
function fn() {
    console.log("RADHA naam sudharasam rasayitumm jiwastu me bimhala");
}

btn1.addEventListener("click", fn);
btn1.removeEventListener("click", fn);
```

### What does `removeEventListener()` do?

It removes a previously registered event listener. In this example, the listener is added and then immediately removed, so it will not remain active for later clicks.

### Syntax

```js
element.removeEventListener(eventType, callback);
```

For the removal to work, match:
1. The same element.
2. The same event type.
3. The same callback function reference.
4. The same capture setting if you used the capture option.

### Why does the function reference matter?

This works:

```js
function sayHi() {
    console.log("Hi");
}

btn1.addEventListener("click", sayHi);
btn1.removeEventListener("click", sayHi);
```

This does not remove the first listener:

```js
btn1.addEventListener("click", () => console.log("Hi"));
btn1.removeEventListener("click", () => console.log("Hi"));
```

The two arrow functions create two different function objects. They may contain identical code, but they are not the same function reference.

**Memory trick:** To remove a listener, bring back the same “key” (function reference) that you used to register it.
