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

Special Collections and Archives specializes in archival materials that document the history and culture of Idaho and the University of Idaho. 
Our holdings contain over 25,000 linear feet of rare, unique, and valuable materials. 

These materials are available for research use by faculty, staff, students, visiting scholars, and the public in the Special Collections [Reading Room](https://www.lib.uidaho.edu/special-collections/plan.html). 
You can explore a list of all our collections on the [Browse Collections](/special-collections/searchall.html) page.

### Collection Strengths

Although our collections cover a wide variety of subjects from across Idaho and the broader Pacific Northwest, the holdings have exceptional coverage of four main collecting areas: 
[jazz](https://www.lib.uidaho.edu/special-collections/searchall.html#jazz), [forestry](https://www.lib.uidaho.edu/special-collections/searchall.html#forestry), [mining](https://www.lib.uidaho.edu/special-collections/searchall.html#mining), and the [University of Idaho](https://www.lib.uidaho.edu/special-collections/searchall.html#university).

<div class="row">
{% assign content = cats | where: 'type','content' %}
{% for c in content %}
<div class="col-md-6">
{% capture text %}{{ c.description }} 

<a href="/special-collections/searchall.html#{{ c.category }}" class="btn btn-outline-payette-blue">Browse {{ c.display_name }} Collections</a>

{% endcapture %}
{% include feature/card.html header=c.display_name text=text %}
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
{% capture text %}{{ c.description }} 

<a href="/special-collections/searchall.html#{{ c.category }}" class="btn btn-outline-payette-blue">Browse {{ c.display_name }} Collections</a>

{% endcapture %}
{% include feature/card.html header=c.display_name text=text %}
</div>
{% endfor %}
</div>
