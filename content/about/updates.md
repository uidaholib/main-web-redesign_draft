---
title: Library Updates & News
layout: page
section: About
permalink: /about/updates.html
chat-widget: true
---

----------
{% assign updates = site.updates | where_exp: "u","u.display != false" | reverse %}
{% for u in updates %}
<div class="card mb-3">
    <div class="card-body">
        <h3 id="{{ u.title | slugify }}" class="card-title">{{ u.title }}</h3>
        <div class="card-text">
        <p><small>Updated: {{ u.date | date_to_string: "ordinal", "US" }}</small></p>
        {{ u.content }}
        </div>
    </div>
</div>
{% endfor %}
