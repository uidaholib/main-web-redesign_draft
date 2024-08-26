---
title: Malcolm M. Renfrew Interdisciplinary Colloquium
section: Services
permalink: /renfrew/
layout: page
---

The University of Idaho Library is hosting the Malcolm M. Renfrew Interdisciplinary Colloquium for the academic year. Presentations will be held on the first floor of the library, in the living room right to the right as you come in the entrance. 

Jump to an event: {% include feature/renfrew-list.html %}

{:.mb-3}
## Fall 2024 Schedule


{% for p in site.data.renfrew %}
<div class="card mb-3" id="{{p.date | slugify}}">
<h3 class="card-header" id="policies">{{p.date}} (Week {{p.week}})</h3>
<div class="card-body">
<div class="card-text">
<h3 id="access-to-reserves"> {{p.title}}</h3>
{% assign peeps = p.presenter | split: ";" %}
{% assign links = p.presenterlink | split: ";" %}
{% for peep in peeps %}
<a href="{{ links[forloop.index0] }}" target="_blank">{{ peep }} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></a>{% endfor %}

<p class="mt-3">{{p.description | markdownify | default: "Description Coming Soon!"}}</p>

</div>
</div>
</div>

{% endfor %}


