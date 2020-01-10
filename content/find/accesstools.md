--- 
title: Access Tools 
section: Find 
permalink: /find/accesstools.html 
layout: page 
---

Many scholars support [open access](https://sparcopen.org/open-access/) but don’t always know where to start when looking for academic literature on the web. 
This curated list of search tools goes beyond our [library catalog](https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=default_tab&sortby=rank&vid=UID) to help you find and access resources using U of I library subscriptions *and* open access repositories so that you can get articles in the fastest and simplest way possible. 
If we don’t have access, please put in a request with [Interlibrary Loan]({{ '/services/ill/' | relative_url }}). 
As always, don’t hesitate to contact a [reference librarian]({{ '/help/' | relative_url }}) with any questions!

Tools:
{% for t in site.data.find_access-tools %}
- <a href="#{{ t.title | slugify }}">{{ t.title }}</a> ({{ t.type }}){% endfor %}

---------------

{% for t in site.data.find_access-tools %}
<a id="{{ t.title | slugify }}"></a>
{% capture text %}
{{ t.description }}

{% if t.link %}<a href="{{ t.link }}" class="btn btn-success">{{ t.title }}</a>{% endif %}
{% endcapture %}
{% include bootstrap/card.md header=t.title text=text %}

{% endfor %}

------------

Much of this content was adapted from librarian Jeremy Kenyon's [Tools for Accessing Literature on the Web](https://jkenyon.github.io/tools-workshop/) workshop. 
More details, tools, and references can be found on the workshop site.

{% include lib-chat-widget.html %}
