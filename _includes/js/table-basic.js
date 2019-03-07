<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
$(document).ready(function() {
    $('{{ page.table-id }}').dataTable({
        {% if page.table-paginate == true %}"lengthMenu": [[ 25, 50, -1], [ 25, 50, "All"]], "paging": true{% else %}
        "paging": false{% endif %}
    });
} );
</script>