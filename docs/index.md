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
