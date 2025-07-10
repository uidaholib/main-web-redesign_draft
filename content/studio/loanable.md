---
title: Equipment Loans
section: Find
permalink: /studio/loanable.html
layout: page
lazyload: true
---

The library offers various equipment for students, faculty, and staff to use in or outside of the library building. 
To check out any piece of equipment, please bring your Vandal card to the Circulation Desk on the library's first floor and sign the U of I Library Loanable Equipment Lending User Agreement form.
You may also want to explore equipment available at [The Studio A/V Lab space]({{ '/studio/' | relative_url }})!

{% assign tools = site.data.find_equipment | where_exp: "t","t.loan" %}
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
            {% if t.image %}<div class="text-center"><img class="img-fluid mb-3 lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E" data-src="{{ site.lib-media }}/studio/{{ t.image }}" alt="product image of {{ t.item }}"></div>{% endif %}
            <p class="card-text">{{ t.description }}</p>
            <!--
            {% if t.booking_link %}<a href="{{ l }}" class="btn btn-primary btn-sm m-2" >Reserve</a>{% endif %}-->
        </div>
    </div>
</div>
{% endfor %}
{% endfor %}
</div>
