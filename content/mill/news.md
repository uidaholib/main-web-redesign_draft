---
title: "MILL Newsletters"
section: MILL
permalink: /mill/news.html
layout: page
---

*From the MILL* is the MILL’s newsletter, posted several times each semester. 
In each newsletter you can find information and images of projects and events from the month, along with upcoming events and workshops!

Click below to download issues from the archive:

{% assign news = site.data.mill_newsletters | reverse %}
{% for n in news %}- <a href="{{ site.lib-media }}/mill/{{ n.filename }}">{{ n.title }}</a>, {{ n.month }} {{ n.year }}.
{% endfor %}
