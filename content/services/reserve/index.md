---
title: Course Reserves
section: Services
permalink: /services/reserve/
layout: page
---

<p class="text-center">
    <a href="https://alliance-uidaho.alma.exlibrisgroup.com/leganto/readinglist/searchlists" class="btn btn-outline-pride-gold m-2" ><span class="fas fa-book"></span> Course Reserves Listings</a>
    <a href="{{ '/services/reserve/faq.html' | relative_url }}" class="btn btn-outline-pride-gold m-2" ><span class="far fa-question-circle"></span> Reserves FAQ</a>
    <a href="mailto:libreserve@uidaho.edu" class="btn btn-outline-clearwater m-2"><span class="fas fa-envelope"></span> Email Reserves</a>
</p>

Course Reserves are electronic and library resources selected by instructors to support student learning. 
Reserve items generally have shorter loan periods to ensure all users have access to the material.
These items can be compiled into a single reading list accessible directly in Canvas LMS for you and your students via our [integrated reserves platform Leganto]({{ '/services/reserve/leganto.html' | relative_url }}).

Contact Reserves by email <a href="mailto:libreserve@uidaho.edu">libreserve@uidaho.edu</a>, phone (208) 885-6495, or ask at the Circulation desk.

{% capture instr %}
<p class="text-center">
    <a href="https://uidaho.co1.qualtrics.com/SE/?SID=SV_eeBCJQcWfBsTwI5" class="btn btn-payette-blue my-2" target="_blank" rel="noopener">
        <span class="fas fa-link"></span> Instructor Reserve Request Form</a>
</p>
<ul>
    <li>
        <a href="howto.html">How to put materials on in-library reserve, Controlled Digital Lending, and Electric reserve</a>
    </li>
    <li>
        <a href="policies.html">Reserve policies</a>
    </li>
    <li>
        <a href="fairuse.html">Copyright and fair use</a>
    </li>
    <li>
        <a href="faq.html">FAQ</a>
    </li>
    <li>
        <a href="https://www.lib.uidaho.edu/pdf/studentMaterialsPermission.pdf" target="_blank" rel="noopener">Permission to use student papers</a> [PDF]</li>
</ul>{% endcapture %}
{% include feature/card.html header="Instructor Information" text=instr %}

{% capture student %}
<p>As a part of our efforts to help reduce student costs, the library accepts requests from students to place required books on reserve. To request materials, please fill out this form:</p>
<p class="text-center">
    <a href="https://uidaho.co1.qualtrics.com/jfe/form/SV_2fAeteEt4JjRHaB" class="btn btn-payette-blue my-2" target="_blank" rel="noopener"><span class="fas fa-link"></span> Student Reserves Request Form</a>
</p>
<p>Requested books must be designated as required in the course syllabus. Requested titles may not include supplemental readings or books recommended for course research projects or further reading.
<br>For more information about this program, contact <a href="mailto:marcosv@uidaho.edu">Marco Seiferle-Valencia</a>.</p>{% endcapture %}
{% include feature/card.html header="Student Driven Reserves" text=student %}

{% include feature/card.html header="Related Links" text='
- <a href="https://www.uidaho.edu/schedule/">Course Times/Location</a>
- <a href="https://www.vandalstore.com/SelectTermDept.aspx">Textbooks</a>
- <a href="https://www.uidaho.edu/registrar/classes/finals">Final Exams</a>
- <a href="https://www.uidaho.edu/current-students/academic-support/asp/tcs">Tutoring and Academic Success Programs</a>
- <a href="http://www.uidaho.edu/class/english/writingcenter">Writing Center</a>
- <a href="/help/research.html">Get Help With Research</a>
' %}
