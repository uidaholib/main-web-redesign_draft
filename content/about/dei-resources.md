---
title: Diversity, Equity, and Inclusion Resources
layout: page
section: About
permalink: /about/dei-resources.html
lazyload: true
carousel: true
table-id: "#dei-database"
---

{%- assign exhibits = site.data.dei_exhibits | where: "current", "true" -%}

Whether you're looking for archival resources, books, or databases, the Library offers a variety of diverse resources. 
Browse featured items below, or contact [Reference Services](mailto:libref@uidaho.edu) for help finding a specific resource.

--------

{:.pt-3 #spec}
## Special Collections

Archival collections created by or related to underrepresented communities in Idaho and the Pacific Northwest.
Interested in seeing more? 
Browse all [DEI-related special collections]({{ "diversity, equity, and inclusion (dei)" | escape | prepend: "/special-collections/browse.html#" | relative_url }}).

{% include feature/carousel.html slides="dei" %}

--------

{:.pt-4 #databases}
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