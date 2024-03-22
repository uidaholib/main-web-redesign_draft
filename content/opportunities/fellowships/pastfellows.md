---
title: Past and Current Fellows
section: Work with Us
permalink: /opportunities/pastfellows.html
layout: page
---

Here are all of the Fellows we have worked with through our Special Collections and Digital Scholarship and Open Strategies departments.

{% assign fellowships = site.data.fellows_combined_data | sort: 'lastname' %}
{% for f in fellowships %}
<div class="row my-4 p-4 border" id="{{ f.project | slugify }}">
    <div class="col-md-10">
        <h4>{{ f.project }}</h4>
        <span class="badge bg-dark text-white" style="margin-bottom: 20px;">{{ f.fellowship }}</span>
        {% if f.year %}
        <p><strong>Year: </strong> <em>{{ f.year }}</em></p>
        {% endif %}
        <p><strong>Recipient: </strong>{{ f.firstname }} {{ f.lastname }}</p>
        {% if f.image_thumb %}
        <div class="col-md-12" style="margin-bottom: 20px;">
            <img src="{{ f.image_thumb }}" alt="{{ f.objectid }}" style="max-width: 30%; height: auto;">
        </div>
        {% endif %}
        {% if f.professional %}
        <p class="text-left"><a class="btn btn-outline-pride-gold" href="{{ f.professional }}">Professional Site</a></p>
        {% endif %}
        {% if f.status %}
        <p><strong>Status: </strong>{{ f.status }}</p>
        {% endif %}
        {% if f.department %}
        <p><strong>Department: </strong>{{ f.department }}</p>
        {% endif %}
        {% if f.description %}
        <p class="my-3" style="word-wrap: break-word; hyphens: auto;"><strong>Description: </strong>{{ f.description }}</p>
        {% endif %}
        {% if f.oedstudentsimpacted %}
        <p><strong>OED Students Impacted: </strong>{{ f.oedstudentsimpacted }}</p>
        {% endif %}
        {% if f.oedmoney %}
        <p><strong>OED Money Saved: </strong>{{ f.oedmoney }}</p>
        {% endif %}
        {% if f.oedimpacttags %}
        <p><strong>OED Impact Tags: </strong>{{ f.oedimpacttags }}</p>
        {% endif %}
        {% if f.site %}
        <p class="text-left"><a class="btn btn-outline-pride-gold" href="{{ f.site }}">Project Site</a></p>
        {% endif %}
    </div>
</div>
{% endfor %}







