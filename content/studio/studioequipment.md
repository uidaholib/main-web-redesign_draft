---
title: "Studio Equipment"
section: The Studio
permalink: /studio/equipment.html
layout: page
---

The Studio has dedicated equipment that stays in the space, as well as loanable equipment that can be checked out. 
Some equipment is locked in the cabinet: please contact [Hanwen Dong](hanwendong@uidaho.edu) for access.

{% assign tools = site.data.find_equipment | where_exp: "t","t.location contains 'studio'" %}
<div class="row">
{% for t in tools %}
<div class="col-md-6 mb-2">
    <div class="card">
        <div class="card-header">
            {{ t.item }}
        </div>
        <div class="card-body">
            {% if t.image %}<div class="text-center"><img class="img-fluid mb-3" src="{{ site.lib-media }}/studio/{{ t.image }}" alt="product image of {{ t.item }}"></div>{% endif %}
            <p class="card-text">{{ t.description }}</p>
        </div>
    </div>
</div>
{% endfor %}
</div>
