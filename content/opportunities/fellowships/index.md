---
title: Fellowship Opportunities
section: Work with Us
permalink: /opportunities/fellowships/
layout: page
---

The library offers fellowships for undergrads, graduate students, and faculty members at the University of Idaho. Fellowships vary in amount, timeframe, and objectives, but each looks to use library collections and/or librarian expertise to help fellows develop projects and research. See below for a list of fellowships offered by the library. 

Open fellowships are bordered in green and have an Open Now button at the top. If you have any questions about library fellowships generally, please contact Devin Becker at [dbecker@uidaho.edu](mailto:dbecker@uidaho.edu)

{% assign fellowships = site.data.fellowships | sort: 'status' | reverse %}
{% for f in fellowships %}
{% include feature/fellowship-card.html %}
{% endfor %}