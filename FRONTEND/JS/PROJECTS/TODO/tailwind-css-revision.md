# Tailwind CSS --- Complete Revision Notes

> Tailwind CSS is a **utility-first CSS framework**. You compose
> predefined utility classes in HTML or JSX instead of writing a
> separate CSS rule for every element.

## 1. Utility-first approach

**Traditional CSS**

``` html
<button class="btn">Click me</button>
```

``` css
.btn {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}
```

**Tailwind**

``` html
<button class="rounded-md bg-blue-600 px-4 py-2 text-white">
  Click me
</button>
```

## 2. Class naming patterns

  Utility          Meaning                         Example
  ---------------- ------------------------------- -------------------------
  `bg-`            Background                      `bg-blue-500`
  `text-`          Text size or color              `text-xl`, `text-white`
  `font-`          Font weight                     `font-bold`
  `p-`             Padding                         `p-4`
  `px-`, `py-`     Horizontal / vertical padding   `px-4`, `py-2`
  `m-`             Margin                          `m-4`
  `mx-`, `my-`     Horizontal / vertical margin    `mx-auto`, `my-4`
  `w-`, `h-`       Width / height                  `w-full`, `h-10`
  `flex`, `grid`   Layout                          `flex`, `grid`
  `rounded-`       Border radius                   `rounded-lg`
  `border-`        Border                          `border-gray-300`
  `shadow-`        Box shadow                      `shadow-md`
  `gap-`           Space between layout items      `gap-4`

Default spacing scale examples: `2` = `0.5rem` (usually 8px), `4` =
`1rem` (usually 16px), `6` = `1.5rem` (usually 24px). Tailwind also
supports arbitrary values such as `w-[350px]` and `bg-[#121212]`.

## 3. Text, fonts and colors

### Text size

`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`,
`text-4xl`

### Font weight

`font-light`, `font-normal`, `font-medium`, `font-semibold`,
`font-bold`, `font-extrabold`

### Alignment and decoration

-   Alignment: `text-left`, `text-center`, `text-right`, `text-justify`
-   Decoration: `underline`, `no-underline`, `line-through`
-   Case: `uppercase`, `lowercase`, `capitalize`, `normal-case`
-   Line height: `leading-none`, `leading-tight`, `leading-normal`,
    `leading-relaxed`
-   Letter spacing: `tracking-tight`, `tracking-normal`, `tracking-wide`

### Colors

Examples: `text-red-500`, `bg-indigo-600`, `border-gray-300`,
`bg-black/50`.

Remember: `text-xl` changes size, while `text-blue-600` changes color.

## 4. Margin, padding and spacing

  Class            Meaning
  ---------------- ------------------------------------------
  `p-4`            Padding on all sides
  `px-4`, `py-2`   Horizontal / vertical padding
  `pt-4`, `pb-4`   Top / bottom padding
  `m-4`            Margin on all sides
  `mt-4`, `mb-4`   Top / bottom margin
  `mx-auto`        Automatic horizontal margins
  `gap-4`          Gap between flex/grid items
  `space-y-4`      Vertical spacing between direct children

**Margin** creates space outside an element. **Padding** creates space
between its border and content.

``` html
<div class="mx-auto mt-8 max-w-md p-6">
  <h2 class="mb-4 text-xl font-bold">Login</h2>
  <input class="mb-3 w-full p-2" />
  <button class="rounded bg-blue-600 px-4 py-2 text-white">Submit</button>
</div>
```

`mx-auto` often centers a block horizontally when its width is
constrained.

## 5. Width, height and sizing

-   `w-full`: 100% width
-   `w-1/2`: 50% width
-   `w-screen`: viewport width
-   `w-fit`, `w-max`, `w-min`: content-based sizing
-   `max-w-md`: maximum width preset
-   `min-w-0`: allow an item to shrink below its intrinsic content size
-   `h-full`: 100% of containing block's height
-   `h-screen`: viewport height (`100vh`)
-   `min-h-screen`: at least viewport height
-   `size-10`: width and height both 2.5rem
-   `aspect-square`: 1:1 aspect ratio

Arbitrary sizing: `w-[350px]`, `h-[200px]`.

``` html
<main class="min-h-screen px-4 py-8">
  <section class="mx-auto max-w-5xl">
    <!-- Page content -->
  </section>
</main>
```

## 6. Display and layout

### Flexbox

  Class               Purpose
  ------------------- -----------------------------------
  `flex`              Enable flexbox
  `flex-row`          Horizontal direction
  `flex-col`          Vertical direction
  `flex-wrap`         Allow items to wrap
  `items-center`      Align items on the cross axis
  `justify-center`    Center on the main axis
  `justify-between`   Distribute space between items
  `justify-end`       Push items to the end
  `gap-4`             Space between items
  `flex-1`            Allow item to grow and fill space
  `shrink-0`          Prevent shrinking
  `grow`              Allow growth
  `self-end`          Align one item at the end

``` html
<nav class="flex items-center justify-between p-4">
  <h1 class="text-xl font-bold">Brand</h1>
  <div class="flex items-center gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <button class="rounded-lg bg-blue-600 px-4 py-2 text-white">Login</button>
  </div>
</nav>
```

### Grid

Useful classes: `grid`, `grid-cols-2`, `grid-cols-3`, `grid-cols-12`,
`grid-rows-2`, `col-span-2`, `col-span-full`, `place-items-center`,
`place-content-center`, `gap-x-4`, `gap-y-6`.

``` html
<div class="grid grid-cols-3 gap-4">
  <div class="rounded-lg bg-blue-100 p-4">Card 1</div>
  <div class="rounded-lg bg-blue-100 p-4">Card 2</div>
  <div class="rounded-lg bg-blue-100 p-4">Card 3</div>
</div>
```

Other display utilities: `block`, `inline`, `inline-block`, `hidden`,
`inline-flex`.

**Flex vs Grid:** Flexbox is best for arranging items along one main
axis; Grid is useful for two-dimensional rows and columns. They can be
combined.

## 7. Borders, corners, shadows and opacity

``` html
<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
  <h2 class="text-lg font-semibold">Profile Card</h2>
  <p class="mt-2 text-gray-600">Welcome back!</p>
</div>
```

-   Borders: `border`, `border-2`, `border-t`, `border-dashed`,
    `border-gray-300`
-   Radius: `rounded-none`, `rounded-sm`, `rounded-md`, `rounded-lg`,
    `rounded-xl`, `rounded-2xl`, `rounded-full`
-   Shadows: `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`,
    `shadow-xl`, `shadow-none`
-   Opacity: `opacity-0`, `opacity-50`, `opacity-75`, `opacity-100`
-   Background transparency: `bg-black/50`, `bg-blue-600/80`
-   Ring: `ring-2`, `ring-blue-500`, `ring-offset-2`
-   Outline: `outline-none`, `outline-2`, `outline-offset-2`

## 8. Positioning and z-index

  Class                Meaning
  -------------------- ------------------------------------------------
  `static`             Default positioning
  `relative`           Establish a positioning reference
  `absolute`           Position relative to a positioned ancestor
  `fixed`              Position relative to the viewport
  `sticky`             Stick during scrolling when constraints permit
  `top-0`, `right-0`   Set offsets
  `inset-0`            Set all four offsets to zero
  `z-10`, `z-50`       Set stacking order

``` html
<div class="relative size-16">
  <img src="profile.jpg" alt="Profile" class="size-full rounded-full object-cover" />
  <span class="absolute bottom-0 right-0 size-4 rounded-full border-2 border-white bg-green-500"></span>
</div>
```

The parent uses `relative`; the badge uses `absolute`.

## 9. Images and overflow

-   `object-cover`: fill the image box and crop excess.
-   `object-contain`: show the entire image inside the box.
-   `object-center`: center the crop.
-   `overflow-hidden`: clip overflowing content.
-   `overflow-auto`, `overflow-y-auto`: scroll when needed.
-   `truncate`: single-line ellipsis for overflowing text.
-   `break-words`: allow long words to wrap.

``` html
<img src="photo.jpg" alt="Landscape" class="h-56 w-full rounded-xl object-cover" />
<p class="truncate">This long text will be shortened...</p>
```

## 10. Responsive design

Tailwind is **mobile-first**. Unprefixed utilities apply at all sizes;
breakpoint-prefixed utilities apply at that breakpoint and larger by
default.

  Prefix        Default minimum width
  ----------- -----------------------
  No prefix                 All sizes
  `sm:`                         640px
  `md:`                         768px
  `lg:`                        1024px
  `xl:`                        1280px
  `2xl:`                       1536px

``` html
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-xl bg-blue-100 p-4">Card 1</div>
  <div class="rounded-xl bg-blue-100 p-4">Card 2</div>
  <div class="rounded-xl bg-blue-100 p-4">Card 3</div>
</div>
```

-   Mobile: 1 column.
-   At 640px and above: 2 columns.
-   At 1024px and above: 3 columns.

``` html
<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive heading</h1>
<div class="flex flex-col md:flex-row">...</div>
<div class="hidden md:block">Visible at medium screens and above</div>
```

**Common mistake:** `sm:` does not mean "only on mobile." Use unprefixed
classes for mobile styles.

## 11. State variants

Variants apply utilities only when a condition is true.

``` html
<button class="rounded-lg bg-blue-600 px-5 py-2 text-white
               hover:bg-blue-700 active:scale-95
               focus-visible:outline-2 focus-visible:outline-blue-600
               disabled:cursor-not-allowed disabled:opacity-50">
  Submit
</button>
```

  Variant             When it applies
  ------------------- ----------------------------------------------
  `hover:`            Pointer hovers
  `focus:`            Element has focus
  `focus-visible:`    Focus should be visibly indicated
  `active:`           Element is being activated
  `disabled:`         Element is disabled
  `checked:`          Checkbox/radio is checked
  `invalid:`          Form control is invalid
  `first:`, `last:`   First / last child
  `odd:`, `even:`     Odd / even child
  `group-hover:`      Parent marked `group` is hovered
  `peer-checked:`     A preceding sibling marked `peer` is checked

### `group` example

``` html
<div class="group rounded-xl border p-4 hover:bg-blue-50">
  <h2 class="font-bold group-hover:text-blue-600">Hover over this card</h2>
  <p class="text-gray-500">The heading changes color.</p>
</div>
```

### `peer` example

``` html
<label>
  <input type="checkbox" class="peer" />
  <span class="peer-checked:text-green-600">Accept terms</span>
</label>
```

## 12. Transitions, transforms and animations

``` html
<button class="rounded-lg bg-indigo-600 px-4 py-2 text-white
               transition duration-300 ease-in-out
               hover:-translate-y-1 hover:shadow-lg">
  Hover me
</button>
```

-   Transitions: `transition`, `transition-all`, `transition-colors`,
    `duration-300`, `ease-in-out`, `delay-150`
-   Transforms: `scale-105`, `scale-95`, `rotate-45`, `-translate-y-1`,
    `translate-x-2`
-   Animations: `animate-spin`, `animate-ping`, `animate-pulse`,
    `animate-bounce`
-   Reduced motion: `motion-reduce:animate-none`

Transitions smooth changes between states; animations create predefined
or custom movement.

## 13. Backgrounds, gradients and filters

``` html
<section class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-10 text-white">
  <h1 class="text-4xl font-bold">Welcome</h1>
</section>
```

-   Gradients: `bg-gradient-to-r`, `bg-gradient-to-b`, `from-blue-500`,
    `via-purple-500`, `to-pink-500`
-   Background images: `bg-cover`, `bg-contain`, `bg-center`,
    `bg-no-repeat`
-   Filters: `blur-sm`, `grayscale`, `brightness-110`, `blur-none`
-   Blend: `mix-blend-multiply`, `bg-blend-overlay`

## 14. Dark mode

The `dark:` variant provides dark-theme styles. When it activates
depends on the Tailwind version and dark-mode configuration.

``` html
<div class="rounded-xl bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-white">
  <h2 class="text-xl font-bold">Dark Mode Card</h2>
  <p class="text-gray-600 dark:text-gray-300">Adapts to the active theme.</p>
</div>
```

## 15. Forms and accessibility

``` html
<form class="mx-auto max-w-md space-y-4">
  <div>
    <label for="email" class="mb-1 block font-medium">Email</label>
    <input id="email" type="email" required
      class="w-full rounded-lg border border-gray-300 px-3 py-2
             focus:border-blue-500 focus:outline-2 focus:outline-blue-500" />
  </div>
  <button type="submit"
    class="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
    Sign in
  </button>
</form>
```

-   `block` puts the label on its own line.
-   `space-y-4` separates direct children vertically.
-   `focus:` styles focused controls.
-   `required` and `type="email"` enable native browser validation.
-   Connect labels to inputs using matching `for` and `id`.
-   Keep keyboard focus visible and maintain sufficient color contrast.

## 16. CSS property quick reference

  CSS concept         Tailwind examples
  ------------------- ----------------------------------------------
  `display`           `block`, `flex`, `grid`, `hidden`
  `flex-direction`    `flex-row`, `flex-col`
  `align-items`       `items-center`, `items-start`
  `justify-content`   `justify-center`, `justify-between`
  `position`          `relative`, `absolute`, `fixed`, `sticky`
  `overflow`          `overflow-hidden`, `overflow-auto`
  `cursor`            `cursor-pointer`, `cursor-not-allowed`
  `pointer-events`    `pointer-events-none`, `pointer-events-auto`
  `user-select`       `select-none`, `select-text`
  `box-sizing`        `box-border`, `box-content`
  `visibility`        `visible`, `invisible`
  `white-space`       `whitespace-nowrap`, `whitespace-normal`

## 17. Arbitrary values

Use square brackets when the default scale does not fit your needs.

``` html
<div class="w-[350px] bg-[#121212] p-[18px]">Custom values</div>
<div class="absolute left-[25px] top-[17px]"></div>
<div class="grid grid-cols-[200px_1fr]"></div>
<div class="text-[13px]"></div>
```

Prefer built-in utilities when they fit your design system; arbitrary
values are useful for one-off designs.
