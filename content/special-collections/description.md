---
title: Description of the Collections
layout: page
section: Special Collections
permalink: /special-collections/description.html
---

{%- assign cats = site.data.spec_categories -%}

The Special Collections Department of the University of Idaho Library includes those materials that, because of subject coverage, rarity, source, condition, or form, are best handled separately from the General Collection. The several “collections” housed in this department are for research use by faculty, students, visiting scholars, and the public. However, the materials are non-circulating; their use is limited to the Special Collections [Reading Room](https://www.lib.uidaho.edu/special-collections/plan.html).

Access to the materials is provided primarily by the [library's catalog](https://search.lib.uidaho.edu/primo-explore/search?tab=everything&search_scope=everything&vid=UID) and Archives West (link to Archives West?). A knowledgeable staff and a variety of finding aids are available to assist researchers and retrieve materials for study. [Browse](https://www.lib.uidaho.edu/special-collections/searchall.html) our collections and finding aids to learn more.

Here's some information about the archives. We're going to talk about strengths and types. You can search all of our collections on the [Search All](/special-collections/searchall.html) page.

<div class="row">
<div class="col-md-12"><h3>Collection Strengths</h3>
<p>Little paragraph about collection strengths blah blah blah</p>
</div>
{% for c in cats %}
{% if c.type == 'content' %}
{% capture n %}{{ c.display_name }}{% endcapture %}
{% capture d %}{{ c.description }}{% endcapture %}
<div class="col-md-6">
{% include feature/card.html text=d header=n %}
</div>
{% endif %}
{% endfor %}
</div>

<hr>

<div class="row">
<div class="col-md-12"><h3>Collection Types</h3>
<p>The types of collections housed in our Special Collections include manuscripts, photographs, and books.</p>
</div>
{% for c in cats %}
{% if c.type == 'physical' %}
{% capture n %}{{ c.display_name }}{% endcapture %}
{% capture d %}{{ c.description }}{% endcapture %}
<div class="col-md-4">
{% include feature/card.html text=d header=n %}
</div>
{% endif %}
{% endfor %}
</div>

The Special Collections Department of the University of Idaho Library includes those materials that, because of subject coverage, rarity, source, condition, or form, are best handled separately from the General Collection. The several “collections” housed in this department are for research use by faculty, students, visiting scholars, and the public. However, the materials are non-circulating; their use is limited to the Special Collections [Reading Room](https://www.lib.uidaho.edu/special-collections/plan.html).

Access to the materials is provided primarily by the [library's catalog](https://search.lib.uidaho.edu/primo-explore/search?tab=everything&search_scope=everything&vid=UID) and Archives West (link to Archives West?). A knowledgeable staff and a variety of finding aids are available to assist researchers and retrieve materials for study. [Browse](https://www.lib.uidaho.edu/special-collections/searchall.html) our collections and finding aids to learn more.

## Book Collections

We have around 24,000 rare and unique books and university theses in our book collections, which include:

- Publications regarding the history of Idaho and the Pacific Northwest, and books published by Idaho or other PNW presses
- Books written by specific authors, such as Ezra Pound, Sir Walter Scott, and Mark Twain
- University theses and dissertations
- State of Idaho publications
- Other rare books

Our oldest bound manuscript book is [Dialogorum libri quattuor]( https://alliance-primo.hosted.exlibrisgroup.com/permalink/f/m1uotc/CP71161030930001451) from 1492. 

{% include feature/button.html text="Search & Browse Our Book Collections" link="https://www.lib.uidaho.edu/special-collections/searchall.html#books" color="secondary" %}


## Manuscripts and Archives

Among the strengths of the Department of Special Collections and Archives is the acquisition, preservation, cataloging, and use of primary documentation of the history of Idaho and the West. The over 6,000 cubic feet of materials in the collections include personal papers of individuals and families; business records of lumber, railroad, mining, and other companies; papers of government officials, politicians, educators, authors, and business people; records of organizations such as religious, fraternal, and civic associations; and similar groups. They support research into nearly all facets of the history of Idaho and the Pacific Northwest. 

{% include feature/button.html text="Search & Browse Our Manuscript Collection" link="https://www.lib.uidaho.edu//special-collections/searchall.html#mg" color="secondary" %}

## Historical Photograph Collections

These collections consist of photographs in glass negative, negative, and print forms of life, people, and environments in Moscow and the University and surrounding areas. These images date from the mid-late 19th century to the 1970s and 1980s and record many events and places. Several of the Special Collection Historical Photograph Collections have been digitized by [UI Library Digital Initiatives](https://www.lib.uidaho.edu/digital/index.html) and can be viewed through their website. 

{% include feature/button.html text="Search & Browse Our Photograph Collections" link="https://www.lib.uidaho.edu/special-collections/searchall.html#pg" color="secondary" %}  {% include feature/button.html text="Search & Browse for Individual Photographs" link="https://www.lib.uidaho.edu/special-collections/histphoto/" %}

## University Archives

University Archives document the broad history of the University of Idaho. They contain administrative records, university programs and activities, departmental histories, faculty publications and papers, student activities, UI publications, UI and private photographs of University people and events, and other records of University events, actions, and evidence of changing lifeways.

{% include feature/button.html text="Search & Browse University Archive Collections" link="https://www.lib.uidaho.edu/special-collections/searchall.html#university" color="secondary" %}