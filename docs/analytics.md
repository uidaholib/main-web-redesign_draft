# Analytics 

Analytics is only included when building with "JEKYLL_ENV=production".
By default, Jekyll is in the development ENV, and analytics will not be added.
Paste this command into Git Bash or Terminal: 

`JEKYLL_ENV=production jekyll build`

Or use our short cut Rake task: 

`rake deploy`

## Set up

In June 2022 we started collecting data in our new GA 4 property, connected to our existing UA property and tags.
The older GA 3 / UA properties will stop collecting data as of July 1 2023.
The GA 4 property includes a new interface and "measurement id". 

The old tags should be updated to the new measurement id. 

GA4 tag to be used on all library web pages:

```
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BBKDZC8C7F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BBKDZC8C7F');
</script>
```

https://developers.google.com/tag-platform/devguides/privacy

# Event tracking

To get information about clicks on the UI elements of the template, we add Google Analytics event tracking in the foot section. 

[gtag events docs](https://developers.google.com/analytics/devguides/collection/gtagjs/events)

Each event has action, category, and label. 
To group all interactions with the UI elements on the mainweb together, I set up the category `mainweb_ui`.
The event action is `ui_click` or `ui_mobile`. 
The event label is the specific button that is clicked. 
Thus each event looks like:

`gtag('event', 'ui_click', { 'event_category': 'mainweb_ui', 'event_label': 'askUsButton' });`

That function has to be tied to the element on a click event. 
Using jQuery, it looks like:

`$('#askUsButton').click(function() { gtag('event', 'ui_click', { 'anonymize_ip': true, 'event_category': 'mainweb_ui', 'event_label': 'askUsButton' }); });`

The counts of these clicks can be viewed in Analytics > Behavior > Events.

Buttons with events:

- askUsButton
- askUsButtonMobile
- bigMenu
- mobileMenu
- mobilePageNav
- databasesButton
- databasesButtonNav
- dropdownResearchToolsLink

## Old

Differences from old tag setup:
The "anonymize_ip" option is no longer necessary, as it is default in GA4.
GA4 does not have "link_attribution". 
Cross domain tracking is no longer necessary for subdomains, so the "linker" option is unnecessary.

Old tag:

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-76328753-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  /* load umbrella property with enhanced link attribution and cross domain tracking */
  gtag('config', 'UA-76328753-1', {
    'anonymize_ip': true,
    'link_attribution': true,
    'linker': {
      'domains': ['www.lib.uidaho.edu', 'www.ijc.uidaho.edu', 'vivo.nkn.uidaho.edu', 'inside.uidaho.edu', 'www.insideidaho.org', 'libguides.uidaho.edu', 'digital.lib.uidaho.edu', 'poetry.lib.uidaho.edu', 'journals.lib.uidaho.edu']
    }
  });
</script>
```

[gtag docs](https://developers.google.com/analytics/devguides/collection/gtagjs/)

test with [Tag Assistant Recording](https://support.google.com/analytics/answer/6277302) or real time view.

[enhanced link attribution](https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-link-attribution) is enabled (first in analytics Admin property settings, second in gtag code). 
Uses ID of link or nearby parent to specify which link (of all the same href on a page) was actually clicked.

This should be really handy--however, displaying the data isn't directly supported by basic analytics any more, it seems you are supposed to purchase add ons or 3rd party services. 
You can still use the [Page Analytics](https://chrome.google.com/webstore/detail/page-analytics-by-google/fnbdnhhicmebfgdgglcdacdapkcihcoh) chrome extension, however, it isn't officially supported any more, so the results are a bit iffy.

When using Page Analytics, you will notice the largest click groups are for the page itself--which is really clicks on modals, dropdowns, and menus. 
For example, on the index page, for Oct 2019 - June 2019, 44% of clicks are to the index page--these are actually divided up between Ask Us modal, Menu dropdown, mobile Menu modal, mobile dropdown, All Database modal, etc. 

https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization
