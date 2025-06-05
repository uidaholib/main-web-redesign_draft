---
title: Lynn and Dennis Baird Fellowship
section: Fellowships
permalink: /fellowships/baird.html
layout: page-narrow
---

{% assign fellowship = site.data.opportunities_fellowships | where_exp: 'item', 'item.title == page.title' | first %}

The Lynn and Dennis Baird Fellowship funds one graduate student a year to work with library faculty and staff to expand the reach of the Wilderness/Environmental archival holdings at the University of Idaho.


**Deadline:** {{fellowship.deadline}}

**Who is Eligible:** {{fellowship.eligible_full}}

**Fellowship Amount:** {% if fellowship.amount.size > 5 %} {{fellowship.amount}}{% else %} ${{fellowship.amount}}{% endif %}

**Number Available:** 1

