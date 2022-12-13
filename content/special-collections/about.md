---
title: About Special Collections and Archives
layout: page
section: Special Collections
permalink: /special-collections/about.html
---

<div class="row pt-3">
<div class="col-md-6" markdown="1">
Special Collections and Archives is a department within the University of Idaho Library that specializes in the acquisition, preservation, and accessibility of archival research materials that document the history and culture of Idaho and the University of Idaho. We have over 25,000 linear feet of rare, unique, and valuable materials. Our collections include, but are not limited to:

- Personal papers of individuals and families
- Business records (lumber, railroad, mining, etc.)
- Idaho state publications
- Papers of government officials, educators, authors, artists, etc.
- Organizational and association records (religious, fraternal, civic, environmental, non-profit, etc.)
- Book collections on local, historical, and literary topics
</div>
<div class="col-md-6 align-self-center">
{% include feature/figure.html img="https://www.lib.uidaho.edu/media/spec/space/boxes.jpg" alt="archival boxes" %}
</div>
</div>

Learn more about the strengths and focus of our holdings on the [Description of Collections](/special-collections/description.html) page.
You can view our physical materials by visiting our [Reading Room](/special-collections/plan.html). 
Many items have been digitized and can be discovered in the [U of I Library Digital Collections](https://www.lib.uidaho.edu/digital/) and the [Idaho Harvester](https://harvester.lib.uidaho.edu/),
and finding aids can be searched on [Archives West](https://archiveswest.orbiscascade.org/search.php?r=idu).

<div class="py-3 text-center">
    <a href="{{ '/special-collections/browse.html' | relative_url }}" class="btn btn-secondary my-2 mx-1"><span class="fas fa-search"></span> Browse Collections</a>
    <a href="{{ '/special-collections/plan.html' | relative_url }}" class="btn btn-secondary my-2 mx-1"><span class="fas fa-edit"></span> Plan Your Visit</a>
    <a href="{{ '/special-collections/policies.html' | relative_url }}" class="btn btn-secondary my-2 mx-1"><span class="fas fa-question"></span> Policies</a>
    <a href="{{ '/special-collections/donations.html' | relative_url }}" class="btn btn-secondary my-2 mx-1"><span class="fas fa-gift"></span> Donate</a>
    <a href="{{ '/special-collections/faq.html' | relative_url }}" class="btn btn-secondary my-2 mx-1"><span class="fas fa-question"></span> FAQ</a>
    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=Y2u8fpJXGUqyCwS4JgSIU3fn1ZT2uFVAhbeq68ZolZtUQ0FVNEdKVEIyVFhaUFFWTlgxN1pUVjE3Qy4u" class="btn btn-secondary my-2 mx-1"><span class="fas fa-comments"></span> Give Us Feedback</a>
</div>

<div class="embed-responsive embed-responsive-16by9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/23VSOWiUOZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Contact

We're available 9am - 5pm, Monday - Friday to answer inquiries via email, phone, or in-person.

<div class="card-deck my-4">
    <div class="card">
        <div class="card-body text-center">
            Phone: <a href="tel:+1-208-885-0845">(208) 885-0845</a><br> 
            Email: <a href="mailto:libspec@uidaho.edu">libspec@uidaho.edu</a><br>
            Visit our <a href="{{ '/about/maps.html#first-floor' | relative_url }}">Reading Room</a> during <a href="{{ 'special-collections/plan.html#hours' | relative_url }}">walk-in hours.</a>
        </div>
    </div>
    <div class="card">
        <div class="card-body text-center">
        Special Collections and Archives<br>
        <a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=university+of+idaho+library+83844&amp;ie=UTF8&amp;ll=46.735272,-117.014952&amp;spn=0.024177,0.055275&amp;z=14&amp;iwloc=A">University of Idaho Library</a><br>
        875 Perimeter Drive MS 2350 <br>
        Moscow, ID 83844-2350
        </div>
    </div>
</div>

{% assign people = site.data.about_people | where: 'department','Special Collections and Archives'| sort: 'rank' %}

<table class="table table-striped">
    <thead>
       <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Contact Info</th>
       </tr>
    </thead>
    <tbody>
    {% for a in people %}
    <tr>
       <td class="name"><a href="{{ '/about/people/' | relative_url }}{{ p.id }}.html">{{ a.last_name }}, {{ a.first_name }}</a></td>
       <td class="title center">{{ a.title }}</td>
       <td class="contact"><a href="mailto:{{ p.email }}">{{ a.email }}</a><br>{{ a.phone }}</td>
    </tr>
    {% endfor %}
    </tbody>
</table>
