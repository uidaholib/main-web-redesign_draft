<script src="{{ '/assets/js/ofi.min.js' | relative_url }}"></script>
<script>
    $(function () { objectFitImages() });
</script>
<script>
    $(".researchers").sort(function() { return 0.5 - Math.random() }).first().show();
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
