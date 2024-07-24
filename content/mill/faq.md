---
title: "MILL FAQ"
section: MILL
permalink: /mill/faq.html
layout: page
---

Frequently asked questions at the MILL. Learn more by clicking the questions!

<div class="accordion mb-3" id="accordion">
    {% for q in site.data.mill_faq %}
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h2>
      <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>
