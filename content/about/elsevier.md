---
title: Elsevier Journals Contract Change
section: About
permalink: /about/elsevier.html
layout: page
---

{:.mt-4 .h5}
The Library has recently renegotiated its contract with journal publisher Elsevier. Below you'll find answers to some questions researchers and students at U of I might have regarding this change.

***
<div id="faqAccordion">
{% assign faqs = site.data.elsevier_contract %}
{% for q in faqs %}
  <div class="card my-2">
    <div class="card-header">
      <h5 class="mb-0"><a class="collapsed card-link" data-toggle="collapse" href="#faq{{ forloop.index }}" onclick="$('span.fa-chevron-down').removeClass('fa-chevron-up',700);$(this).find('span').toggleClass('fa-chevron-up',700);">{{ q.question }} <span class="fas fa-chevron-down smalltxt"></span></a></h5>
    </div> <!--end card-header-->

    <div id="faq{{ forloop.index }}" class="collapse" data-parent="#faqAccordion">
      <div class="card-body">
        <p>{{ q.answer }}</p> 
      </div> <!--end card-body-->
    </div> <!--end collapse-->
  </div> <!--end card-->
 {% endfor %}
</div> <!--end accordion-->

***

## Questions? Comments?

We take our responsibility to provide our campus with access to scholarly materials very seriously and we realize that these journal cuts will cause difficulties for many people. We welcome your comments, thoughts, and questions. Please feel free to contact Ben Hunter, Dean of University Libraries, at [bhunter@uidaho.edu](mailto:bhunter@uidaho.edu), or the [liaison librarian](https://www.lib.uidaho.edu/about/liaisons.html) assigned to your discipline.

