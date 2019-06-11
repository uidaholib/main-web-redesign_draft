---
title: "MILL Tools & Tech"
section: MILL
permalink: /mill/tools.html
layout: page
---

The MILL is a place where everyone on campus can have access to emerging technologies, making resources, and an innovative culture of learning. We have a number of different tools available for use by students, faculty, and staff.

{% assign tools = site.data.mill_tools %}
<div class="row">
{% for t in tools %}
<div class="col-md-6 mb-2">
    <div class="card">
        <div class="card-header">
            {{ t.category }}
        </div>
        <div class="card-body">
            <img class="img-fluid mb-3" src="{{ t.image }}">
            <h5 class="card-title">{{ t.name }}</h5>
            <p class="card-text">{{ t.description }}</p>
            <a href="{{ t.link }}" class="btn btn-primary">{{ t.link-text }}</a>
        </div>
    </div>
</div>
{% endfor %}
</div>