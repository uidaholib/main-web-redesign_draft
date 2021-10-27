<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
(function(){
    $('{{ page.table-id }}').DataTable({
        {% if page.table-paginate == true %}"lengthMenu": [[ 10, 25, 50, -1], [ 10, 25, 50, "All"]], "paging": true{% else %}
        "paging": false{% endif %}
    });
})();
</script>