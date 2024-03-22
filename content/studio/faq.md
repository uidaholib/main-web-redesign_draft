---
title: Studio FAQ
section: The Studio
permalink: /studio/faq.html
layout: page
---

Frequently asked questions at the Studio. 
Learn more by clicking the questions!

{% for q in site.data.studio_faq %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-bs-toggle="collapse" href="#collapse{{ forloop.index }}">{{ q.question }} <span class="fas fa-chevron-down"></span></a>
        </h6>
    </div>
    <div id="collapse{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer | markdownify }}</div>
    </div>
</div> 
{% endfor %}
