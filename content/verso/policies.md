---
title: Policies
section: VERSO
permalink: /verso/policies.html
layout: page
---

U of I LIbrary Policies regarding VERSO. Learn more by clicking the topics!

<div class="accordion mb-3" id="accordion">
    {% for q in site.data.verso_policies %}
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ forloop.index }}">
            {{ q.policy }}
        </button>
      </h2>
      <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.policy_text | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>