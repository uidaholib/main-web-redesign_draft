---
title: Open Access Publishing Fund FAQs
section: Services
permalink: /services/oapf/faq.html
layout: page
---

{% assign cats = site.data.oapf_faq | map: "category" | uniq %}
{% for c in cats %}

### {{ c }}

{% assign section = site.data.oapf_faq | where: "category", c %}
{% assign id = forloop.index %}
{% for q in section %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-toggle="collapse" href="#collapse{{ id }}{{ forloop.index }}">{{ q.question }} <span class="fas fa-chevron-down smalltxt"></span></a>
        </h6>
    </div>
    <div id="collapse{{ id }}{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer }}</div>
    </div>
</div> 
{% endfor %}
{% endfor %}

<div class="text-center align-content-center mt-4">
    <a href="eligibility.html" class="btn btn-secondary btn-sm my-2"><span class="fas fa-list"></span> Eligibility</a>
    <a href="apply.html" class="btn btn-secondary btn-sm my-2"><span class="fas fa-check"></span> Apply</a>
    <a href="mailto:marcosv@uidaho.edu" class="btn btn-secondary btn-sm my-2"><span class="fas fa-user"></span> Contact</a> 
</div>
<br>
