# HTML Forms — Revision Notes

## 1. Basic Structure
```html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <button type="submit">Submit</button>
</form>
```

- `<form>`: Container for form controls.
- `action`: URL where form data is submitted.
- `method`: HTTP method (`GET` or `POST`).
- `<label>`: Describes an input.
- `for`: Matches the input's `id`.
- `id`: Uniquely identifies an element in the document.
- `name`: Key used for a field in submitted form data.
- `value`: Input's value.

**Remember:** `id` connects labels; `name` identifies submitted fields.

## 2. Input Types
```html
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="tel">
<input type="url">
<input type="date">
<input type="time">
<input type="file">
<input type="checkbox">
<input type="radio">
<input type="range">
<input type="color">
<input type="search">
<input type="hidden">
```

- `text`: Single-line text.
- `password`: Masks entered characters.
- `email`: Email input with built-in validation.
- `number`: Numeric input.
- `tel`: Telephone number.
- `url`: URL input with built-in validation.
- `date`, `time`: Date and time pickers.
- `file`: File selection.
- `checkbox`: Independent, selectable option.
- `radio`: Select one option from a group.
- `range`: Slider.
- `color`: Color picker.
- `search`: Search field.
- `hidden`: Hidden form field.

## 3. Radio Buttons vs Checkboxes

**Radio buttons — choose one option**
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

Radio buttons belong to the same group when they share the same `name`.

**Checkboxes — choose multiple options**
```html
<input type="checkbox" name="skills" value="html"> HTML
<input type="checkbox" name="skills" value="css"> CSS
```

## 4. Other Form Elements
```html
<!-- Multiline text -->
<textarea name="message" rows="4"></textarea>

<!-- Dropdown -->
<select name="country">
    <option value="np">Nepal</option>
    <option value="in">India</option>
</select>

<!-- Buttons -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click</button>
```

- `<textarea>`: Multiline text input.
- `<select>`: Dropdown menu.
- `<option>`: An option inside a dropdown.
- `submit`: Submits the form.
- `reset`: Resets controls to their initial values.
- `button`: Button with no submission behavior by default.

**Note:** A `<button>` inside a form defaults to `type="submit"` if no type is specified.

## 5. Validation Attributes

| Attribute | Purpose |
|---|---|
| `required` | Field must be filled in |
| `placeholder` | Hint inside the field |
| `min` / `max` | Minimum / maximum numeric or date value |
| `minlength` / `maxlength` | Minimum / maximum text length |
| `pattern` | Regular expression constraint |
| `step` | Allowed increments |
| `multiple` | Allows multiple values where supported |
| `checked` | Initially checks a checkbox or radio |
| `selected` | Initially selects an option |
| `readonly` | Cannot edit; value can still be submitted |
| `disabled` | Disabled and excluded from normal submission |

Example:
```html
<input type="email" name="email" required>
<input type="number" name="age" min="16" max="100">
<input type="text" name="username" minlength="3" maxlength="20">
```

HTML validation improves usability but does not replace server-side validation.

## 6. GET vs POST

**GET**
- Commonly sends form data in URL query parameters.
- Useful for searches and filters.
- Parameters may appear in browser history and URLs.

**POST**
- Commonly sends form data in the request body.
- Useful for submissions that create or modify data.
- Does not normally expose the body in the URL.

```html
<form action="/search" method="GET">
    <input type="search" name="q">
    <button type="submit">Search</button>
</form>
```

Searching for `html` may produce `/search?q=html`.

**Important:** POST alone does not encrypt data. Use HTTPS for protection in transit.

## 7. Important Rules

- Every submitted field needs a `name` to be included as a normal named field.
- A `<label for="email">` connects to an element with `id="email"`.
- Radio buttons with the same `name` form a selection group.
- Unchecked checkboxes and radio buttons are not submitted.
- Disabled controls are excluded from normal form submission.
- Readonly controls can be submitted.
- A `<form>` can contain inputs, labels, buttons, selects and textareas.
- Use semantic labels and appropriate input types for accessibility and usability.
