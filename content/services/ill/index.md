---
title: Interlibrary Loan / Rapido Resource Sharing 
section: Services
permalink: /services/ill/
layout: page
---

The University of Idaho Library uses Rapido for resource sharing services. This allows U of I patrons to request materials that are not owned by the U of I Library. Resource sharing is free of charge to any currently-enrolled student, staff, or faculty member (current and emeritus) with a valid U of I account. 

Turnaround time for physical loan requests is typically 5-14 days, while electronic articles or book chapters are usually received within 1-2 days. Patrons are notified by email once their item arrives (physical items) or is available for download (electronic items). Some items are more readily available than others, so we can't guarantee the receipt or delivery time of any requested item.

If you have questions, please contact the ILL Office at <libill@uidaho.edu> or (208) 885-6843, or check our immediate [Library Help options]({{ '/help/' | relative_url }}).

## Requesting Items 

Once you are signed in to the [library’s catalog](https://alliance-uidaho.primo.exlibrisgroup.com/discovery/search?vid=01ALLIANCE_UID:UID), items not owned by the U of I Library can be requested via the form available in relevant search results or the "Blank Request Form" available in the menu. 
You can monitor the status of requests in your [library account](https://alliance-uidaho.primo.exlibrisgroup.com/discovery/account?vid=01ALLIANCE_UID:UID). 

## Lending Periods 

Items loaned by partner libraries in the Orbis Cascade Alliance (formerly Summit requests) are typically available for 84 days, with one renewal allowed. If items are not available in other Alliance libraries, we will try to find additional partner libraries to fill the request. Loan periods for other libraries can vary. 

## Returning Materials 

Materials should be returned to the same location where you checked them out. The item needs to be returned on or before the due date, with the bookstrap or label still attached. 

Off-campus patrons can return Summit materials to the U of I Library through the mail. However you may want to use a form of delivery that provides tracking, since you are responsible for the item until the library actually receives it. 

Please use the following address for returning materials: 

```
University of Idaho Library
Interlibrary Loan
875 Perimeter Drive MS 2357
Moscow, ID 83844-2350 
```

---------

## Additional Information

{% assign section = site.data.services_ill_faq %}
{% assign id = "Ill" %}
<div class="accordion mb-3" id="accordion{{ id }}">
    {% for q in section %}
    <div class="accordion-item">
      <h3 class="accordion-header" id="heading{{ id }}_{{ forloop.index }}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ id }}_{{ forloop.index }}" aria-expanded="{% if include.open == true %}true{% else %}false{% endif %}" aria-controls="collapse{{ id }}_{{ forloop.index }}">
            {{ q.question }}
        </button>
      </h3>
      <div id="collapse{{ id }}_{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ id }}_{{ forloop.index }}" data-bs-parent="#accordion{{ id }}">
        <div class="accordion-body">
            {{ q.answer | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
</div>

