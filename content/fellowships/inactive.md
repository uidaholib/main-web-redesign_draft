---
title: One-Time and Inactive Fellowships Opportunities
section: Fellowships
permalink: /fellowships/inactive.html
layout: page
---

Some library fellowships are one-time in nature, and some are currently inactive. These are listed below: 

{% assign fellowships = site.data.opportunities_fellowships | sort: 'title'  %}
{% for f in fellowships %}
{% if f.active == 'no' %}
<div class="row my-4 p-4 border {% if f.status == 'open' %}border-success{% endif %}" id="{{ f.title | slugify }}">
    <div class="col-md-10">
        <h4>{% if f.link %}<a href="{{ f.link }}">{{ f.title }}</a>{% else %}{{ f.title }}{% endif %}</h4>
    </div>
    {% if f.status == 'open' %}<div class="col-md-2">{% include feature/button.html text="Open Now" link=f.link color="outline-success" %}</div>{% endif %}
    <div class="col-md-12 my-2">
        <p><strong>Deadline:</strong> {{f.deadline}} | <strong>Fellowship Amount:</strong>{% if f.amount.size > 5 %} {{f.amount}}{% else %} ${{f.amount}}{% endif %} | <strong>Library Sponsor:</strong> {{ f.sponsor }}</p>
        <p class="d-none"><strong>Who is Eligible:</strong> {% assign eligible = f.eligible | split: ";" %}{% for e in eligible %}<span class="btn btn-outline-info btn-sm mx-2">{{ e | strip | capitalize }}</span>{% endfor %}</p>
        <p class="my-3">{{ f.description }}</p>
        <p class="text-end"><a class="btn btn-outline-pride-gold" href="{{ f.link }}">More Information</a></p>
    </div>
</div>
{% endif %}
{% endfor %}