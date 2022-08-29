---
title: "Data Hub: Geospatial and Data Sciences Support"
section: Data Hub
permalink: /datahub/
layout: page
lazyload: true
chat-widget: datahub
---

{% include feature/alert.html text="<span class='h5'>New space opening Fall 2022!</span>" color="success" align="center" %}

{% include feature/carousel.html slides=site.data.datahub_carousel %}

<div class="alert alert-info text-center mt-3 mb-3" role="alert">
<h2 class="alert-heading h5"><span class="fas fa-clock"></span> Semester Hours</h2>
<p>Librarian assistance is available Monday - Friday, 11am - 3pm</p>
</div>

The **U of I Library Data Hub** is a new dedicated space and service point providing co-curricular and research support in the areas of geographic information systems, data sciences, data analysis and visualization, and research data management.
Located in the Library's [Map Room (First Floor, Rm 107)](/about/maps.html#lg=1&slide=0), the Data Hub features specialized equipment, staff, and collaborative space available to all U of I patrons.

Building on the Library's long history of curating and disseminating data collections under programs such as [INSIDE Idaho](https://insideidaho.org/), the Data Hub's mission is to strengthen students' knowledge, awareness, and techniques for accessing data and using it in transformative ways. 
With collaborative work areas focused on data analysis and visualization, a service desk staffed by librarians, and other campus units encouraged to collocate (including [RCDS](https://www.iids.uidaho.edu/rcds.php) and [Statistical Consulting](https://www.uidaho.edu/sci/mathstat/centers/scc)), the Data Hub is a central place to connect with geospatial and data sciences support.

## People

{% for person in site.data.datahub_people %}
{% assign p = site.data.about_people | where: 'id',person.id | first %}
<div class="border rounded mt-3">
    <div class="row no-gutters">
        <div class="col-md-3 p-3">
            {% capture image_src %}{{ site.lib-media }}{% if p.image %}/directory/{{ p.image }}{% elsif p.headshot %}/headshots/{{ p.headshot }}{% else %}/directory/tower_icon_gold_sq.png{% endif %}{% endcapture %}
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
