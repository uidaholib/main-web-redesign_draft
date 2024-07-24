---
title: Special Collections - Frequently Asked Questions
section: Special Collections
permalink: /special-collections/faq.html
layout: page
---
{% assign faq = site.data.spec_faq %}
{% assign cats = faq | map: "category" | uniq %}

<div class="text-center py-3">
{% for c in cats %}<a href="#faq-{{ c | slugify }}" class="btn btn-secondary btn-sm my-2" >{{ c }}</a>
{% endfor %}
</div>

<hr>

{% for c in cats %}
<h2 id="faq-{{ c | slugify }}">{{ c }}</h2>

{% assign section = faq | where: "category", c %}
{% assign id = forloop.index %}
<div class="accordion mb-3" id="accordion{{ id }}">
    {% for q in section %}
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
{% endfor %}
