---
title: Leganto
section: Services
permalink: /services/reserve/leganto.html
layout: page
---

Leganto is a library plug-in that allows students to access library course reserves directly from your BBLearn course. 
It is an additional feature of our existing library systems.
Leganto is already embedded in your BBLearn course; you just need to activate it. 

Follow the steps below to activate Leganto and make your reading lists available from within your BBLearn course, or check our [Leganto FAQ](#leganto-faq) for more information. 

<div class="border rounded p-3 mb-3" markdown="1">

### 1. Let the library know your Course ID number

- From within your BBLearn course, scroll to the Course Management->Content Collection dropdown. Your course ID# will be found in this section.

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto1.png" alt="leganto screenshot" %}

- Copy and paste the Course ID (in the example above, isi_libs415-515-1_4882) and email it to <a href="mailto:libreserve@uidaho.edu">libreserve@uidaho.edu</a>.

### 2. Add the "Library Resource List" link to your BBLearn content

- From within your BBLearn course, add new content by clicking the "+" sign in the upper left corner and then select "Content Area"

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto2.png" alt="leganto screenshot" %}

- Once you've clicked "Content Area", you will see a pop-up where you can rename your Library Resource List. Be sure to check the box marked "Available to Users" so your students can access the list.

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto3.png" alt="leganto screenshot" %}

- Next, navigate to the "Tools" dropdown, select "More Tools", and choose "Library Resource List". [will this be named differently if they renamed in the above step, or does it keep the category name Library Resource List?] 

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto4.png" alt="leganto screenshot" %}

- Congratulations! You should now see the Library Resource List link. 

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto5.png" alt="leganto screenshot" %}

Once set up, clicking the Library Resource List will allow you and your students to view library course reserves directly from your BBLearn course. 
Here's what the display should look like: 

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/reserves/leganto6.png" alt="leganto screenshot" %}

</div>

Please don't hesitate to email <a href="mailto:libreserve@uidaho.edu">libreserve@uidaho.edu</a> if you run into issues activating Leganto or have other questions!

-----------

{% assign faq = site.data.services_reserves_faq %}
{% assign cats = "Leganto FAQ" %}
{% for c in cats %}
## Leganto FAQ

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
