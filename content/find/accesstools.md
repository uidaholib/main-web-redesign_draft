--- 
title: Access Tools 
section: Find 
permalink: /find/accesstools.html 
layout: page 
---

Going beyond the [library catalog](https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=default_tab&sortby=rank&vid=UID) this curated list features tools to help you access academic literature on the web using U of I library subscriptions and open access sources, so that you can get articles in the fastest and simplest way possible. 
If we don't have access, please put in a request with [Interlibrary Loan]({{ '/services/ill/' | relative_url }}). 

As always, don't hesitate to contact a [reference librarian]({{ '/help/' | relative_url }}) with any questions!

Tools:

- <a href="#gscholar">Google Scholar</a>
- <a href="#bookmarklet">U of I Bookmarklet</a>
- <a href="#doi">DOI Finder</a>
- <a href="">Unpaywall</a>
- <a href="">The OA Button</a>
- <a href="">Lazy Scholar</a>
- <a href="">Kopernio</a>
- <a href="">Google Scholar Button</a>

<a id="gscholar"></a>
{% capture gscholar %}
Would you like to use <a href="https://scholar.google.com/" target="_blank" rel="noopener">Google Scholar</a> to find articles? 
Link UI Library to your account to make it easy to check our subscriptions for full text access.

- Sign in to <a href="https://scholar.google.com/" target="_blank" rel="noopener">Google Scholar</a> with your Gmail / Google account (link in upper right corner).
- Go to your <a href="https://scholar.google.com/scholar_settings" target="_blank" rel="noopener">Settings</a> (accessible from the menu button in the upper left corner).
- Click on "Library links".
- Type "Idaho" in the search box, select both "Univ of Idaho - Get it" and "Open WorldCat - Library Search" from the list, and click on "Save".
- Now your Google Scholar search results will show a link "Univ of Idaho - Get it" to access full text items in our subscriptions. <em>Note: Scholar can only cross-check some of our holdings so may not comprehensively list access options.</em>
{% endcapture %}
{% include bootstrap/card.md text=gscholar header="Connect Google Scholar to U of I Library" %}

<a id="bookmarklet"></a>
{% capture bookmarklet %}
The log-in bookmarklet helps you to log in through the library from wherever you are on the internet without leaving that page. 
So, say you find an article via Google that asks for you to sign in to access it, just click on the bookmarklet link in your bookmarks bar and this tool will automatically log you in and grant you access, if the library subscribes to the journal or database in which it's held.

**Installation**
                
- Add the following link to your bookmarks <a href="javascript:void(location.href=%22http://ida.lib.uidaho.edu:2048/login?url=%22+location.href)" class="btn btn-sm btn-success">UI LIB Log-in</a> by dragging it to your bookmarks *or* right-clicking it and selecting bookmark/add to favorites. 
- *Alternatively*, if your browser doesn't support creating bookmarks from links (e.g. iPad), bookmark this page, then edit the new bookmark  with a title of your choosing and add the following text as the URL: `javascript:void(location.href=%22http://ida.lib.uidaho.edu:2048/login?url=%22+location.href)`

**Try it out!**

- From off-campus, go to this <a target="_blank" rel="noopener" href="http://dx.doi.org/10.1002/jwmg.72">article's website</a>, then click on the UIdaho Library Log-in bookmarklet.
- Enter your UI credentials, then click Submit. You should return to the page with access to the article!

**Problems?**

- If you see an error message, it may be a website we have not enabled through our authentication server.
- If it works but you still do not have access to the article, it may not be one to which the University of Idaho currently subscribes.
- Please report problems or request assistance by contacting the library Reference Desk, <a href="mailto:libref@uidaho.edu">libref@uidaho.edu</a>.
{% endcapture %}
{% include bootstrap/card.md text=bookmarklet header="U of I Library Log-in Bookmarklet" %}

<a id="doi"></a>
{% capture doi %}
The DOI Finder allows you to visit a web resource (e.g. a journal article) based only on its DOI number.

**Installation**

- Add the following link to your bookmarks <a href="javascript:(function(){var a = prompt('Enter a DOI:'); if(a===null||a===''){return;}else{location.href='http://dx.doi.org/'+a};}());" class="btn btn-sm btn-success">DOI Finder</a> by dragging it to your bookmarks *or* right-clicking it and selecting bookmark/add to favorites. 
- *Alternatively*, if your browser doesn't support creating bookmarks from links (e.g. iPad), bookmark this page, then edit the new bookmark  with a title of your choosing and add the following text as the URL: `javascript:(function(){var a = prompt('Enter a DOI:'); if(a===null||a===''){return;}else{location.href='http://dx.doi.org/'+a};}());`

**Try it out!**

- Copy this DOI number (Ctrl-C or right-click, then copy): `10.1002/jwmg.72`
- Click on the DOI Finder in your bookmarks.
- Paste the DOI number into the box and hit Enter

**Problems?**

- If you see an error message, it may be a invalid DOI.
- Please report problems or request assistance by contacting the library Reference Desk, <a href="mailto:libref@uidaho.edu">libref@uidaho.edu</a>.
{% endcapture %}
{% include bootstrap/card.md text=doi header="DOI Finder Bookmarklet" %}

------------

Much of this content was adapted from librarian Jeremy Kenyon's [Tools for Accessing Literature on the Web](https://jkenyon.github.io/tools-workshop/) workshop. 
More details, tools, and references can be found on the workshop site.

{% include lib-chat-widget.html %}
