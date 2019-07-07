# Analytics 

Analytics is only included when building with "JEKYLL_ENV=production".
By default, Jekyll is in the development ENV, and analytics will not be added.
Paste this command into Git Bash or Terminal: 

`JEKYLL_ENV=production jekyll build`

Or use our short cut Rake task: 

`rake deploy`

## Set up

We use google analytics, using the newest implementation gtag.
The same code snippet can be used on any library web page. 
Looks like:

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-76328753-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  /* load umbrella property with enhanced link attribution and cross domain tracking */
  gtag('config', 'UA-76328753-1', {
    'link_attribution': true,
    'linker': {
      'domains': ['www.lib.uidaho.edu', 'www.ijc.uidaho.edu', 'vivo.nkn.uidaho.edu', 'inside.uidaho.edu', 'www.insideidaho.org', 'libguides.uidaho.edu', 'digital.lib.uidaho.edu', 'poetry.lib.uidaho.edu', 'journals.lib.uidaho.edu']
    }
  });
</script>
```

[gtag docs](https://developers.google.com/analytics/devguides/collection/gtagjs/)

## Cross domain tracking

Fairly easy to set up using gtag. 
We just have to provide a list of all domains we want to track across, can use same snippet on all pages and domains.  

https://developers.google.com/analytics/devguides/collection/gtagjs/cross-domain

## Enhanced link attribution 

[enhanced link attribution](https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-link-attribution) is enabled (first in analytics Admin property settings, second in gtag code). 
Uses ID of link or nearby parent to specify which link (of all the same href on a page) was actually clicked.

This should be really handy--however, displaying the data isn't directly supported by basic analytics any more, it seems you are supposed to purchase add ons or 3rd party services. 
You can still use the [Page Analytics](https://chrome.google.com/webstore/detail/page-analytics-by-google/fnbdnhhicmebfgdgglcdacdapkcihcoh) chrome extension, however, it isn't officially supported any more, so the results are a bit iffy.

When using Page Analytics, you will notice the largest click groups are for the page itself--which is really clicks on modals, dropdowns, and menus. 
For example, on the index page, for Oct 2019 - June 2019, 44% of clicks are to the index page--these are actually divided up between Ask Us modal, Menu dropdown, mobile Menu modal, mobile dropdown, All Database modal, etc. 


