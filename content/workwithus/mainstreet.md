---
title: Main Street Video Project Fellowship
section: Work with Us
permalink: /opportunities/fellowships/mainstreetvideo.html
layout: page
---
{% assign fellowship = site.data.fellowships | where_exp: 'item', 'item.title == page.title' | first %}

## {{page.title}}

{% if f.status == 'open' %}{% include feature/button.html text="Apply Now!" link=f.application-link color="success btn-lg float-right" %}{%endif %}

**Deadline:** {{fellowship.deadline}}

**Who is Eligible:** {{fellowship.eligible_full}}

**Fellowship Amount:** {% if fellowship.amount.size > 5 %} {{fellowship.amount}}{% else %} ${{fellowship.amount}}{% endif %}

**Background:** This past year, the University of Idaho Library received a donation consisting of approximately 14,000 DVDs and VHS tapes from the Main Street Video Co-Op (formerly known as Howard Hughes Video), a local independent video rental store. In order to augment this collection, librarians directed an oral history project that employed two interviewers, one former employee and one frequent customer, to collect oral history video interviews from over 35 former employees of the store. The interviews have been collected and processed. We are currently using them as the basis for a digital scholarship project exploring the history and significance of the video rental store to the Moscow/University Community that will be published on the library's website for public access.  

**Call for Application:** The material collected by this project is rife for scholarly interpretation and digression. We invite students at U of I to apply for a $2500 fellowship that will fund the research and production of an original piece of digital scholarship using the oral history interview collection. This work will be published as part of the online project and featured on the library's main website. Digital scholarship specialists at the library will support the fellows to enhance their work with interactive and multi-modal features. 

{% if f.status == 'open' %}**How to Apply:** 

{% include feature/button.html text="Apply Now!" link=f.application-link color="success btn-lg" %}{%endif %}
