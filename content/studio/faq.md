---
title: Studio FAQ
section: The Studio
permalink: /studio/faq.html
layout: page
---

Frequently asked questions at the Studio. 
Learn more by clicking the questions!

{% assign id = "1" %}
<div class="accordion mb-3" id="accordion{{ id }}">
    {% for q in site.data.studio_faq %}
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading{{ id }}_{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ id }}_{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ id }}_{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h4>
      <div id="collapse{{ id }}_{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ id }}_{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>
