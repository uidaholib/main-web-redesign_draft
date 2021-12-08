---
title: "Library Seed Grant"
section: Fellowships
permalink: /fellowships/libseed.html
layout: page
---

{% assign f = site.data.fellowships | where_exp: 'item', 'item.title contains "Seed"' | first %}


**Deadline:** {{f.deadline}}

**Who is Eligible:** {{f.eligible}}

**Fellowship Amount:** {% if f.amount.size > 5 %} {{f.amount}}{% else %} ${{f.amount}}{% endif %}




