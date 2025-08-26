---
title: "Data Hub: Geospatial and Data Sciences Support"
section: Services
permalink: /datahub/
layout: page
lazyload: true
carousel: true
chat-widget: datahub
---

{% include feature/carousel.html slides=site.data.datahub_carousel %}

<div class="row">
<div class="col-lg-6">
<div class="alert alert-info mt-3 mb-3" role="alert">
<h2 class="alert-heading h5"><span class="fas fa-clock"></span> Data Hub Semester Hours</h2>
<p>Librarian assistance is available:</p>
<ul>
    <li>Monday - Friday, 12pm - 3pm</li>
</ul>
<p>Visit in the Map Room (Library 107), chat online (icon in lower right), join our <a class="alert-link" href="https://uidaho.zoom.us/j/87655871511?from=addon">Zoom room</a>, email <a class="alert-link" href="mailto:lib-datahub@uidaho.edu">lib-datahub@uidaho.edu</a>, or call (208) 885-7724.</p>
<!--<h2 class="alert-heading h5"><span class="fas fa-clock"></span> Summer Hours</h2>
<p markdown="1">By appointment: Please contact [Jeremy Kenyon](/about/people/jkenyon.html) (<jkenyon@uidaho.edu>)</p>-->
</div>
</div>
<div class="col-lg-6">
<div class="alert alert-info mt-3 mb-3" role="alert">
<h2 class="alert-heading h5"><span class="fas fa-clock"></span> CSAC Semester Hours</h2>
<p class="mb-3">Assistance with CS courses is available:</p>
<ul>
    <li>Hours coming soon!</li>
</ul>
</div>
</div>
</div>

The U of I Library Data Hub is a dedicated service location providing co-curricular and research support in the areas of geographic information systems, data sciences, data analysis and visualization, and research data management.
Located in the Library's [Map Room (First Floor, Rm 107)](/about/maps.html#lg=1&slide=0), and accessible via our [Zoom room](https://uidaho.zoom.us/j/87655871511?from=addon), the Data Hub features specialized equipment, staff, and collaborative space available to all U of I patrons.

Students, faculty, and staff are invited to get help with topics such as GIS, Git, R, Python, Excel, and data-related tools and information resources.
Collaborative work areas with large displays are available for consultations and general use, as well as powerful desktop computer workstations.

Building on the Library's long history of curating and disseminating data collections under programs such as [INSIDE Idaho](https://insideidaho.org/), the Data Hub's mission is to strengthen students' knowledge, awareness, and techniques for accessing data and using it in transformative ways. 
With collaborative work areas focused on data analysis and visualization, and a service desk staffed by librarians, the Data Hub is a central place to connect with geospatial and data sciences support.

## People

{% for person in site.data.datahub_people %}
{% assign p = site.data.about_people | where: 'id',person.id | first %}
<div class="border rounded mt-3">
    <div class="row no-gutters">
        <div class="col-md-3 p-3">
            {% capture image_src %}{{ site.lib-media }}{% if p.image %}/directory/{{ p.image }}{% else %}/directory/tower_icon_gold_sq.png{% endif %}{% endcapture %}
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E" data-src="{{ image_src }}" class="lazyload img-fluid rounded" alt="portrait of {{ p.last_name }}">
        </div>
        <div class="col-md-9 p-3">
            <h3><a href="{{ '/about/people/' | relative_url }}{{ p.id }}.html" title="View the profile for {{ p.last_name }}">{{ p.first_name }} {{ p.last_name }}</a></h3>
            <p class="h5">{{ person.datahub_title }} <br><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>
            <p>{{ person.datahub_description }}</p>
        </div>
    </div>
</div>
{% endfor %}
