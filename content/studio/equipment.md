---
title: Equipment
section: The Studio
permalink: /studio/equipment.html
layout: page
lazyload: true
---

The Studio provides a wide range of equipment to support your audio and video projects.

There are two types of equipment available:
- In-Studio Equipment: Dedicated tools that stay in the space for your use during a reservation.
- [Loanable Equipment]({{ '/find/equipment-loans.html' | relative_url }}): Select items can be checked out separately for use outside the Studio.

For details about available software and important guidelines, visit our [FAQ page]({{ '/studio/faq.html' | relative_url }}) and review the [Terms of Use]({{ '/studio/termsofuse.html' | relative_url }}).

{% assign tools = site.data.find_equipment | where_exp: "t","t.location contains 'studio'" %}
{% assign categories = tools | map: 'category' | uniq %}
<div class="row">
<div class="col-12 mb-3 text-center">
{% for c in categories %}<a href="#{{ c | slugify }}" class="btn btn-sm btn-outline-pride-gold m-2">{{ c }}</a>{% endfor %}
</div>
{% for c in categories %}
<div class="col-12">
<h2 id="{{ c | slugify }}" class="my-4">{{ c }}</h2>
</div>
{% assign set = tools | where: 'category', c %}
{% for t in set %}
<div class="col-md-6 mb-2">
    <div class="card">
        <div class="card-header">
            {{ t.item }}
        </div>
        <div class="card-body">
            {% if t.image %}<div class="text-center"><img class="img-fluid mb-3 lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E" data-src="{{ site.lib-media }}/studio/{{ t.image }}" alt="product image of {{ t.item }}"></div>{% endif %}
            <p class="card-text">{{ t.description }}</p>
        </div>
    </div>
</div>
{% endfor %}
{% endfor %}
</div>
