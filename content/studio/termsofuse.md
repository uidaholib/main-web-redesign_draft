---
title: "Multimedia lending: Terms of Use and Price List"
section: The Studio
permalink: /studio/termsofuse.html
layout: page
---

The Library also offers multimedia equipment that can be used outside of the building for those interested in field recording. 
These items are available on a first come, first serve basis at the Circulation Desk on the 1st floor of the Library:

- Canon Camera Kit: Contains HD Camera, Tripod, Camera Remote, Attachable microphone, AC adapters, USB transfer cord, and 8 GB SD card. Great for recording with a green screen indoors or outdoors. Camera memory and SD card will be reformatted when camera is returned.
- Equipment must be returned directly to a library employee at the UI Library Circulation Desk (do not use the drop box or return to any other library location).
- It is your responsibility to ensure that the staff on duty has properly checked and verified all equipment during the check out and return/check in process.
- The same person that checks out equipment must return it; equipment returned by a friend, family member, or other party will not be accepted for return.
- Fines will accrue by the hour, will be capped at $100, and will enter lost status after 21 days, at which time full replacement value will be assessed.
- You will be charged a replacement fee if the equipment and/or peripherals (included, but not limited to: case, SD card, USB cable, battery, etc.) are lost, stolen, or damaged during the lending period. The replacement cost will be determined by the cost of the items lost, stolen, or damaged.
- The library will not accept for return or check-in any equipment that is missing parts, tags, peripherals, etc.
- You understand that any media, data, and/or documents that you create or save to the equipment during the lending period will be permanently erased when the equipment is returned to the library.
- Faculty and Staff will be assessed fines and replacement fees for late, missing, or lost multimedia equipment.

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
<tbody>
    {% for item in site.data.studio_fines %}
    <tr>
    <td><b>{{ item.item }}</b></td>
    <td>{{ item.loan }}</td>
    <td>{{ item.fine }}</td>
    <td>{{ item.replacement }}</td>
    </tr>
    {% endfor %}
</tbody>
</table>
