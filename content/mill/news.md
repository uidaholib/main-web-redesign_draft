---
title: "MILL Newsletters"
section: MILL
permalink: /mill/news.html
layout: page
---

*From the MILL* is the MILL’s newsletter, posted at the end of each month. In each newsletter you can find information and images of projects and events from the month, along with upcoming events and workshops!
Sign up to our mailing list to get the newsletter sent to your inbox, or click below to download issues from the archive:

{% assign news = site.data.mill_newsletters | reverse %}
{% for n in news %}- <a href="{{ site.liburl }}/media/mill/{{ n.filename }}" target="_blank">{{ n.title }}</a>, {{ n.date }}.
{% endfor %}