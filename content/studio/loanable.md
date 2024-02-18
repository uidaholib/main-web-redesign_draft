---
title: Equipment Loans
section: Find
permalink: /studio/loanable.html
layout: page
lazyload: true
---

The library offers various equipment for students, faculty, and staff to use in or outside of the library building. 

You may also want to explore equipment available at [The Studio A/V Lab space]({{ '/studio/' | relative_url }})!

{% assign tools = site.data.find_loanequipment | where_exp: "t","t.loan" %}
{% assign categories = tools | map: 'category' | uniq | sort %}
<div class="row">
<div class="col-12 mb-3 text-center">
{% for c in categories %}<a href="#equ-{{ c | slugify }}" class="btn btn-sm btn-outline-pride-gold m-2">{{ c }}</a>{% endfor %}
</div>
{% for c in categories %}
<div class="col-12">
<h2 id="equ-{{ c | slugify }}" class="my-4">{{ c }}</h2>
</div>
{% assign set = tools | where: 'category', c %}
{% for t in set %}
<div class="col-md-6 mb-2">
    <div class="card">
        <div class="card-header">
            {{ t.item }}
        </div>
        <div class="card-body">
            <p class="card-text">{{ t.contains }}</p>
            {% if t.model %}<p class="card-text">{{ t.model }}</p>{% endif %}
            <p class="card-text">Fine Rate: {{ t.fine }}, Max Fine: {{ t.max_fine }}</p>
            <p class="card-text">Replacement Cost: {{ t.replace }}</p>
        </div>
    </div>
</div>
{% endfor %}
{% endfor %}
</div>
