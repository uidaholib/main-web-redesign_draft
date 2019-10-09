<script src="{{ '/assets/js/ofi.min.js' | relative_url }}"></script>
<script>
    $(function () { objectFitImages() });
    /* carousel pause button */
    $("#carousel-pause").click(function () {
        if($("#carousel-pause").hasClass("fa-pause-circle")){
            $("#index-carousel").carousel("pause");
            $("#carousel-pause").removeClass("fa-pause-circle").addClass("fa-play-circle");
        } else {
            $("#index-carousel").carousel("cycle");
            $("#carousel-pause").removeClass("fa-play-circle").addClass("fa-pause-circle");
        }
    });
</script>

<script>
{%- assign researchers = site.data.vivo_featured_researchers | where_exp:"item","item.year == '2019'" -%}
{%- assign researcher-fields = 'id;last;first;rank;dept;deptid;pub;publoc;publink;pubtype' | split: ';' -%}
    /* featured researchers */
    var researchers = [
        {% for researcher in researchers %}{ {% for f in researcher-fields %}"{{ f }}":{{ researcher[f] | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %} }{% unless forloop.last %},{% endunless %}{% endfor %}
    ];
    var featuredResearcher = researchers.sort(function() { return 0.5 - Math.random() }).pop();
    var featuredCard = '<a href="http://vivo.nkn.uidaho.edu/individual/' + featuredResearcher.id + '"> <img class="card-img-top" src="https://www.lib.uidaho.edu/media/vivo-featured/' + featuredResearcher.id + '.jpg" alt="' + featuredResearcher.last + 'portrait"></a>' +
    '<div class="card-body"> <h4 class="card-title"><a href="http://vivo.nkn.uidaho.edu/individual/' + featuredResearcher.id + '">' + featuredResearcher.first + ' ' + featuredResearcher.last + '</a></h4>' +
    '<p class="card-text">' + featuredResearcher.rank + '<br><a href="http://vivo.nkn.uidaho.edu/individual/' + featuredResearcher.deptid + '">' + featuredResearcher.dept + '</a></p>' + 
    '<h5>Recent ' + featuredResearcher.pubtype + '</h5>' +
    '<p class="card-text"><a href="' + featuredResearcher.publink + '">' + featuredResearcher.pub + '</a><br><em>' + featuredResearcher.publoc + '</em></p>' +
    '<a href="http://vivo.nkn.uidaho.edu/individual/' + featuredResearcher.id + '" class="btn btn-clearwater ">View VIVO Profile</a></div>';
    document.getElementById("featuredResearcher").innerHTML = featuredCard;
</script>
