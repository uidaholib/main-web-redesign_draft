---
title: Accessions List
layout: page
section: Special Collections
permalink: /special-collections/accessions.html
table-id: "#accessions"
table-paginate: true
---
{% assign accessions = site.data.spec_accession_list %}

This accession list includes the title of collections that have been added to our archives, but are not yet processed. The accession number is used by our staff to find a particular collection on our shelves. The extent can be used to help determine how much material is held in the collection. This list is made available for the convenience of researchers, but access to the materials may be limited. Unprocessed collections largely do not have any inventories or finding aids and are frequently in the same order and condition as received. Accessions are processed based on a variety of criteria, and processed collections can include multiple accessions. You can also [browse](/special-collections/browse.html) our processed collections! Please contact us at <libspec@uidaho.edu> or (208) 885-0845 for questions about these accessions. 

<table id="accessions" class="table table-striped">
    <thead>
        <tr>
            <th>Accession</th>
            <th>Title</th>
            <th>Extent</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
    {% for a in accessions %}
        <tr>
            <td>{{ a.accession_number }}</td>
            <td>{{ a.title }}</td>
            <td>{{ a.extent }}</td>
            <td>{{ a.description }}</td>
            <td>{{ a.date }}</td>
        </tr>
    {% endfor %}
    </tbody>
    <thead>
        <tr>
            <th>Accession</th>
            <th>Title</th>
            <th>Extent</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
    </thead>
</table>
