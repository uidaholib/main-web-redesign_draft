--- 
title: Article Access Tools 
section: Find 
permalink: /find/accesstools.html 
layout: page 
---

{% include feature/alert.html dismiss=true color="warning" text="*Please note:* due to a recent system upgrade, the Library's proxy server URL has changed. If you are having difficulty accessing resources saved in a reference manager or other access tool you may need to update the links. See <a href='https://www.lib.uidaho.edu/proxy404.html' class='alert-link'>Proxy 404</a> for details." %}

Did you know that many academic articles behind a paywall have a free [open access](https://sparcopen.org/open-access/) version available?
Did you know that you can connect external tools to your library account for seamless access to our subscriptions?
 
This curated list of tools goes beyond our [library catalog](https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=default_tab&sortby=rank&vid=UID) to help you access resources using both U of I library subscriptions *and* open access repositories so that you can get articles in the fastest and simplest way possible. 
If we don’t have access, please put in a request with [Interlibrary Loan]({{ '/services/ill/' | relative_url }}). 
As always, don’t hesitate to contact a [reference librarian]({{ '/help/' | relative_url }}) with any questions!

Tools for article access and discovery on the web:
{% for t in site.data.find_access-tools %}
- <a href="#{{ t.title | slugify }}">{{ t.title }}</a> ({{ t.type }}){% endfor %}

---------------

{% for t in site.data.find_access-tools %}
<a id="{{ t.title | slugify }}"></a>
{% capture text %}
{{ t.description }}

{% if t.link %}<a href="{{ t.link }}" target="_blank" rel="noopener" class="btn btn-success">{{ t.title }}</a>{% endif %}
{% endcapture %}
{% include bootstrap/card.md header=t.title text=text %}

{% endfor %}

------------

Much of this content was adapted from librarian Jeremy Kenyon's [Tools for Accessing Literature on the Web](https://jkenyon.github.io/tools-workshop/) workshop. 
More details, tools, and references can be found on the workshop site.
