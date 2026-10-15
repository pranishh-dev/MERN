# JavaScript: `input` vs `change` Events

## 1. `input` Event
- Fires whenever the user changes an input's value.
- Best for **real-time updates**.

**Use cases:** Character counters, live search, live previews.

```js
bio.addEventListener("input", () => {
    console.log(bio.value.length);
});
```

## 2. `change` Event
- Fires when a change is committed.
- For text inputs, usually fires when the user leaves the field after editing.
- For checkboxes, fires when checked/unchecked.
- For dropdowns, fires when the selection changes.

**Use cases:** Handling dropdown selections, checkbox changes, processing completed text edits.

```js
country.addEventListener("change", () => {
    console.log(country.value);
});
```

## 3. Key Differences

| `input`                         | `change` |
|---                              | ---                     |
| Updates during editing          | Fires when the change is committed |
| Fires repeatedly while typing   | Usually fires once per committed edit |
| Ideal for live feedback         | Ideal for committed changes |

## 4. Remember
- `input` → value changes during editing.
- `change` → value change is committed according to the element's behavior.
- Use `input` for character counters because the remaining count must update immediately.
- `change` does **not** always mean blur; behavior depends on the input type.