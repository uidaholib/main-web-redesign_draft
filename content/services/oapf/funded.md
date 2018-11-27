---
title: Funded Articles
section: services
permalink: /services/oapf/funded.html
layout: page
---

{% assign years = site.data.UI_OAPF_FundedArticles | map: "pubyear" | uniq %}



{% for y in years %}

<h2>{{ y }}</h2>

{% assign pubs = site.data.UI_OAPF_FundedArticles %}

{% for p in pubs %}
{% assign x = p.pubyear %}
{% if x == y %}
<div class="card my-3">
<div class="card-body">
    <h5><b>College/Department:</b> {{ p.collegedepartment }}</h5>
    <p>{{ p.authors }} {{p.pubyear}}. "{{ p.title }}." <i>{{ p.journal }}</i>, {{ p.volumeissuepagerange }}. <a href="{{ p.doi }}" target="blank">{{ p.doi }}</a>.</p>
    <p>Date Awarded: {{ p.dateawarded }}</p>
</div>
</div>
{% endif %}
{% endfor %}

{% endfor %}

