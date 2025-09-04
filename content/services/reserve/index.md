---
title: Course Reserves
section: Services
permalink: /services/reserve/
layout: page
---
<p class="text-center">
    <a href="https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists" class="btn btn-outline-pride-gold m-2" ><span class="fas fa-book"></span> Course Reserves Listings (Leganto)</a>
    <a href="https://uidaho.co1.qualtrics.com/jfe/form/SV_d3UL6u0pxEGpZs2" class="btn btn-outline-pride-gold my-2"><span class="fas fa-link"></span> Reserve Request Form</a>
    <a href="mailto:libreserve@uidaho.edu" class="btn btn-outline-clearwater m-2"><span class="fas fa-envelope"></span> Email Reserves</a>
</p>

**Instructors** may place textbooks and other resources on reserve for use by students in their course.
**Students** may request textbooks or other resources that are used for coursework be placed on reserve.

All Course Reserves resources must comply with provisions in the U.S. Copyright Act and FERPA. If the nature, scope, or extent of copying is judged to exceed the fair use principles of the Copyright Act, the library will work with the professor to find alternative arrangements.

To make a reserves request, stop by the library and fill out a reserves request form, fill out the [online request form](https://uidaho.co1.qualtrics.com/jfe/form/SV_d3UL6u0pxEGpZs2), or [email Reserves directly](mailto:libreserve@uidaho.edu)

{% capture instr %}
### Loan periods
- 3 hours, 1 day, or 3 days for print reserve. Default loan period is 1 day.
- Controlled Digital Lending items loan digitally for 3 hours.

### Fines
- $2 per hour for overdue items, maximum $20, for print reserve.
- Electronic resources have no fines or fees.

### Access to Reserves
- Visit the [Course Reserve Listings](https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists) and look for your course by instructor, term, or subject.
- Click on the course name to view a list of all items on reserve.
- To access electronic reserve items, students will have to sign in using their NetID.
{% endcapture %}
{% include feature/card.html header="Policies" text=instr %}

------

## Frequently Asked Questions
{:.mb-4}

{% assign faq = site.data.services_reserves_faq | where_exp: "c", "c.category != 'Leganto FAQ'" %}
{% assign cats = faq | map: "category" | uniq %}

{% for c in cats %}
<h3 id="faq-{{ c| slugify }}">{{ c }}</h3>
{% assign section = faq | where: "category", c %}
{% assign id = forloop.index %}
<div class="accordion mb-3" id="accordion{{ id }}">
    {% for q in section %}
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading{{ id }}_{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ id }}_{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ id }}_{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h4>
      <div id="collapse{{ id }}_{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ id }}_{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>
{% endfor %}
