---
title: Book a Room
section: Services
layout: page
permalink: /services/rooms.html 
---
{% assign rooms = site.data.services_rooms %}

The Library has a variety of reservable spaces from group study rooms to 3D printers.
Check the descriptions below to find the space you need. 
Reservations are made on our <a href="https://libcal.uidaho.edu/">LibCal</a> system.
For complete information, please check our <a href="https://libcal.uidaho.edu/">Policies page</a>.

<div class="row">
    {% for r in rooms %}
    <div class="col-12 mb-2">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="mb-0">{{ r.room }}</h4>
            </div>
            <div class="row no-gutters">
                <div class="col-md-3">
                    <div class="card-body">
                        <img src="{{ site.lib-media }}/rooms/{{ r.img }}" class="card-img" alt="{{ r.type }}">
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        {{ r.description | markdownify }}
                        {% if r.link %}<a href="{{ r.link }}" class="btn btn-primary">Book {{ r.type }}</a>{% endif %}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
