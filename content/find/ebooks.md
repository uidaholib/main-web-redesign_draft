--- 
title: Finding eBooks 
section: Find 
permalink: /find/ebooks.html 
layout: page-narrow
---

The Library subscribes to many thousands of ebooks all discoverable in our [online catalog](https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=default_tab&sortby=rank&vid=UID). 
Look for the "Resource Type" filter on the left side of your search to limit the results to just "ebooks".

Unlike print books, you can't browse these resources on shelves--so accessing ebooks is a little different. 
Ebook subscriptions are purchased from a wide variety of providers and each platform has slightly different features and functionality.
Most will allow you to view ebooks anywhere, on your computer, ereaders, and mobile devices.

Keep in mind that not all books are available as ebooks.
Ebook subscriptions are separate from our print book purchases.
If you need digital access to items in our print collection, please explore our [document delivery and digitization services]({{ '/services/ill/docdelivery.html' | relative_url }}).

## Accessing eBooks

In general you will need to be connected to on campus wifi or logged in with your U of I account to access most ebooks.
If you click on links from our catalog and databases this should happen automatically, taking you through U of I's single sign on system.

Once authenticated, all ebook collections will allow you to read in your web browser. 
However, each platform will have different terms for downloading, printing, and using ebooks on other devices. 
Some subscriptions allow only a limited number of users to access the resource at the same time.

Many downloaded ebooks have Digital Rights Management software (DRM) that prevents users from sharing files with others and may impose a time limit for use.
These ebooks may require using the free [Adobe Digital Editions](https://www.adobe.com/solutions/ebook/digital-editions.html) software to download the file.

## Open Access eBooks

There are many sources of freely available ebooks on the web. 
These range from open access scholarly books to free copies of popular classics. 

{% assign freebooks = site.data.find_ebooks | where: 'type','oa' %}
{% for b in freebooks %}
| ![{{ b.title }} logo]({{ b.img }}){:.img-fluid} | [{{ b.title }}]({{ b.link }}){:.h4} | {{ b.description }} |{% endfor %}
{:.table }

