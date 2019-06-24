# Notes

we need to start doc-ing how this works!

# data

`pagesnav.yml` contains all the info to create side nav for sections of the site

`people-table.csv` is directory table

`recognitions-bookplates.csv` is faculty bookplate list

`UI-OAPF_FAQ.csv` is faq for OAPF

# tables

adding `table-id:` to yml front matter will load basic datatables dependencies and init datatable on the id. 

# Carousel images

The carousel images are set to "cover" so the edges will be cropped off depending on the size of the page in the browser window. 
The height is set to 500px on desktop, on larger screens as you stretch out towards or beyond the actual px width of the image you will only see the middle 500px. 
Thus, it seems keep the main content centered in the image around 500px high.
Dimensions that seem to work well:

- center around 1200px x 550px, canvas 2000px x 1300px.
- center around 1000px x 600px, canvas 1600px x 900px.

Images are added to the webserver in the `/media/carousel/` directory, not to the github project.

# Foot and custom-foot

All js is loaded at the bottom of the page in "foot.html" include.
First, jquery and bootstrap bundle are loaded, then any other sections based on page layout or other front matter.
This ensures js is loaded in order and is optimized for page load.
If you have a non-standard js that needs to be loaded for the page, use the front matter variable `custom-foot` and provide the filename like you would an include.
The `foot.html` include will add an include in the foot section to the file.

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
