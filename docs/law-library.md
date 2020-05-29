# Law library 

Has a catalog search box embedded on their home page, 
https://www.uidaho.edu/law/library

Added to SiteCore as a rich object (?).

## New

<h2>Search our catalog</h2>
<script>
    function primo_search() {
        var query = document.getElementById("primo-search").value;
        window.open("https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=UID_LAW&tab=default_tab&search_scope=everything&query=any,contains," + encodeURIComponent(query), "_self" );
    }
</script>
<style>
    #law-search-form {
    font-size: 1.25rem;
    line-height: 1.5;
    padding: .75rem 1rem;
    border: 1px solid rgba(0,0,0,.125);
    }
    #lawSearch {
    padding: .4em .75em .6em;
    width: 70%;
    }
    #law-search-button {
    border: 2px solid #f1b300;
    background: #f1b300;
    color: #191919;
    text-align: center;
    padding: .4em .75em .4em;
    cursor: pointer;
    font-weight: 700;
    margin-left: .5em;
    }
    #law-advanced-search {
    border-bottom: 1px solid #191919;
    color: #191919;
    text-decoration: none;
    margin-left: .5em;
    }
    #law-advanced-search:after {
    color: #f1b300;
    content: "\00A0\00A0\276F";
    display: inline;
    font-size: 0.8em;
    }
</style>
<div>
    <form name="primoLawSearch" id="law-search-form" class="form-inline row justify-content-end pt-2" role="search" onsubmit="primo_search(); return false;">
        <input id="primo-search" type="search" placeholder="Search the catalog ..." aria-label="Search Law Library catalog">
        <button type="submit" id="law-search-button">Go</button>
        <br>
        <a href="https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=UID_LAW&mode=advanced" id="law-advanced-search">Advanced Search</a>
    </form>
</div>
<br>

## Old 

<h2>Search our catalog</h2>
<script>
function newLawSearch() {
    document.getElementById("lawPrimoQuery").value = "any,contains," + document.getElementById("lawSearch").value;
    document.forms["primoLawSearch"].submit();
}
</script>
<style>
    #law-search-form {
    font-size: 1.25rem;
    line-height: 1.5;
    padding: .75rem 1rem;
    border: 1px solid rgba(0,0,0,.125);
    }
    #lawSearch {
    padding: .4em .75em .6em;
    width: 70%;
    }
    #law-search-button {
    border: 2px solid #f1b300;
    background: #f1b300;
    color: #191919;
    text-align: center;
    padding: .4em .75em .4em;
    cursor: pointer;
    font-weight: 700;
    margin-left: .5em;
    }
    #law-advanced-search {
    border-bottom: 1px solid #191919;
    color: #191919;
    text-decoration: none;
    margin-left: .5em;
    }
    #law-advanced-search:after {
    color: #f1b300;
    content: "\00A0\00A0\276F";
    display: inline;
    font-size: 0.8em;
    }
</style>
<div>
<form name="primoLawSearch" id="law-search-form" method="get" target="_blank" action="https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?" role="search" enctype="application/x-www-form-urlencoded; charset=utf-8" onsubmit="newLawSearch()">
    <input id="lawSearch" type="search" placeholder="Search the catalog ..." aria-label="Search Law Library catalog">
    <button type="submit" id="law-search-button">Go</button>
    <br>
    <a href="https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=UID_LAW&amp;tab=everything&amp;search_scope=everything&amp;sortby=rank&amp;mode=advanced" id="law-advanced-search">Advanced Search</a>
    <input type="hidden" name="vid" value="UID_LAW">
    <input type="hidden" name="tab" value="everything">
    <input type="hidden" name="search_scope" value="everything">
    <input type="hidden" id="indx" name="indx" value="1">
    <input type="hidden" id="bulkSize" name="bulkSize" value="10">
    <input type="hidden" id="dym" name="dym" value="true">
    <input type="hidden" name="highlight" value="true">
    <input type="hidden" name="displayField" value="all">
    <input type="hidden" name="query" id="lawPrimoQuery">
</form>
</div>
<br>
</div>

