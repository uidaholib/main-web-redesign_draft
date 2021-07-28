---
title: Non-Idaho Telephone and Business Directories
layout: page
section: Special Collections
permalink: /special-collections/non-idaho-directories.html
table-id: "#directories"
table-paginate: true
---
{% assign directories = site.data.spec_directories_non_idaho %}

This is a list of the Telephone and Business Directories from neighboring states! 

*Updated 2021-07-28*

<table id="directories" class="table table-striped">
    <thead>
        <tr>
            <th>City</th>
            <th>State</th>
            <th>Phonebook Dates</th>
            <th>City Directory Dates</th>
            <th>Notes</th>
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
