---
title: Policies
section: VERSO
permalink: /verso/policies.html
layout: page
---

UI LIbrary Policies regarding VERSO. Learn more by clicking the topics!

{% for q in site.data.verso_policies %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-bs-toggle="collapse" href="#collapse{{ forloop.index }}">{{ q.policy }} <span class="fas fa-chevron-down"></span></a>
        </h6>
    </div>
    <div id="collapse{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.policy_text | markdownify }}</div>
    </div>
</div> 
{% endfor %}