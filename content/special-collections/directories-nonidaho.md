---
title: Non-Idaho Telephone and Business Directories
layout: page
section: Special Collections
permalink: /special-collections/non-idaho-directories.html
table-id: "#directories"
table-paginate: true
---
{% assign directories = site.data.spec_directories_non_idaho %}

A list of telephone and business directories from neighboring states held in Spec. 

*Updated 2021-07-28*

<table id="directories" class="table table-striped">
    <thead>
        <tr>
            <th scope="column">City</th>
            <th scope="column">State</th>
            <th scope="column">Phonebook Dates</th>
            <th scope="column">City Directory Dates</th>
            <th scope="column">Notes</th>
        </tr>
    </thead>
    <tbody>
    {% for a in directories %}
        <tr>
            <td>{{ a.city }}</td>
            <td>{{ a.state }}</td>
            <td>{{ a.dates_phonebook }}</td>
            <td>{{ a.dates_city }}</td>
            <td>{{ a.notes }}</td>
        </tr>
    {% endfor %}
    </tbody>
    <thead>
        <tr>
            <th>City</th>
            <th>State</th>
            <th>Phonebook Dates</th>
            <th>City Directory Dates</th>
            <th>Notes</th>
        </tr>
    </thead>
</table>
