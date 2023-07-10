---
title: Description of the Collections
layout: page
section: Special Collections
permalink: /special-collections/description.html
---

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/spec/carousel/spec_crop2.jpg" alt="1917 black and white panoramic photograph of the University of Idaho campus, featuring rolling hills and the College Gothic style administration building" %}

<div class="pb-3 text-center">
    <a href="#types" class="btn btn-outline-payette-blue m-1">
     Collection Types</a>
     <a href="#strengths" class="btn btn-outline-payette-blue m-1">
     Collection Strengths</a>
</div>

{%- assign cats = site.data.spec_categories -%}

Special Collections and Archives specializes in archival materials that document the history and culture of Idaho and the University of Idaho. 
Our holdings contain over 25,000 linear feet of rare, unique, and valuable materials. 

These materials are available for research use by faculty, staff, students, visiting scholars, and the public in the Special Collections [Reading Room](/special-collections/plan.html). 
Most collections are described by finding aids hosted on [Archives West](https://archiveswest.orbiscascade.org/search.php?r=idu), a searchable repository of archival finding aids from throughout the Northwest.

{:#types}
### Collection Types

Materials housed in Special Collections and Archives typically fall into one of three categories, based on the format of the physical items: [manuscript collections](/special-collections/browse.html#mg), [photograph collections](/special-collections/browse.html#pg), and [book collections](/special-collections/browse.html#books).

<div class="row">
{% assign physical = cats | where: 'type','physical' %}
{% for c in physical %}
<div class="col-md-4">
{% capture text %}{{ c.description }} 

<a href="/special-collections/browse.html#{{ c.category }}" class="btn btn-outline-payette-blue">Browse {{ c.display_name }} Collections</a>

{% endcapture %}
{% include feature/card.html header=c.display_name text=text %}
</div>
{% endfor %}
</div>

-------

{:#strengths}
### Collection Strengths

Although our collections cover a wide variety of subjects from across Idaho and the broader Pacific Northwest, the holdings have exceptional coverage of four main collecting areas: 
[jazz](/special-collections/browse.html#jazz), [forestry](/special-collections/browse.html#forestry), [mining](/special-collections/browse.html#mining), and the [University of Idaho](/special-collections/browse.html#university).

<div class="row">
{% assign content = cats | where: 'type','content' %}
{% for c in content %}
<div class="col-md-6">
{% capture text %}{{ c.description }} 

<a href="/special-collections/browse.html#{{ c.category }}" class="btn btn-outline-payette-blue">Browse {{ c.display_name }} Collections</a>

{% endcapture %}
{% include feature/card.html header=c.display_name text=text %}
</div>
{% endfor %}
</div>