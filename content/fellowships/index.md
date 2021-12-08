---
title: "Fellowships"
section: Fellowships
permalink: /fellowships/
layout: page
---

The library offers fellowships for undergrads, graduate students, and faculty members at the University of Idaho. Fellowships vary in amount, timeframe, and objectives, but each looks to use library collections and/or librarian expertise to help fellows develop projects and research. See below for a list of fellowships offered by the library. 

{% assign fellowships = site.data.fellowships | sort: 'title' %}
{% for f in fellowships %}
{% include feature/fellowship-card.html %}
{% endfor %}