---
title: Open Access Publishing Fund FAQs
section: services
permalink: /services/oapf/faq.html
layout: page
---


{% assign cats = site.data.UI-OAPF_FAQ | map: "category" | uniq %}
{% for c in cats %}

### {{ c }}

{% assign section = site.data.UI-OAPF_FAQ | where: "category", c %}
{% assign id = forloop.index %}
{% for q in section %}
<div class="card mt-3 mb-2">
    <div class="card-header">
        <h6 class="card-title">
            <a data-toggle="collapse" href="#collapse{{ id }}{{ forloop.index }}">{{ q.question }}<span class="fas fa-chevron-down smalltxt"></span></a>
        </h6>
    </div>
    <div id="collapse{{ id }}{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer }}</div>
    </div>
</div> 
{% endfor %}
{% endfor %}

<div class="text-center align-content-center mt-4">
    <a href="/services/oapf/eligibility.html" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-list"></span> Eligibility</a>
    <a href="/services/oapf/apply.html" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-check"></span> Apply</a>
    <a href="mailto:jylisadoney@uidaho.edu" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-user"></span> Contact</a> 
</div>
<br>
