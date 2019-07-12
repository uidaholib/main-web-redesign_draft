<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
/* use jquery to initialize DataTables and load collection data */
(function(){
    var table = $('#item-table').DataTable( {
        // use DataTables ajax load 
        ajax: { url: '{{ "/assets/data/spec_idahobio.json" | relative_url }}', dataSrc: 'objects' },
        // defer render to speed up large sets
        "deferRender": true,
        // get the data from the json
        // name,bdate,ddate,book,callnumber
        columns: [ { data: '0' }, { data: '1' }, { data: '2' }, { data: '3' }, { data: '4' } ],
        paging: true,
        lengthMenu: [[ 25, 50, 100, -1], [ 25, 50, 100, "All"]],
        // sort based on the date
        order: [[ 0, "asc" ]]
        
    });
    
})();
</script>