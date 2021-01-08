# Index Carousel 

The Library home page features a large carousel feature configured by "_data/carousel.csv". 

## Carousel images

It is a bit of an art to create good carousel images, but here is the basic idea: 

The carousel images are set to "cover" so the edges will be cropped off depending on the size of the browser window.
The height is set to 500px on desktop, so on larger screens as you stretch out towards or beyond the actual px width of the image you will only see the middle 500px of an image.
Thus, keep the main content centered in the image around 500px high.
Dimensions that seem to work well:

- center around 1200px x 550px, with full size of 2000px x 1300px.
- center around 1000px x 600px, with full size of 1600px x 900px.

The carousel slide image is decorative--it shouldn't have text that is intended to be read! 
(text in an image is inaccessible and a pattern we try to avoid)
The slide's text is added by the HTML, pulled from the carousel.csv columns.

Images are added to the webserver in the `/media/carousel/` directory, not to the github project.

## carousel.csv

Fields:

- image-src, link to image file (usually starting with `/media/carousel/`)
- image-alt, alt text describing the image (required)
- headline, the major heading for the slide (should only be a few words)
- paragraph, the body text for the slide (a sentence or two max, can use html)
- link, full url will become btn link
- link-text, text for btn link 
- link2, full url which will become a second btn link (optional, rarely used)
- link2-text, text for 2nd btn link (optional)
