---
title: Open Access Publishing Fund FAQs
section: services
permalink: /services/oapf/faq.html
layout: page
---

<div class="alert alert-primary text-center" role="alert">
    Thank you for your interest in the U of I – Open Access Publishing Fund (OAPF). The OAPF has disbursed its entire allocation for this fiscal year and the application is now closed. You can view funded articles <a href="funded.html">here</a>. <br> Please contact <a href="mailto:jylisadoney@uidaho.edu">Jylisa Doney</a> (OAPF, Fund Manager) if you have any questions.
</div>

{% assign cats = site.data.UI-OAPF_FAQ | map: "category" | uniq %}
{% for c in cats %}

### {{ c }}

{% assign section = site.data.UI-OAPF_FAQ | where: "category", c %}
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
    <a href="eligibility.html" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-list"></span> Eligibility</a>
    <a href="apply.html" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-check"></span> Apply</a>
    <a href="mailto:jylisadoney@uidaho.edu" class="btn btn-secondary btn-sm my-2" role="button"><span class="fas fa-user"></span> Contact</a> 
</div>
<br>
