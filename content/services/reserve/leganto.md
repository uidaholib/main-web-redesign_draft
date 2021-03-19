---
title: Leganto
section: Services
permalink: /services/reserve/leganto.html
layout: page
lazyload: true
---

Leganto is a new product from the U of I Library that simplifies and improves course reading lists. 
It integrates with BBLearn to allow instructors the ability to easily add, edit, and customize reading lists, so that students can access all their course materials in one place.  

Feedback from instructors shows that Leganto is easy to use, and has significant benefits for teaching and learning.   

These benefits include: 

- Reduced workload for instructors 
    - Reading lists can be saved and reused across semesters 
    - Ability to create multiple reading lists in draft form allows instructors to work at their own pace 
    - Autonomy in developing, changing, updating, and saving course lists 

- Improved student experience 
    - Centrally located course materials 
    - Affordable, equitable access to library-purchased materials 
    - Interactive platform increases student engagement 

- Seamless library integration and support 
    - Add library subscriptions, open education resources, popular media, and multimedia 
    - Get expert support for help with copyright, accessibility, and other questions 
    - "Cite It" feature allows direct import for readings wherever, whenever 

## Getting Started

Leganto is intuitive and easy to use, with a very low barrier to entry. 
To get started using Leganto, we need to activate your BBLearn course and then you can begin adding, editing, saving, and customizing your reading lists.  

Follow the instructions in the steps below to [activate Leganto](#leganto-activate), learn how to [add and edit reading lists](https://vandalsuidaho.sharepoint.com/:p:/s/LIB/ETdlmBTdc_NKg0HCntxftoAB1PhiTOAVNqYEcL7P7ZtHiA?e=Icw4Pg&CID=2c4147c9-5993-a50b-69b8-d458d8b8324b), or contact [libreserve@uidaho.edu](mailto:libreserve@uidaho.edu) for personalized help.  

<div class="card my-3" id="leganto-activate">
    <div class="card-header">
        <h6 class="card-title mb-0">
            <a data-toggle="collapse" href="#collapseHowToSteps">How to Activate Leganto <span class="fas fa-chevron-down smalltxt"></span></a>
        </h6>
    </div>
    <div id="collapseHowToSteps" class="collapse">
        <div class="card-body" markdown="1">

### 1. Let the library know your Course ID number

- From within your BBLearn course, scroll to the Course Management->Content Collection dropdown. Your course ID# will be found in this section.

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto1.png" alt="leganto screenshot" %}

- Copy and paste the Course ID (in the example above, isi_libs415-515-1_4882) and email it to <a href="mailto:libreserve@uidaho.edu">libreserve@uidaho.edu</a>.

### 2. Add the "Library Resource List" link to your BBLearn content

- From within your BBLearn course, add new content by clicking the "+" sign in the upper left corner and then select "Content Area"

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto2.png" alt="leganto screenshot" %}

- Once you've clicked "Content Area", you will see a pop-up where you can rename your Library Resource List. Be sure to check the box marked "Available to Users" so your students can access the list.

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto3.png" alt="leganto screenshot" %}

- Next, while working in a Content Area other than Announcements, navigate to the "Tools" dropdown, select "More Tools", and choose "Library Resource List".

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto4.png" alt="leganto screenshot" %}

- Congratulations! You should now see the Library Resource List link. 

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto5.png" alt="leganto screenshot" %}

Once set up, clicking the Library Resource List will allow you and your students to view library course reserves directly from your BBLearn course. 
Here's what the display should look like: 

{% include feature/figure-lazyload.html img="https://www.lib.uidaho.edu/media/reserves/leganto6.png" alt="leganto screenshot" %}

*Note:* When instructors enter BBLearn's "Student Preview" mode, reading lists will not display correctly.
To view your list as a student would see it, please visit the [public reserves page](https://alliance-uidaho.alma.exlibrisgroup.com/leganto/public/01ALLIANCE_UID/searchlists) on the library's website.

</div>
</div>
</div> 

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
