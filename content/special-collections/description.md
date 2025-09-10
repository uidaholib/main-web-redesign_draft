---
title: Collection Types and Strengths
layout: page
section: Special Collections
permalink: /special-collections/description.html
---

{% include feature/figure.html img="https://www.lib.uidaho.edu/media/spec/carousel/spec_crop2.jpg" alt="1917 black and white panoramic photograph of the University of Idaho campus, featuring rolling hills and the College Gothic style administration building" %}

Special Collections and Archives specializes in archival materials that document the history and culture of Idaho and the University of Idaho. 
Our holdings contain over 25,000 linear feet of rare, unique, and valuable materials. 

These materials are available for research use by faculty, staff, students, visiting scholars, and the public in the Special Collections [Reading Room](/special-collections/plan.html). 
Most collections are described by finding aids hosted on [Archives West](https://archiveswest.orbiscascade.org/search.php?r=idu), a searchable repository of archival finding aids from throughout the Northwest.

## Collection Types

Materials housed in Special Collections and Archives typically fall into one of three categories, based on the origin and/or format of the physical items: [manuscript collections](https://archiveswest.orbiscascade.org/search.php?r=idu&q=%22PG+%22), [photograph collections](https://archiveswest.orbiscascade.org/search.php?r=idu&q=%22MG+%22), and [book collections](https://alliance-uidaho.primo.exlibrisgroup.com/discovery/search?vid=01ALLIANCE_UID:UID&tab=SPECAW_Slot&search_scope=SPECAW).

{% assign collection_groups = site.data.spec_collection_groups %}
<div class="row">{% for c in collection_groups %}
<div class="col-md-6">{% capture text %}{{ c.description }} 

<a href="{{ c.link }}" class="btn btn-outline-payette-blue">Browse {{ c.display_name }} Collections</a>{% endcapture %}{% include feature/card.html header=c.display_name text=text %}
</div>{% endfor %}
</div>

-------

## Collection Strengths

Although our collections focus on the University of Idaho and cover a wide variety of subjects related the state of Idaho and the broader Pacific Northwest, our holdings also have exceptional coverage of a few key collecting areas: jazz, forestry, and mining. 

The International Jazz Collection (IJC) is the leading jazz archive in the Pacific Northwest. It features papers, photographs, audio/visual materials, and artifacts from jazz legends such as Lionel Hampton, Leonard Feather, Lee Morse, Dizzy Gillespie, and Ella Fitzgerald.

Our collections feature a vast amount of information related to Idaho's forests, including lumber companies, forestry sciences, and the history of Idaho's forests. Several of these collections have been turned into [digital collections](https://www.lib.uidaho.edu/digital/home/collections.html#Forests).

Our collections feature an extensive amount of information related to Idaho's mining industry, including mining company records and photographs of mining towns and miners.
