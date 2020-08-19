---
title: Description of the Collections
layout: page
section: Special Collections
permalink: /special-collections/description.html
---

<div class="row mb-3">
  <div class="col-md-12">
    <img class="img-fluid" src="{{ site.lib-media }}/spec/carousel/spec_crop2.jpg" alt="1917 panoramic photograph of the University of Idaho campus">
  </div>
</div>

{%- assign cats = site.data.spec_categories -%}

Special Collections and Archives specializes in the acquisition, preservation, and availability of archival research materials that document the history and culture of Idaho and the University of Idaho. We have over 25,000 linear feet of rare, unique, and valuable materials. Many of these collections are related and put into broad categorical groupings, which you will find below. These are not all of our collections, just areas of particular strength and prominence.

The collections housed in this department are for research use by faculty, students, visiting scholars, and the public. 
However, the materials are non-circulating; their use is limited to the Special Collections [Reading Room](https://www.lib.uidaho.edu/special-collections/plan.html). 
You can search all of our collections on the [Search All](/special-collections/searchall.html) page.

### Collection Strengths

Although our collections cover a wide variety of histories and topics from all over Idaho and the broader Pacific Northwest, our collections offer exceptional coverage of four main subjects: 
[jazz](https://www.lib.uidaho.edu/special-collections/searchall.html#jazz), [forestry](https://www.lib.uidaho.edu/special-collections/searchall.html#forestry), [mining](https://www.lib.uidaho.edu/special-collections/searchall.html#mining), and the [University of Idaho](https://www.lib.uidaho.edu/special-collections/searchall.html#university).

<div class="row">
{% assign content = cats | where: 'type','content' %}
{% for c in content %}
<div class="col-md-6">
{% include feature/card.html text=c.description header=c.display_name %}
</div>
{% endfor %}
</div>

-------

### Collection Types

Materials housed in Special Collections & Archives typically fall into one of three categories, based on the format of the physical items: [manuscript collections](https://www.lib.uidaho.edu/special-collections/searchall.html#mg), [photograph collections](https://www.lib.uidaho.edu/special-collections/searchall.html#pg), and [book collections](https://www.lib.uidaho.edu/special-collections/searchall.html#books).

<div class="row">
{% assign physical = cats | where: 'type','physical' %}
{% for c in physical %}
<div class="col-md-4">
{% include feature/card.html text=c.description header=c.display_name %}
</div>
{% endfor %}
</div>
