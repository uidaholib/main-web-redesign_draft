{% assign fields = "pg,title,text,serial_number" | split: "," %}
<script src="{{ '/assets/js/lunr.min.js' | relative_url }}"></script>
<script>
/* initialize lunr */

$.getJSON( "{{ '/assets/data/histphoto_lunr-store.json' | relative_url }}", function( data ) {
  var idx = lunr(function () {
    /* add index fields from config */
    this.ref('id')
    {% for f in fields %}
    this.field('{{ f }}')
    {% endfor %}
  
    //this.pipeline.remove(lunr.trimmer)
  
    for (var item in data.store) {
      this.add({
        {% for f in fields %}
        {{ f }}: item[{{ forloop.index0 }}],
        {% endfor %}
        id: item
      })
    }
  });
  
  console.log(data.store.length);
  console.log(idx.length);

  

/* search function */
function lunr_search () {
  var resultdiv = $('#results');
  var query = $('input#search').val();//.toLowerCase();
  /* basic search that supports operators */
  var result = idx.search(query); 
  /* more fuzzy search, but doesn't support operators:
  var result =
    idx.query(function (q) {
      query.split(lunr.tokenizer.separator).forEach(function (term) {
        q.term(term, { boost: 100 })
        if(query.lastIndexOf(" ") != query.length-1){
          q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
        }
        if (term != ""){
          q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
        }
      })
    });*/
  resultdiv.empty();
  resultdiv.prepend('<tr><td><h4 class="mt-3">' + result.length + ' Result(s) found</h4></td></tr>');
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem =
      '<tr>'+
          '<td class="">' +
            {% assign display = fields %}
            {% for d in display %}
            {% if forloop.first %}
            '<p class="h4">' + store[ref].{{ d }}  + '</p>' +
            '<p class="ml-3">' +
              {% else %}
              store[ref].{{ d }} + '<br> ' +
              {% endif %}{% endfor %}
            '</p></td>' +
      '</tr>';
    resultdiv.append(searchitem);
  }
}
/* init search box and get query string */
$(document).ready(function() {
  $('input#search').on('keyup', lunr_search );
  if (window.location.search) {
    var queryString = decodeURIComponent(window.location.search.substring(1).split("=")[1]);
    $('input#search').val(queryString);
    lunr_search ();
  }
});


});
</script>