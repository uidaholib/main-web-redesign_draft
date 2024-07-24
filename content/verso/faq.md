---
title: "VERSO FAQ"
section: VERSO
permalink: /verso/faq.html
layout: page
---

Frequently asked questions on VERSO. Learn more by clicking the questions!

{% for q in site.data.verso_faq %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-toggle="collapse" href="#collapse{{ forloop.index }}">{{ q.question }} <span class="fas fa-chevron-down"></span></a>
        </h6>
    </div>
    <div id="collapse{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer | markdownify }}</div>
    </div>
</div> 
{% endfor %}
