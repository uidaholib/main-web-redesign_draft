# HTML Redirect 

If we need to redirect a page it is best to use `.htaccess` or php direct so that there is 305 headers sent.
However, we don't necessarily have access to those now...
So there is a `_layouts/redirect.html` to do a hacky html redirect.

On the page to redirect change front matter to `layout: redirect` and add `redirect: /permalink` with the permalink of the page to redirect to.
Example: 

```
---
title: Example
permalink: /find/example.html
layout: redirect
redirect: /find/dvds.html
---
```

Note: you still need the permalink for the page you want to redirect, because it still needs to be built out and put in that location.

Optionally, provide a `refresh` value as number of seconds. 
By default it is set to `1`, which will make the redirect very quickly visible to the user. 
If you would like to ensure they see the redirect, add a longer time, e.g. `refresh: 10`.
If you want to redirect immediately, use `refresh: 0`.
