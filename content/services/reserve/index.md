---
title: Course Reserves
section: Services
permalink: /services/reserve/
layout: page
---
<p class="text-center">
    <a href="https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists" class="btn btn-outline-pride-gold m-2" ><span class="fas fa-book"></span> Course Reserves Listings</a>
    <a href="https://uidaho.co1.qualtrics.com/jfe/form/SV_d3UL6u0pxEGpZs2" class="btn btn-outline-pride-gold my-2" target="_blank" rel="noopener"><span class="fas fa-link"></span>Reserve Request Form</a>
    <a href="mailto:libreserve@uidaho.edu" class="btn btn-outline-clearwater m-2"><span class="fas fa-envelope"></span> Email Reserves</a>
</p>

Course Reserves are resources selected by instructors to support student learning. 
Reserve items have shorter loan periods to ensure all users have access to the resources. 
These items can be compiled into a single reading list accessible directly in Canvas via [Leganto]({{ '/services/reserve/leganto.html' | relative_url }}).

To make a reserves request, stop by the library and fill out a reserves request form, fill out the [online request form](https://uidaho.co1.qualtrics.com/jfe/form/SV_d3UL6u0pxEGpZs2), or [email Reserves directly](mailto:libreserve@uidaho.edu)

{% capture instr %}
### Course reserves

- Instructors may place textbooks, videos, readings, and more on reserve for use by students in their course. The resulting reading list will be reused for following semesters for the same class and instructor unless otherwise requested.
- Students may request books or other resources that are used for coursework be placed on reserve.
- These resources must comply with provisions in the U.S. Copyright Act and FERPA. If the nature, scope, or extent of copying is judged to exceed the fair use principles of the Copyright Act, the library will work with the professor to find alternative arrangements.

### Loan periods

- 3 hours, 1 day, 3 day for print reserve. If instructor does not specify loan period, the default is 1 day.

### Fines

- $2 per hour for overdue items, maximum $20, for print reserve. Electronic resources have no fines or fees.

### Access

- Visit the [Course Reserve Listings](https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists) and look for your course by instructor, term, or subject.
- Click on the course name to view a list of all items on reserve.
- To access electronic reserve items, students will have to sign in using their NetID.
{% endcapture %}
{% include feature/card.html header="Reserve Policies" text=instr %}


{% assign faq = site.data.services_reserves_faq | where_exp: "c", "c.category != 'Leganto FAQ'" %}
{% assign cats = faq | map: "category" | uniq %}

<hr>

{% for c in cats %}
<h2 id="faq-{{ c| slugify }}">{{ c }}</h2>

{% assign section = faq | where: "category", c %}
{% assign id = forloop.index %}
{% for q in section %}
<div class="card my-3">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-toggle="collapse" href="#collapse{{ id }}{{ forloop.index }}">{{ q.question }} <span class="fas fa-chevron-down smalltxt"></span></a>
        </h6>
    </div>
    <div id="collapse{{ id }}{{ forloop.index }}" class="collapse">
        <div class="card-body">{{ q.answer | markdownify }}</div>
    </div>
</div> 
{% endfor %}
{% endfor %}