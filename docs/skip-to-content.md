# Skip to main content

To help screen readers and keyboard users, a skip to main content link is provided at the top of every page.
The link is hidden by default (in a way still visible to screen readers), until given focus (for keyboard users).
The set up is based on https://webaim.org/techniques/skipnav/

To make it work:

- the default layout contains the link, `<div id="skip-to-content"><a href="#maincontent">Skip to main content</a></div>`
- each page must have a container `<main id="maincontent" role="main">` around the main content (past all the nav elements, before the page title). This is automatically included in page and full-width-page layout, and added to the index.html manually. 
- the css is in the _sass/_custom.scss
