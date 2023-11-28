---
title: Course Reserves
section: Services
permalink: /services/reserve/
layout: page
---
<p class="text-center">
    <a href="https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists" class="btn btn-outline-pride-gold m-2" ><span class="fas fa-book"></span> Course Reserves Listings (Leganto)</a>
    <a href="https://uidaho.co1.qualtrics.com/jfe/form/SV_d3UL6u0pxEGpZs2" class="btn btn-outline-pride-gold my-2" target="_blank" rel="noopener"><span class="fas fa-link"></span> Reserve Request Form</a>
    <a href="mailto:libreserve@uidaho.edu" class="btn btn-outline-clearwater m-2"><span class="fas fa-envelope"></span> Email Reserves</a>
</p>

**Instructors** may place textbooks and other resources on reserve for use by students in their course.
**Students** may request textbooks or other resources that are used for coursework be placed on reserve.

All Course Reserves resources must comply with provisions in the U.S. Copyright Act and FERPA. If the nature, scope, or extent of copying is judged to exceed the fair use principles of the Copyright Act, the library will work with the professor to find alternative arrangements.

### Course-Marking Updates

The Library prioritizes purchasing unlimited access, DRM-free (Digital Rights Management-free) licenses to maximize access to materials and support zero-cost markings for courses. Decisions are based on cost and license access number (1-person, 3-person, unlimited). All classes regardless of format are eligible for eBooks being purchased.

eBook purchases are based on cost:  
- The first $200 of a license cost are covered by the one-time fund for reserves  
- Additional cost after that $200 will be approved by the subject liaison of that subject and covered by their subject fund  
And on eligibility:  
- Unlimited licenses are purchased if they cost less than $100 more than a single-user license   
- If it costs more, the liaison for the subject area will be consulted  
- If only single-access licenses are available, only one will be initially purchased  
- After five turn-away notifications, we will purchase another license  
- If there are an additional five turn-away notifications, a third license will be purchased  
- A maximum of three licenses will be purchased 

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