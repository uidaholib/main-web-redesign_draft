---
title: Support & Troubleshooting
section: The Studio
permalink: /studio/troubleshooting.html
layout: page
---
 
<p class="py-3">We want your time in the Studio to be productive and stress-free. Below are quick fixes for common issues you might encounter.</p>

{% assign id = "1" %}
<div class="accordion mb-3" id="accordion{{ id }}">
    {% for q in site.data.studio_troubleshooting %}
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading{{ id }}_{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ id }}_{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ id }}_{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h2>
      <div id="collapse{{ id }}_{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ id }}_{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>

Still stuck? Don’t worry, we’re here to help! Reach out by sending an email to <hanwendong@uidaho.edu>. If staff are unavailable or you're working after business hours, please document the issue by including details and photos if possible so we can follow up.
