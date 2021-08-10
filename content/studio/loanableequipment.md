---
title: Loanable Equipment
section: The Studio
permalink: /studio/loanable.html
layout: page
---

The library offers various equipment for students, faculty, and staff to use in or outside of the library building. 
To check out any piece of equipment, please bring your Vandal card to the Circulation Desk on the library's first floor and sign the U of I Library Multimedia Lending User Agreement form.

{% assign tools = site.data.find_equipment | where_exp: "t","t.loan" %}
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
            {% if t.booking_link %}{% assign links = t.booking_link | split: ';' %}
            {% for l in links %}
            <a href="{{ l }}" class="btn btn-primary btn-sm m-2" target="_blank" rel="noopener">Reserve Item</a>
            {% endfor %}
            {% endif %}
        </div>
    </div>
</div>
{% endfor %}
</div>