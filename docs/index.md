# Notes

To build with Analytics use `rake deploy`!

we need to start doc-ing how this works!

# data

`config_pagesnav.yml` contains all the info to create side nav for sections of the site.

See "docs/site_data.md" for information about various data used to generate features on the site.

# tables

Adding `table-id:` to yml front matter will load basic datatables dependencies and init datatable on the id. 
The table should be added to the page content, with the `id` on the `<table>` element.
By default it is not paginated. 
Add `table-paginate: true` to yml front matter to add datatables pagination feature.

# Foot and custom-foot

All js is loaded at the bottom of the page in "foot.html" include.
First, jquery and bootstrap bundle are loaded, then any other sections based on page layout or other front matter.
This ensures js is loaded in order and is optimized for page load.

If you have a non-standard js that needs to be loaded for the page, use the front matter variable `custom-foot` and provide the filename(s) like you would an include (separate multiple includes using a `;` semicolon).
The "foot.html" include will add an include in the foot section to the page.

# Links

For security and performance reasons all links with `target="_blank"` attribute should also have the attribute `rel="noopener"`.
For example, `<a href="" target="_blank" rel="noopener">link</a>`

See https://web.dev/external-anchors-use-rel-noopener/

We use Bootstrap button classes to style many of our links. 
If they are actual links, i.e. go to a different page or to an anchor on the page, they should NOT have the attribute `role="button"` since this can trigger odd rendering and unnecessary screen reader interactions. 
For example, `<a class="btn btn-primary" href="https://example.com">Link</a>`.

If `<a>` tags are used to trigger interactivity on the page, for example opening a modal, then they SHOULD have `role="button"` for accessibility purposes. 
For example, `<a class="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#exampleModal">Link</a>`.
In these cases it might make more sense to replace the `<a>` with a `<button>` element.

# www.lib.uidaho.edu vs. lib.uidaho.edu

The *official* url of the library is "www.lib.uidaho.edu". 
I asked ITS to get "lib.uidaho.edu" to work and redirect--which it does now. 
However, do not use "lib.uidaho.edu" anywhere in code--the redirect seems to have some issues, so you will end up with insecure content warnings or cross origin blocks. 
It seems that if you try to load an image using "lib.uidaho.edu" it loads insecure, giving a mixed content warning.

# Lazy load

To lazyload images on a page, add `lazyload: true` to yml front matter. 
This will add `lazysizes.min.js` to the foot ([lazysizes docs](https://github.com/aFarkas/lazysizes). 

For images that should be lazy loaded, add `class="lazyload"` and replace "src" with `data-src`.

It is a good idea to add lazyload to modal images and other large images that start off screen, since this will greatly speed up page load.

# Robots / noindex

If you need a page to have the `<meta name="robots" content="noindex" />` meta tag, add `noindex: true` to the front matter.

# Sprint issue tracking

- [drive folder](https://drive.google.com/open?id=1NTIBOM0k35Vn7QgKjK3EbGbxg3u2F3LK)
- [problem sheet](https://docs.google.com/spreadsheets/d/1YfBYW0g12v-_bgvRN9o8TwQSp_L__sEuxyHYISh_RXw/edit?usp=sharing)
