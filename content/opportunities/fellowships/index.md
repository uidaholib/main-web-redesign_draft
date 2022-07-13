---
title: Fellowship Opportunities
section: Work with Us
permalink: /opportunities/fellowships/
layout: page
---

The library offers fellowships for undergrads, graduate students, and faculty members at the University of Idaho. Fellowships vary in amount, timeframe, and objectives, but each looks to use library collections and/or librarian expertise to help fellows develop projects and research. See below for a list of fellowships offered by the library. 

Open fellowships are bordered in green and have an Open Now button at the top. If you have any questions about library fellowships generally, please contact Devin Becker at [dbecker@uidaho.edu](mailto:dbecker@uidaho.edu)

{% assign fellowships = site.data.opportunities_fellowships | sort: 'status' | reverse %}
{% for f in fellowships %}
{% unless f.title contains 'seed' %}
<div class="row my-4 p-4 border {% if f.status == 'open' %}border-success{% endif %}" id="{{ f.title | slugify }}">
    <h4 class="col-sm-10">{% if f.link %}<a href="{{ f.link }}">{{ f.title }}</a>{% else %}{{ f.title }}{% endif %}</h4>
    {% if f.status == 'open' %}{% include feature/button.html text="Open Now" link=f.link color="outline-success float-right col-sm-2" %}{% endif %}
    <div class="col-md-12 my-2">
        <p><b>Deadline:</b> {{f.deadline}} | <b>Fellowship Amount:</b>{% if f.amount.size > 5 %} {{f.amount}}{% else %} ${{f.amount}}{% endif %}</p>
        <p><b>Who is Eligible:</b> {% assign eligible = f.eligible | split: ";" %}{% for e in eligible %}<span class="btn btn-outline-info btn-sm mx-2">{{ e | capitalize }}</span>{% endfor %}</p>
        <p class="my-3">{{ f.description }}</p>
        <a class="btn btn-outline-pride-gold float-right" href="{{ f.link }}">More Information & Application Instructions</a>
    </div>
</div>{% endunless %}
{% endfor %}