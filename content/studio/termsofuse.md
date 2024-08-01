---
title: Studio Terms of Use
section: The Studio
permalink: /studio/termsofuse.html
layout: page
---
 
Any patron who wishes to use the Studio must agree to the Terms of Use: 

- No food and drinks are allowed in the Studio.
- DO NOT disconnect, rewire, or turn off any equipment (including the computer). 
- DO NOT take any equipment out of the room. 
- Bring your own storage device or use a cloud storage service such as <a href="https://onedrive.uidaho.edu/" target="_blank" rel="noopener">OneDrive</a> for file saving. Any files saved on the computer will be erased periodically. 
- You will be charged a replacement fee if any piece of equipment is lost, stolen, or damaged during your reservation time. 
- When you are finished using the space, log off the computer and return the key to the circulation desk by handing it to a staff member or a student employee. DO NOT leave the key on the counter or in the book return slot.
- Abide by our policies, including [Library Code of Conduct]({{ '/about/policies.html#conduct' | relative_url }}), <a href="https://www.uidaho.edu/governance/policy/policies/fsh/2/2300" target="_blank" rel="noopener">University of Idaho Student Code of Conduct</a>, and <a href="https://www.uidaho.edu/governance/policy/policies/apm/30/12" target="_blank" rel="noopener">University of Idaho’s Acceptable Use of Technology Resources Policy</a>.  
- Please cancel your reservation if you can no longer make it to your appointment. Use the cancellation link in your confirmation email or call the library at 208-885-6559.

Failure to follow the Terms of Use may result in a written warning or, if repeated pattern in behavior, revoked Studio access privileges at staff's discretion.

## Fines and Fees
            
<table class="table table-bordered">
<thead class="thead-light">
    <tr>
    <th scope="col">ITEM</th>
    <th scope="col">LOAN PERIOD</th>
    <th scope="col">FINE RATE</th>
    <th scope="col">REPLACEMENT COST</th>
    </tr>
</thead>
<tbody>{% assign items = site.data.find_equipment | where_exp: 'i','i.loan' %}
    {% for item in items %}
    <tr>
    <td><strong>{{ item.item }}</strong></td>
    <td>{{ item.loan }}</td>
    <td>{{ item.fine }}</td>
    <td>{{ item.replacement_cost }}</td>
    </tr>
    {% endfor %}
</tbody>
</table>


