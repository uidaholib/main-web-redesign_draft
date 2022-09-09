---
title: "Meet the Team"
section: MILL
permalink: /mill/about.html
layout: page
---

{% assign people = site.data.mill_people %}
<div class="row justify-content-center mb-2">{% for p in people %}
<div class="col-9 col-md-4">
    <div class="card mb-3">
        <div class="card-body text-center">
            <img class="img-fluid rounded mb-2" src="{{ p.img | prepend: '/mill/' | prepend: site.lib-media }}" alt="headshot of {{ p.name }}">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.title }}<br><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>
        </div>
    </div>
</div>
{% endfor %}</div>

Want to work in the MILL? 
Please get in touch with <a href="mailto:jkfleener@uidaho.edu">Jessica Fleener</a> about future opportunities.
