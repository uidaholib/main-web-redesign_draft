<script src="{{ '/assets/datatables/datatables.min.js' | relative_url }}"></script>
<script>
$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var collectionFilter = document.getElementById("groupSelect").value;
		// show everything
		if (collectionFilter == "all") { return true; }
		else { return aData[1] == collectionFilter; }
	}
);
</script>
<script>
/* use jquery to initialize DataTables and load collection data */
(function(){
	var table = $('#all-collections').dataTable({
		// defer render to speed up large sets
		"deferRender": true,
		paging: true,
		lengthMenu: [[ 25, 50, 100, -1], [ 25, 50, 100, "All"]],
		// sort based on the type
		order: [[ 1, "asc" ]]
		
	});
	/* Add event listeners to collectionSelect */
	$('#groupSelect').change( function() {
		table.fnDraw();
	});
	/* add read hash value for links */
	$(document).ready(function () {
		var hashVal = window.location.hash.split("#")[1];
		if ($.inArray(hashVal, ['PG','MG','UG','IJC-MG','VF']) >= 0) {
			$('#groupSelect').val(hashVal);
			table.fnDraw();
		}
	});
})();
</script>
