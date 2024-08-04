# fontawesome notes

We use fontawesome free, and all free icons are currently loaded via CSS + webfonts. 

- ["regular" & "free" icons](https://fontawesome.com/v5/search?q=message&m=free&s=solid%2Cregular%2Cbrands)
- [fontawesome cheatsheet](https://fontawesome.com/cheatsheet)

Add icons in span, `<span class="fas fa-stroopwafel"></span>` (rather than `<i>`), and be sure to add accessibility features.

## Accessibility

- https://fontawesome.com/how-to-use/accessibility
- CSS + webfonts version, need to add aria labels manually. 
    - decorative icons: add `aria-hidden` to element, e.g. `<span class="fas fa-camera-retro" aria-hidden="true"></span>`
    - semantic icons: add `aria-hidden` and a `title` to element, plus add description with `class="visually-hidden"`.
- JS + SVG version adds accessibility aria labels automatically. If the icon has semantic meaning, add a `title=` attribute to the fa `<span>`.

## Loading options

Could be loaded via two methods:

1. CSS + webfonts: traditional method, load webfonts. good with lots of icons on the page, simple, low CPU use.
2. JS + SVG: newer method, insert SVG icons using JS. good with fewer icons, higher CPU use.

Assets for both methods are add the project, but it is using currently using CSS, check comments in `_includes/head.html`.
