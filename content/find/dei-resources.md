---
title: Diversity, Equity, and Inclusion Resources
layout: page
section: Find
permalink: /find/dei-resources.html
lazyload: true
carousel: true
table-id: "#dei-database"
---

Whether you're looking for archival resources, books, or databases, the Library offers a variety of diverse resources. 
Browse featured items below, or contact [Reference Services](mailto:libref@uidaho.edu) for help finding a specific resource.

<div class="text-center mb-2">
<a href="#spec" class="btn btn-secondary my-2 mx-1">Special Collections</a>
<!--<a href="#books" class="btn btn-secondary my-2 mx-1">Books</a>-->
<a href="#databases" class="btn btn-secondary my-2 mx-1">Databases</a>
</div>

{:.pt-3 #spec}
## Special Collections

Archival collections created by or related to underrepresented communities in Idaho and the Pacific Northwest.

{% include feature/carousel.html slides=site.data.dei_collections %}

{% comment %}
{:.pt-5 #books}
## Books:

The books listed below include and recognize all diverse experiences, including (but not limited to) LGBTQ2IA+, Native American/Indigenous, people of color, gender diversity, people with disabilities, and ethnic, cultural, and religious minorities. 
This includes authors, artists, characters in fiction, and related subjects.

{% assign items = site.data.dei_new_resources %}

<div class="row">
    {% for i in items %}
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><strong>{{ i.title }}</strong></div>
                <div class="card-body">
                    <p><strong>Author:</strong> {{ i.author }}</p>
                    <p>Short description??</p>
                    <div class="text-center"><a type="button" class="btn btn-secondary btn-sm" href="#">Link to resource</a></div>
                </div>
            </div>
        </div>
    {% endfor %}
</div>
{% endcomment %}

{:.pt-5 #databases}
## Databases:

The University of Idaho Library subscribes to the following databases on diverse groups, cultures, and viewpoints. 
We chose to feature these databases as we believe that they challenge our existing beliefs, inspire us with new perspectives, and educate us to be better world citizens given the diverse world we live in. 

{% assign resources = site.data.dei_databases | sort: 'name' %}

<table id="dei-database" class="table table-hover">
    <thead>
       <tr>
          <th>Resource</th>
          <th>Description</th>
       </tr>
    </thead>
    <tbody>
    {% for r in resources %}
    {%- assign descriptions = r.description | split: "." -%}
    <tr>
       <td scope="row">
            <a href="{{ r.link }}" 
            class="btn btn-outline-pride-gold" role="button" target="_blank" rel="noopener" title="{{ r.name }} Overview">{{ r.name }}</a><div class="d-none">{{ r.name }}</div>
        </td>
       <td class="description">{{ descriptions[0] }}. <a data-toggle="collapse" href="#{{ r.name | slugify }}" aria-expanded="false" aria-controls="{{ r.name | slugify }}">[more...]</a><p id="{{ r.name | slugify }}" class="collapse pt-3">{{ descriptions[1] }}.</p></td>
    </tr>
    {% endfor %}
    </tbody>
</table>