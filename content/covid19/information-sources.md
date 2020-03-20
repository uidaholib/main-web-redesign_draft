---
title: COVID-19 Information Sources
layout: page
section: COVID-19
permalink: /covid19/information-sources.html
---

A vast and ever-changing amount of information exists about the Novel Coronavirus/COVID-19 Disease. The resources below are intended to help you discover, research, and navigate many of the most reliable sources. 

(This page is adapted from [a resource](https://libguides.seattleu.edu/covid19) put together by Seattle University)

<div class="mb-4">
<div id="accordion">
<div class="card">
<div class="card-header" id="headingOne">
<h5 class="mb-0">
<a class="card-link show" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Making Sense Of Health News And (Mis)Information
</a>
</h5>
</div>
<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
<div class="card-body" markdown="1">
Information about COVID-19 moves rapidly in our online environment. Here are tips for navigating the information you encounter about COVID-19.

{% for e in site.data.covid19_infosources %}
{% if e.type == "info" %}
{:.ml-4}
#####  [{{e.title}}]({{e.link}})

{:.ml-4}
{{e.description}}
{% endif %}
{% endfor %}
</div>
</div>
</div>
<div class="card">
<div class="card-header" id="headingTwo">
<h5 class="mb-0">
<a class="card-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Peer-Reviewed Research Free To Access
</a>
</h5>
</div>
<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
<div class="card-body" markdown="1">
Many scientific publishers and news organizations, recognizing that free access to trustworthy information on this topic is of vital interest to people around the world, have taken down their paywalls on some or all of the recent scholarship on Coronaviruses and this outbreak. 

{% for e in site.data.covid19_infosources %}
{% if e.type == "research" %}
{:.ml-4}
##### [{{e.title}}]({{e.link}})

{:.ml-4}
{{e.description}}
{% endif %}
{% endfor %}
</div>
</div>
</div>
<div class="card">
<div class="card-header" id="headingThree">
<h5 class="mb-0">
<a class="card-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Updates and Governmental Information 
</a>
</h5>
</div>
<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
<div class="card-body" markdown="1">
Information from the state-, nation-, and world-wide health organizations about the pandemic. 

{% for e in site.data.covid19_infosources %}
{% if e.type == "gov" %}
{:.ml-4}
##### [{{e.title}}]({{e.link}})

{:.ml-4}
{{e.description}}
{% endif %}
{% endfor %}
</div>
</div>
</div>
</div>
</div>
<style>.card-link{cursor:pointer}</style>