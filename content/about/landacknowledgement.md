---
title: Land Acknowledgment Information
section: About
permalink: /about/landacknowledgment.html
layout: page-narrow
---

The University of Idaho's land acknowledgement statement was created by the [U of I Office of Tribal Relations](https://www.uidaho.edu/president/direct-reports/tribal-relations):

{:.lead .mx-5 .pb-3}
U of I Moscow is located on the homelands of the Nimiipuu (Nez Perce), Palus (Palouse) and Schitsu’umsh (Coeur d’Alene) tribes. 
We extend gratitude to the indigenous people that call this place home, since time immemorial. 
U of I recognizes that it is our academic responsibility to build relationships with the indigenous people to ensure integrity of tribal voices.

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/dei/cities-121-lg.jpg" alt="Image of Moscow, Idaho" caption="View of Moscow, Idaho from Picnic Point above the Tamarack Ski Lodge east of Moscow Mountain" %}

---

## Tribal Relations Resources

{:.pt-3}
### U of I Special Collections

[Special Collections and Archives](https://www.lib.uidaho.edu/special-collections/) has several collections relating to tribal relations in Idaho: 

{%- assign collections = site.data.spec_collections_main | where: 'dei_category','Native American/Indigenous' -%}
{% for c in collections %}
- [{{ c.title }}]({{ c.finding_aid_link }}){:target="_blank" rel="noopener"}
{% endfor %}

{:.pt-3}
### Native Land Digital

[Native Land Digital](https://native-land.ca/) is a Canadian not-for-profit organization that is Indigenous-led, with an Indigenous Executive Director and Board of Directors who oversee and direct the organization. 
They strive to create and foster conversations about the history of colonialism, Indigenous ways of knowing, and settler-Indigenous relations, through educational resources such as the map and [Territory Acknowledgement Guide](https://native-land.ca/resources/territory-acknowledgement/).

{:.text-center}
<a href="https://native-land.ca/" class="btn btn-secondary my-2 mx-1">View Native Land Digital</a>

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/dei/nativeland.jpg" alt="Native Land Digital website screenshot" caption="Native Land Digital map" %}
