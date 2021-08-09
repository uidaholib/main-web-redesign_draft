---
title: Loanable Equipment
section: The Studio
permalink: /studio/loanable.html
layout: page
---

The library offers various equipment for students, faculty, and staff to use in or outside of the library building. 
To check out any piece of equipment, please bring your Vandal card to the Circulation Desk on the library's first floor and sign the U of I Library Multimedia Lending User Agreement form.

{% assign tools = site.data.loanable_equipment %}
<div class="row">
{% for t in tools %}
<div class="col-md-6 mb-2">
    <div class="card">
        <div class="card-header">
            {{ t.name }}
        </div>
        <div class="card-body">
            {% if t.image %}<div class="text-center"><img class="img-fluid mb-3" src="{{ t.image | prepend: '/studio/' | prepend: site.lib-media }}"></div>{% endif %}
            <p class="card-text">{{ t.description }}</p>
            {% if t.link %}<a href="{{ t.link }}" class="btn btn-primary">{{ t.link_text }}</a>{% endif %}
        </div>
    </div>
</div>
{% endfor %}
</div>