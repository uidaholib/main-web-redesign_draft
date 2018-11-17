---
title: Funded Articles
section: services
permalink: /services/oapf/funded.html
layout: page
---

{% assign years = site.data.UI_OAPF_FundedArticles | map: "pubyear" | uniq %}
{% for y in years %}

### {{ y }}


{% endfor %}