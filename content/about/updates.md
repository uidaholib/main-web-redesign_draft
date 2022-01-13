---
title: Library Updates & News
layout: page
section: About
permalink: /about/updates.html
chat-widget: true
---

{% include feature/alert.html text="<span class='h5'>The University of Idaho Library building is currently open to all patrons. <br><a href='https://www.uidaho.edu/vandal-health-clinic/coronavirus' class='alert-link'>Masks are required for everyone</a> when indoors on campus.</span>" color="info" align="center" %}

----------
{% assign updates = site.updates | reverse %}
{% for u in updates %}
<div class="card mb-3">
    <div class="card-body">
        <h3 id="{{ u.title | slugify }}" class="card-title">{{ u.title }}</h3>
        <div class="card-text">
        {{ u.content }}
        </div>
    </div>
</div>
{% endfor %}
