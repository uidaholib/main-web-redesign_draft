---
title: "About the MILL"
section: MILL
permalink: /mill/about.html
layout: page
---

The University of Idaho Library Making, Innovation, and Learning Laboratory (The MILL) creates an environment for all University of Idaho students, faculty, and staff to gather, explore, learn, and create new knowledge using state-of-the-art technology. 
The MILL does this by providing equipment, space, and expertise to support a wide range of disciplinary and interdisciplinary needs; by promoting information and digital literacy; and by facilitating the free and open exchange of ideas and knowledge between disciplines. 
In developing and supporting these skills, the MILL ensures that the University of Idaho community is prepared to address the unique needs and challenges of a 21st century economy and society.

## People

{% assign people = site.data.mill_people %}
<div class="row justify-content-center mb-2">{% for p in people %}
<div class="col-9 col-md-4">
    <div class="card mb-3">
        <div class="card-body text-center">
            <img class="img-fluid rounded mb-2" src="{{ p.img | prepend: '/mill/' | prepend: site.lib-media }}" alt="headshot of {{ p.name }}">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.title }}<br><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>
        </div>
    </div>
</div>
{% endfor %}</div>

Want to work in the MILL? 
Please get in touch with <a href="mailto:khenrich@uidaho.edu">Kristin Henrich</a> about future opportunities.

## Ready to Create?

We’re here to help you learn innovative skills while you’re here at U of I and beyond, using technology to create, tinker, and play, on your own or with others. 
Located on the first floor of the library, the MILL features 3D printing, large-format scanning, an audio and video production and editing suite including lighting and green screen, and a variety of other technology for you to explore, including Arduino, Raspberry Pi, Makey Makey, Ozobot, and View-Master. 
Not sure what any of those words mean? That’s okay–we’re here to help. 
Take one of our [workshops]({{ '/services/workshops/' | relative_url }}), make an appointment for a one-on-one introduction, check out some of our tutorials, or just drop by to get an overview of what you can do in the space.
