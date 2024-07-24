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

<div class="text-center align-content-center mt-4">
    <a href="eligibility.html" class="btn btn-secondary btn-sm my-2"><span class="fas fa-list"></span> Eligibility</a>
    <a href="apply.html" class="btn btn-secondary btn-sm my-2"><span class="fas fa-check"></span> Apply</a>
    <a href="mailto:marcosv@uidaho.edu" class="btn btn-secondary btn-sm my-2"><span class="fas fa-user"></span> Contact</a> 
</div>
<br>
