# version tags on asset urls

In head.html and foot.html version tags are added to the URL for main.css and hours.js. 
This should help issues with caching if major changes are made to those files.
The url with version tag still points to same file location, but browsers should treat it as a new url and refresh their cache.
URL with old version tag will still work the same, since the server just ignores the tag.

Example:

I added some important new style to the CSS. 
Head to head.html, tweak this line: 

`<link rel="stylesheet" href="{{ '/assets/css/main.css?v=2.1' | relative_url }}" type="text/css">`

increasing the `v=2.1` to a larger number. 

Same can be done with foot.html, 

`<script src="{{ '/assets/js/hours.js?v=2.2' | relative_url }}" async></script>`
