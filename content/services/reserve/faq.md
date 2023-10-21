---
title: Reserves - Policies and Frequently Asked Questions
section: Services
permalink: /services/reserve/faq.html
layout: page
---
{% assign faq = site.data.services_reserves_faq | where_exp: "c", "c.category != 'Leganto FAQ'" %}
{% assign cats = faq | map: "category" | uniq %}

<div class="text-center py-3">
{% for c in cats %}<a href="#faq-{{ c | slugify }}" class="btn btn-secondary btn-sm my-2" >{{ c }}</a>
{% endfor %}
</div>

<hr>

{% for c in cats %}
<h2 id="faq-{{ c| slugify }}">{{ c }}</h2>

{% assign section = faq | where: "category", c %}
{% assign id = forloop.index %}
{% for q in section %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-toggle="collapse" href="#collapse{{ id }}{{ forloop.index }}">{{ q.question }} <span class="fas fa-chevron-down smalltxt"></span></a>
        </h6>
    </div>
    <div id="collapse{{ id }}{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer | markdownify }}</div>
    </div>
</div> 
{% endfor %}
{% endfor %}
