---
title: "Studio Equipment"
section: The Studio
permalink: /studio/equipment.html
layout: page
lazyload: true
---

The Studio has dedicated equipment that stays in the space, as well as loanable equipment that can be checked out. 
Some equipment is locked in the cabinet: please contact [Hanwen Dong](hanwendong@uidaho.edu) for access.

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
            {% if t.image %}<div class="text-center"><img class="img-fluid mb-3 lazyload" data-src="{{ site.lib-media }}/studio/{{ t.image }}" alt="product image of {{ t.item }}"></div>{% endif %}
            <p class="card-text">{{ t.description }}</p>
        </div>
    </div>
</div>
{% endfor %}
{% endfor %}
</div>
