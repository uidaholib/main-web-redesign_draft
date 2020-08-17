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

The Special Collections Department of the University of Idaho Library includes those materials that, because of subject coverage, rarity, source, condition, or form, are best handled separately from the General Collection. 
The several “collections” housed in this department are for research use by faculty, students, visiting scholars, and the public. 
However, the materials are non-circulating; their use is limited to the Special Collections [Reading Room](https://www.lib.uidaho.edu/special-collections/plan.html).

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
<p>The items housed in Special Collections typically fall into one of three categories: manuscripts, photographs, and books.</p>
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