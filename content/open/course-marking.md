---
title: "Course Marking"
section: Think Open
permalink: /open/course-marking.html
layout: page-narrow
---

**Course Marking is Coming to the University of Idaho!**

In 2021, the Idaho State Board of Education passed the Instructional Material Access and Affordability Policy. This policy requires universities around the state to make meaningful progress towards the State’s goals for transparency around course material costs and lays out specific tactics and requirements for doing so.

In keeping with the mandates of this memo, U of I is required to develop and implement course marking strategies so that students can easily identify reliably zero and low-cost courses.  A special cross-University committee was convened by the University of Idaho Library and the Vice Provost for Academic Initiatives in early 2023, with the overall charge of building a culture of Open on campus, and a specific focus on implementing the state’s required course marking as soon as feasible. The Open Campus committee contains representatives from the Library, CETL, Student Advising, The Registrar, and the VandalStore. 

Instructors may begin reporting their course materials costs during scheduling in spring of 2024, for application to courses listed and taught in starting Fall 2024. In Fall 2024, students will be able to browse the class schedule using Zero and Very Low Cost categories as facets, and, if desired, limit their registration selections to courses in those categories.

-------------

## Course Marking FAQ

<div class="accordion mb-3" id="accordion">
    {% for q in site.data.open_course_marking_faq %}
    <div class="accordion-item">
      <h3 class="accordion-header" id="heading{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h3>
      <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>

