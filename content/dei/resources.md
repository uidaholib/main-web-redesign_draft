---
title: DEI Resources
layout: page
section: Diversity, Equity, and Inclusion (DEI)
permalink: /dei/resources.html
lazyload: true
carousel: true
table-id: "#dei-database"
---

Whether you're looking for archival resources, books, or databases, the Library offers a variety of diverse resources. Browse featured items below, or contact [Reference Services](mailto:libref@uidaho.edu) for help finding a specific resource.

## Special Collections

Archival collections created by or related to underrepresented communities in Idaho and the Pacific Northwest.

{% include feature/carousel.html slides=site.data.dei_collections %}

{:.pt-5}
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

{:.pt-5}
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