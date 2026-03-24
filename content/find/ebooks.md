--- 
title: Finding eBooks 
section: Find 
permalink: /find/ebooks.html 
layout: page-narrow
---

The Library subscribes to almost 900,000 ebooks all discoverable in our [online catalog](https://alliance-uidaho.primo.exlibrisgroup.com/discovery/search?vid=01ALLIANCE_UID:UID). 
Look for the "Resource Type" filter on the left side of your search results to limit the items to "ebooks".

Unlike print books, you can't browse these resources on shelves--so accessing ebooks is a little different. 
Ebook subscriptions are purchased from a wide variety of providers and each platform has slightly different features and functionality.
Most will allow you to view ebooks anywhere, on your computer, ereaders, and mobile devices.

Keep in mind that not all books are available as ebooks.
Ebook subscriptions are separate from our print book purchases.
If you need digital access to items in our print collection, look for the digitization request button on the catalog record.

## Accessing eBooks

In general you need to be connected to campus wifi *or* logged in with your U of I account to access most ebooks.
If you click on links from our catalog and databases this should happen automatically, taking you through U of I's single sign on system.

Once authenticated, all ebook collections allow you to read in your web browser. 
However, each platform has different terms for downloading, printing, and using ebooks on other devices. 
Some subscriptions allow only a limited number of users to access the resource at the same time.

Many downloaded ebooks have Digital Rights Management software (DRM) that prevents users from sharing files with others and may impose a time limit for use. These ebooks may require using the free [Adobe Digital Editions](https://www.adobe.com/solutions/ebook/digital-editions.html) software or the free [Thorium Reader](https://connect.ebsco.com/s/article/EBSCO-eBooks-LCP-Thorium-Frequently-Asked-Questions) (Ebsco) to download the file.

{% capture instructions %}
1. Start your search in the library's catalog ![catalog search box]({{ site.lib-media }}/find/Catalog19.png){:.img-fluid .mb-3}
2. Limit to ebooks using "Resource Type" filter on the right side of search page ![filter results]({{ site.lib-media }}/find/Ebooks19.png){:.img-fluid .mb-3}
3. Click on the title for more information about each ebook, or go straight to the full text with the "Full Text Available" or "Online Access" links. ![ebook records]({{ site.lib-media }}/find/Ebooks219.png){:.img-fluid .mb-3}
{% endcapture %}
{% include feature/card.html text=instructions header="Step by Step Instructions" %}

## Open Access eBooks

There are many sources of freely available ebooks on the web. 
These range from open access scholarly books to free copies of popular classics. 

{% assign freebooks = site.data.find_ebooks | where: 'type','oa' %}
{% for b in freebooks %}
| ![{{ b.title }} logo]({{ site.lib-media }}/find/{{ b.img }}){:.img-fluid} | [{{ b.title }}]({{ b.link }}){:.h4} | {{ b.description }} |{% endfor %}
{:.table }

