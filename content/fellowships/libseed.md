---
title: Library Seed Grant
section: Fellowships
permalink: /fellowships/libseed.html
layout: page-narrow
---

{% assign f = site.data.opportunities_fellowships | where_exp: 'item', 'item.title contains "Seed"' | first %}

**Deadline:** {{f.deadline}}

**Who is Eligible:** {{f.eligible_full}}

**Fellowship Amount:** {% if f.amount.size > 5 %} {{f.amount}}{% else %} ${{f.amount}}{% endif %}

## Description

{{ f.description }}

## Call for Applications

Please contact Dean Ben Hunter at [bhunter@uidaho.edu](mailto:bhunter@uidaho.edu) to inquire about a possible grant. 
