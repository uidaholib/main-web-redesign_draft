---
title: Accessions List
layout: page
section: Special Collections
permalink: /special-collections/accessions.html
table-id: "#accessions"
table-paginate: true
---
{% assign accessions = site.data.spec_accession_list %}

Full accession list with extent. This list includes the title of every collection that has been added to our archives. The accession number is used by our staff to find a particular collection on our shelves. The extent can be used to help determine how much material is held in the collection.

<table id="accessions" class="table table-striped">
    <thead>
        <tr>
            <th>Accession Number</th>
            <th>Title</th>
            <th>Extent</th>
        </tr>
    </thead>
    <tbody>
    {% for a in accessions %}
        <tr>
            <td>{{ a.accession_number }}</td>
            <td>{{ a.title }}</td>
            <td>{{ a.extent }}</td>
        </tr>
    {% endfor %}
    </tbody>
    <thead>
        <tr>
            <th>Accession Number</th>
            <th>Title</th>
            <th>Extent</th>
        </tr>
    </thead>
</table>
