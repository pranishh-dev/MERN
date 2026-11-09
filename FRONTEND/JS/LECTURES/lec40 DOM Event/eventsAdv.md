# JavaScript DOM Events — Notes After Section 6

> Continuation of the earlier notes. This file begins at Section 7 and covers removing event listeners, listener options, event propagation, capturing, bubbling, and related concepts.

## 8. Listener options — `{ once: true }`

Your code:

```js
let btn6 = document.querySelector("#btn6");

btn6.addEventListener("click", fn, { once: true });
```

The third argument is an options object. `{ once: true }` tells the browser to run this listener at most once, then remove it automatically.

```text
First click  → fn runs → listener is removed
Second click → this listener does not run again
```

Other useful options:

```js
element.addEventListener("click", fn, {
    once: true,
    capture: true,
    passive: true
});
```

- `once: true`: run only once.
- `capture: true`: run during the capturing phase.
- `passive: true`: tells the browser that this listener will not call `preventDefault()`. It is useful for some scrolling and touch events.

Do not use `passive: true` when you need to cancel the event's default browser action.

## 9. Event propagation

**Event propagation** describes how an event travels through related elements in the DOM.

Example HTML:

```html
<div id="outer">
    <div id="middle">
        <button id="inner">Click me</button>
    </div>
</div>
```

The button is inside `middle`, and `middle` is inside `outer`.

A click on the button can travel through three phases:

```text
1. Capturing: document → outer → middle → inner
2. Target:    inner
3. Bubbling:  inner → middle → outer → document
```

This is the conceptual route. The exact route depends on the DOM and the event.

## 10. Capturing phase

During **capturing**, the event travels from outer ancestors down toward the target.

```js
const outer = document.querySelector("#outer");

outer.addEventListener("click", () => {
    console.log("outer capture");
}, { capture: true });
```

The important part is `{ capture: true }`. It registers the listener for the capturing phase.

## 11. Target phase

The **target phase** occurs when the event reaches the element where it originated.

If the user clicks the button, the button is the target:

```js
const inner = document.querySelector("#inner");

inner.addEventListener("click", () => {
    console.log("inner target");
});
```

Remember:
- `e.target` is the original event target.
- `e.currentTarget` is the element whose listener is currently running.

These properties can refer to different elements when the event travels through ancestors.

## 12. Bubbling phase

During **bubbling**, an event that supports bubbling travels from the target back up through its ancestors.

```js
outer.addEventListener("click", () => {
    console.log("outer bubble");
});
```

A normal `addEventListener("click", callback)` listener runs during the bubbling phase on ancestors by default. On the target itself, the listener runs at the target phase.

Not all events bubble. For example, `mouseenter` and `mouseleave` do not bubble, while `click` does.

## 13. Try a propagation experiment

HTML:

```html
<div id="outer">
    Outer
    <div id="middle">
        Middle
        <button id="inner">Click inner</button>
    </div>
</div>
```

JavaScript:

```js
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

outer.addEventListener("click", () => {
    console.log("outer capture");
}, { capture: true });

middle.addEventListener("click", () => {
    console.log("middle capture");
}, { capture: true });

inner.addEventListener("click", () => {
    console.log("inner target");
});

middle.addEventListener("click", () => {
    console.log("middle bubble");
});

outer.addEventListener("click", () => {
    console.log("outer bubble");
});
```

When you click the button, the expected output order is:

```text
outer capture
middle capture
inner target
middle bubble
outer bubble
```

**Practice:** Predict the output before running the code. Then click the `middle` area outside the button and compare the result.

## 14. `stopPropagation()` vs `preventDefault()`

These methods do different jobs.

### `stopPropagation()`

```js
inner.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("inner clicked");
});
```

It stops the event from continuing to other nodes along the propagation path. It does not automatically cancel the browser's default action, and it does not stop other listeners on the same element.

### `preventDefault()`

```html
<a id="my-link" href="https://example.com">Open link</a>
```

```js
const link = document.querySelector("#my-link");

link.addEventListener("click", (e) => {
    e.preventDefault();
});
```

It prevents the browser's default action when that action is cancelable and the listener is not passive. In this example, it prevents the link's normal navigation.

```text
stopPropagation() → Stops travel to other nodes
preventDefault()  → Cancels the browser's default action
```

## 15. Event delegation

**Event delegation** means attaching one event listener to a parent element to handle events from its child elements. It works especially well for events that bubble.

HTML:

```html
<ul id="products">
    <li><button class="delete">Delete A</button></li>
    <li><button class="delete">Delete B</button></li>
    <li><button class="delete">Delete C</button></li>
</ul>
```

JavaScript:

```js
const products = document.querySelector("#products");

products.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
        console.log("Delete button clicked:", e.target);
    }
});
```

### Why use delegation?

- One listener can handle many buttons.
- It can handle child buttons added later, as long as their events bubble to the parent.
- It avoids registering a separate listener on every child.

### What if the button contains an icon or span?

The actual `e.target` might be a nested element inside the button. Use `closest()` to find the button:

```js
products.addEventListener("click", (e) => {
    const button = e.target.closest(".delete");

    if (!button || !products.contains(button)) return;

    console.log("Delete button:", button);
});
```

- `closest(".delete")` checks the element itself and then its ancestors.
- `products.contains(button)` ensures that the matched button belongs to this list.
- `return` exits the callback when the click did not come from a matching button inside the list.

## 16. Common mistakes

- Using a different anonymous function in `removeEventListener()`.
- Forgetting `{ capture: true }` when intentionally registering a capturing listener.
- Assuming all events bubble.
- Mixing up `e.target` and `e.currentTarget`.
- Thinking `stopPropagation()` cancels a link's navigation.
- Thinking `preventDefault()` stops an event from bubbling.
- Checking only `e.target.matches(".delete")` when the user might click a nested icon or span.
- Forgetting that `once: true` automatically removes that listener after its first invocation.

## 17. Quick revision sheet

```js
// Remove a listener using the same function reference
element.removeEventListener("click", fn);

// Run once
element.addEventListener("click", fn, { once: true });

// Capture phase
element.addEventListener("click", fn, { capture: true });

// Stop propagation
e.stopPropagation();

// Cancel the default browser action
e.preventDefault();

// Event delegation
parent.addEventListener("click", (e) => {
    if (e.target.matches(".child-button")) {
        console.log("Child button clicked");
    }
});
```

## 18. Practice questions

Try answering without looking back at the notes.

1. Why must `removeEventListener()` receive the same callback reference?
2. What does `{ once: true }` do after the first click?
3. Which direction does capturing travel?
4. Which direction does bubbling travel?
5. Does a normal click event bubble?
6. What is the difference between `e.target` and `e.currentTarget`?
7. How is `stopPropagation()` different from `preventDefault()`?
8. Why is event delegation useful for a list of buttons?
9. Why might `e.target.matches(".delete")` fail if a button contains an icon?
10. Predict the console order when a nested button is clicked with both capture and bubble listeners.

### Small coding challenge

Build a list with three buttons. Add a single click listener to the parent using event delegation. When any button is clicked, print that button's text. Then add a capturing listener to the parent and predict which message appears first.
