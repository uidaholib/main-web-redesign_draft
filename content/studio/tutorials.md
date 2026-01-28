---
title: Tutorials & How-To Guides
section: The Studio
permalink: /studio/tutorials.html
layout: page
lazyload: true
---

{% assign collections = site.data.studio_tutorials | where_exp: 'c', 'c.hidden != "true"' %}

<p class="py-3">Whether you're recording your first podcast or setting up for video production, these step-by-step guides will help you get the most out of your Studio session.</p>

<div class="row justify-content-center">
    {% for c in collections %}
    <div class="col-md-4">
        <div class="card my-2">
            <div class="card-header text-center">
                <h4>{% if c.link %}<a href="{{ c.link | relative_url }}">{{ c.title }}</a>{% else %}{{ c.title }}{% endif %}</h4>
            </div>
            <div class="card-body text-center">
                {% if c.link %}<a href="{{ c.link | relative_url }}">{% endif %}
                    <img class="card-img{% unless forloop.index < 4 %} lazyload{% endunless %}" {% unless forloop.index < 4 %}data-{% endunless %}src="{{ site.lib-media }}/studio/{{ c.img }}" alt="{{ c.collection }}">
                {% if c.link %}</a>{% endif %}
                <hr>
                <p class="card-text">{{ c.description }}</p>
                {% if c.link %}<a href="{{ c.link | relative_url }}" class="btn btn-payette-blue" >View Tutorial</a>{% endif %}
            </div>
        </div>
    </div>
    {% endfor %}
</div>