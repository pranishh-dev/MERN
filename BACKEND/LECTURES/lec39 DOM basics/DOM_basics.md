# DOM Manipulation — Selecting, Creating & Modifying Elements

## 1. DOM (Document Object Model)
- The browser builds a **DOM tree** from HTML when a page loads.
- It represents the page as objects that JavaScript can access and modify.
- Elements have relationships such as **parent**, **children**, and **siblings**.
- `document` represents the loaded HTML document.

## 2. Selecting elements

```js
document.getElementById("title");       // one element by id
document.getElementsByClassName("item"); // live HTMLCollection
document.getElementsByTagName("p");      // live HTMLCollection

document.querySelector(".item");         // first matching CSS selector
document.querySelectorAll(".item");      // static NodeList of all matches
```

- CSS selector examples: `"#title"` (id), `".item"` (class), `"p"` (tag).
- `getElementById()` returns one element or `null`.
- `querySelector()` returns the first match or `null`.
- `querySelectorAll()` returns a NodeList; it is not an Array.
- `HTMLCollection` is also not an Array. Convert when array methods are needed:
  `Array.from(collection)`.

## 3. Reading and changing content

```js
const el = document.querySelector("#title");

el.innerText = "Hello";        // visible/rendered text
el.textContent = "Hello";      // text content, including hidden text
el.innerHTML = "<b>Hello</b>"; // parses HTML markup
```

- `innerHTML` reads/writes HTML markup; do not insert untrusted user input into it.
- Use `textContent` when you want to insert plain text safely.
- `innerText` reflects rendered/visible text and can depend on styling.

## 4. Attributes

```js
el.getAttribute("href");            // read attribute
el.setAttribute("title", "Info");   // set attribute
el.removeAttribute("title");        // remove attribute
```

## 5. Classes

```js
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active"); // true or false
```

Use `classList` to manage CSS classes without replacing the entire `class` attribute.

## 6. Inline styles and data attributes

```js
el.style.color = "red";
el.style.backgroundColor = "black";

el.dataset.userId; // reads data-user-id="..."
```

- JavaScript style property names use camelCase, e.g. `backgroundColor`.
- `dataset` accesses custom HTML attributes beginning with `data-`.

## 7. Creating and inserting elements

```js
const p = document.createElement("p");
p.textContent = "New paragraph";

document.body.append(p);       // adds at the end
document.body.prepend(p);      // adds at the beginning
```

- `createElement()` creates an element; it does not put it into the page by itself.
- `append()` can insert nodes and text, and can accept multiple arguments.
- `appendChild()` adds a single node and returns the appended node.

## 8. Removing elements

```js
el.remove();                   // removes the element itself
parent.removeChild(el);        // removes a child from its parent
```

## Quick reminders
- `document` lets JavaScript access the DOM.
- Select → read/change properties → insert or remove as needed.
- `querySelector()` returns the first match; `querySelectorAll()` returns all matches.
- `HTMLCollection` and `NodeList` are not Arrays.
