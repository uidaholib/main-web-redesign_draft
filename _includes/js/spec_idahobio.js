<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
(function(){
    // add text input to each footer heading for search
    /*
    $('#item-table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );*/
    // add a text input to each header for search
    $('#item-table thead tr').clone(true).appendTo( '#item-table thead' );
    $('#item-table thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
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
        orderCellsTop: true,
        lengthMenu: [[ 15, 50, 100, 200], [ 15, 50, 100, 200]],
        // sort based on the date
        order: [[ 0, "asc" ]],
        // add download features
        dom: 'i<"row"<"col-md-6"l><"col-md-6"f>>t<"row"<"col-md-6"i><"col-md-6"p>>B',//'Blfrtip', 
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