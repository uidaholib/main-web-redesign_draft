<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
(function(){
    // add a text input to each footer cell
    $('#item-table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
    // initialize DataTables
    var table = $('#item-table').DataTable( {
        // use DataTables ajax load 
        ajax: { url: '{{ "/assets/data/spec_idahobio.json" | relative_url }}', dataSrc: 'objects' },
        // defer render to speed up large sets
        "deferRender": true,
        // get the data from the json
        // name,bdate,ddate,book,callnumber
        columns: [ { data: '0' }, { data: '1' }, { data: '2' }, { data: '3' }, { data: '4' } ],
        paging: true,
        lengthMenu: [[ 15, 50, 100, 200], [ 15, 50, 100, 200]],
        // sort based on the date
        order: [[ 0, "asc" ]],
        // add download features
        dom: 'ilftipB',//'Blfrtip', 
        buttons: [ 'excelHtml5', 'csvHtml5' ]
    });
    // Apply column search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change clear', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    
})();
</script>