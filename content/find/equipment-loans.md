---
title: Equipment Loans
section: Find
permalink: /find/equipment-loans.html
layout: page
---

The library offers various equipment for students, faculty, and staff to use in or outside of the library building. To check out any piece of equipment, please bring your Vandal card to the Circulation Desk on the library’s first floor and sign the U of I Library Loanable Equipment Lending User Agreement form. Equipment is subject to [late fines and replacement fees]({{ '/services/borrow/#fines' | relative_url }}). You may also want to explore equipment available at [The Studio A/V Lab space]({{ '/studio/' | relative_url }})!

{% assign items = site.data.find_equipment-libcal %}
{% assign categories = items | map: 'category' | uniq | sort %}
<div class="mb-3 text-center">{% for c in categories %}<a href="#{{ c | slugify }}" class="btn btn-sm btn-outline-pride-gold m-2">{{ c }}</a> {% endfor %}</div>

{% for c in categories %}
{% assign citems = items | where: 'category', c %}
## {{ c }}

{% for i in citems %}
<div class="card card-body mb-3">
<div class="row">
  <div class="col-md-4 p-3">
    <img src="{{ i.image }}" alt="{{ i.name }}" class="img-fluid rounded">
  </div>
  <div class="col-md-8 p-2">
    <h3>{{ i.name }}</h3>
    <p>{{ i.description }}{% if i.count %} <br>{{ i.count }} available.{% endif %}</p>
  </div>
</div>
</div>
{% endfor %}

{% endfor %}