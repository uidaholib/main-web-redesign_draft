---
title: Research Tools
layout: page
section: Special Collections
permalink: /special-collections/searchtools.html
---

Use these tools to discover finding aids, collections, and items in Special Collections.

{% assign tools = site.data.spec_searchtools %}

<div class="row py-3 justify-content-center">
{% for t in tools %}
<div class="col-md-6 text-center">
{% capture text %}
**Use to find**: {{ t.shortdesc }} 

{{ t.description }}

{% if t.link %}<a href="{{ t.link | relative_url }}" class="btn btn-outline-pride-gold m-1" target="_blank" rel="noopener">Go to {{ t.title }}</a>{% endif %}
{% if t.video %}<a href="{{ t.video }}" class="btn btn-outline-payette-blue m-1" target="_blank" rel="noopener">View tutorial</a>{% endif %}

{% endcapture %}
{% include feature/card.html header=t.title text=text %}
</div>
{% endfor %}
</div>