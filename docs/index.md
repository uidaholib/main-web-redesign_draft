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
