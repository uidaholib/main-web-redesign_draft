---
title: DEI Resources
layout: page
section: Diversity, Equity, and Inclusion (DEI)
permalink: /dei/resources.html
lazyload: true
carousel: true
---

Whether you're looking for archival resources, books, or databases, the Library offers a variety of diverse resources. Browse featured items below, or contact the [Reference Department](mailto:libref@uidaho.edu) for help finding a specific resource.

## Special Collections
{% include feature/carousel.html slides=site.data.dei_collections %}

## Books:
- book title 1
- book title 2
- book title 3
- movie title 1
- documentary title 1

## Databases:
{%- assign resources = site.data.dei_databases | sort: 'name' -%}

<div>
<table class="table table-hover">
    <thead>
       <tr>
          <th>Resource</th>
          <th>Description</th>
       </tr>
    </thead>
    <tbody>
    {% for r in resources %}
    <tr>
        <td scope="row">
            <a href="{{ r.link }}" 
            class="btn btn-outline-pride-gold" role="button" target="_blank" rel="noopener" title="{{ r.name }} Overview">{{ r.name }}</a><div class="d-none">{{ r.name }}</div>
        </td>
       <td class="description">{{ r.description }}</td>
    </tr>
    {% endfor %}
    </tbody>
</table>
</div>
