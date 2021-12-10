---
title: "Library Seed Grant"
section: Work with Us
permalink: /opportunities/fellowships/libseed.html
layout: page
---


{% assign f = site.data.fellowships | where_exp: 'item', 'item.title contains "Seed"' | first %}

{% if f.status == 'open' %}{% include feature/button.html text="Apply Now!" link=f.application-link color="success btn-lg float-right" %}{%endif %}


**Deadline:** {{f.deadline}}

**Who is Eligible:** {{f.eligible_full}}

**Fellowship Amount:** {% if f.amount.size > 5 %} {{f.amount}}{% else %} ${{f.amount}}{% endif %}

**Description:** {{f.description}}

{% if f.status == 'open' %}**How to Apply:** 

{% include feature/button.html text="Apply Now!" link=f.application-link color="success btn-lg" %}{%endif %}
