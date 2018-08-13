{% assign researchers = site.data.vivo-featured %}
<script>
    var researchers = [{% for researcher in researchers %}"{{researcher.last-name | downcase}}"{% unless forloop.last %},{% endunless %}{% endfor %}];
    /* Fisher-Yates shuffle https://bost.ocks.org/mike/shuffle/ */
    function shuffle(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    shuffle(researchers);
    //console.log(researchers[0]);
    $(document).ready(function(){
        document.getElementById("researcher-" + researchers[0]).style.display = "";
    });
</script>