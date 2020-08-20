---
title: Search Tools
layout: page
section: Special Collections
permalink: /special-collections/searchtools.html
---

Use these tools to discover finding aids, collections, and items in Special Collections.

{% assign tools = site.data.spec_searchtools %}

<div class="row py-3">
{% for t in tools %}
<div class="col-md-6 text-center">
{% capture text %}
**Use to find**: {{ t.shortdesc }} 

{{ t.description }}

<a href="{{ t.link }}" class="btn btn-outline-pride-gold">Go to {{ t.title }}</a>

{% endcapture %}
{% include feature/card.html header=t.title text=text %}
</div>
{% endfor %}
</div>