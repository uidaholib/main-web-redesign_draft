---
title: Library Resources to Pass the Time
layout: page
section: Covid-19
permalink: /covid19/resources.html
---

The below list of library resources offers options for accessing movies, music, educational workshops, and other materials to help those needing to pass some time or looking for an educational enjoyment. 

<div class="ml-4" markdown="1">
{% for e in site.data.covid19_libraryresources %}
##### [{{e.title}}]({{e.link}})

{{e.description}}
{% endfor %}
</div>