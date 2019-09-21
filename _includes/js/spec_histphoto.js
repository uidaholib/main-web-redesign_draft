<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var collectionFilter = document.getElementById("collectionSelect").value;
        // show everything
        if (collectionFilter == "all") { return true; }
        else { return aData[3] == collectionFilter; }
    }
);
</script>
<script>
/* use jquery to initialize DataTables and load collection data */
(function(){
    var table = $('#item-table').DataTable( {
        // use DataTables ajax load 
        ajax: { url: '{{ "/assets/data/histphoto_min.json" | relative_url }}', dataSrc: 'objects' },
        // defer render to speed up large sets
        "deferRender": true,
        // get the data from the json
        // Title,Date,Notes,Photo Group,ID Number,Image link,Digital Collection link
        columns: [ { data: '2' }, { data: '3' }, { data: '4' }, { data: '1' }, { data: '0' }, { data: '5' }, { data: '6' } ],
        columnDefs: [ 
            // make Image link
            { "render": function ( data ) { if (data) { return '<a href="https://www.lib.uidaho.edu/special-collections/histphoto/' + data +'" target="_blank" rel="noopener">'+ data +'</a>'; } else { return '' } },"targets": 5 },
            // make Digital Collection link
            { "render": function ( data, row ) { if (data) { return '<a href="https://www.lib.uidaho.edu/digital/' + data + '" target="_blank" rel="noopener">'+ data +'</a>'; } else { return '' } },"targets": 6 }
            //{ "render": function ( data, type, row ) { if (data) { return '<a href="https://digital.lib.uidaho.edu/cdm/search/collection/' + data +'/searchterm/' + encodeURIComponent(row['5']) + '/field/all/mode/all/conn/and/order/title/ad/asc" target="_blank" rel="noopener">'+ data +'</a>'; } else { return 'N/A' } },"targets": 5 }
        ],
        paging: true,
        lengthMenu: [[ 25, 50, 100, -1], [ 25, 50, 100, "All"]],
        // sort based on the date
        order: [[ 2, "asc" ]]
        // add download features
        //dom: 'Blfrtip', 
        //buttons: [ 'excelHtml5', 'csvHtml5' ]
    });
    /* Add event listeners to collectionSelect */
    $('#collectionSelect').change( function() {
        table.draw();
    } );
})();
</script>