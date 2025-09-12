---
title: Data
section: Find
permalink: /find/data.html
layout: page
chat-widget: true
---

Click the accordion below to explore some common sources of data.
For further help, check the resources below and don't hesitate to contact the [Data Hub]({{ '/datahub/' | relative_url }}) or your [library liaison]({{'/help/research.html' | relative_url }}).

{% assign resources = site.data.find_data %}{% assign categories = resources | map: 'category' | uniq %}
<div class="accordion mb-3" id="accordionData">{% for c in categories %}
    <div class="accordion-item">
        <h3 class="accordion-header" id="heading{{ forloop.index }}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="false" aria-controls="collapse{{ forloop.index }}">{{ c }}</button>
        </h3>
        <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#accordionData">
            <div class="accordion-body">{% assign items = resources | where: 'category', c %}
                <ul>{% for i in items %}
                    <li><a href="{{ i.link }}">{{ i.title }}</a> {% if i.description %}- {{ i.description }}{% endif %}</li>{% endfor %}
                </ul>
            </div>
        </div>
    </div>{% endfor %}
</div>

## Data Resources

<a href="https://www.lib.uidaho.edu/services/data/data-management/guide/citation/" class="btn btn-outline-pride-gold my-2">How to Cite Data</a>
<a href="https://verso.uidaho.edu/esploro/search/collections/University-of-Idaho-Data-Repository/datacode?institution=01ALLIANCE_UID" class="btn btn-outline-pride-gold my-2">VERSO Data Repository</a>
<a href="https://www.lib.uidaho.edu/services/data/data-management/" class="btn btn-outline-pride-gold my-2">Data Management Guide</a>
<a href="{{'/datahub/' | relative_url }}" class="btn btn-outline-pride-gold my-2">Data Hub: Geospatial and Data Sciences Support</a>
{:.text-center}
