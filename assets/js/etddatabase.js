    google.load('visualization', '1', { packages: ['table'] });

    // Create the default table that appears on page load.  This also controls the 'Browse by Subject' dropdown menu.
	function drawTable() {
	
		// Set the query variable for the Google FusionTable.  Column names are adjusted to make response data more user-friendly.
        var query = "SELECT 'Title' as Title,'Date' as Date, 'Creator' as Author,  'Subjects' as Subjects, 'DeptCollegeProf' as 'Additional Information',  'CallNumber1' as 'Call Number', 'LinkMod' as Link  " +
            'FROM 1YnuUdcf1asLN2h8LO-11cuXG3gvPJiDOnC_3TYA+order+by+col3+desc';
		
		// Set the input value variable (if present) for the subject dropdown menu
		var team2 = document.getElementById('team2').value;
		if (team2) {
			query += " WHERE 'CallNumber1' STARTS WITH '" + team2 + "'";
		}
		
		// Encode the query for HTTP
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
		
		// Send and receive the query
        gvizQuery.send(function (response) {
			var data = response.getDataTable();
			
			// Format the response data, by selecting the columns.  The column index numbers are set by the FusionTable. 
			// Column 6 is a link written as a string and we use the data in that column to create a link on column 5, then we remove the column from display.
			var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{1}">{0}</a>');
			formatter.format(data, [0, 6], 0);
			
			var formatter3 = new google.visualization.PatternFormat('<div id="limit3">{0}</div>');
			formatter3.format(data, [3, 8], 3);	
			formatter3.format(data, [4, 8], 4);	
			
			
			data.removeColumn(6);
			
			// Draw the table.  Certain options are used.  These are documented extensively in the Google Visualization API documentation.
			var table = new google.visualization.Table(document.getElementById('visualization'));
			table.draw(data, {
				allowHtml: true,
				showRowNumber: false,
				alternatingRowStyle: true
			});
        });
    }
	
		// Re-draws the table, and sets all dropdown menus and search values to default.  This removes all filters on the data.
	    function resetTable(lc, dt) {
			lc.selectedIndex = 0;
			dt.selectedIndex = 0;
			document.getElementById('searchMenu').selectedIndex = 'Search';
			document.getElementById('search2').value = '';
			
			// Set the query variable for the Google FusionTable.  Column names are adjusted to make response data more user-friendly.
			var query = "SELECT 'Title' as Title,'Date' as Date, 'Creator' as Author,  'Subjects' as Subjects, 'DeptCollegeProf' as 'Additional Information',  'CallNumber1' as 'Call Number', 'LinkMod' as Link  " +
				'FROM 1YnuUdcf1asLN2h8LO-11cuXG3gvPJiDOnC_3TYA';
			
			// Set the input value variable (if present) for the subject dropdown menu
			var team2 = document.getElementById('team2').value;
			if (team2) {
				query += " WHERE 'CallNumber1' STARTS WITH '" + team2 + "'";
			}
			
			// Encode the query for HTTP
			var queryText = encodeURIComponent(query);
			var gvizQuery = new google.visualization.Query(
				'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
			
			// Send and receive the query
			gvizQuery.send(function (response) {
				var data = response.getDataTable();
				
				// Format the response data, by selecting the columns.  The column index numbers are set by the FusionTable. 
				// Column 6 is a link written as a string and we use the data in that column to create a link on column 5, then we remove the column from display.
				var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{1}">{0}</a>');
				formatter.format(data, [0, 6], 0);
			
			var formatter3 = new google.visualization.PatternFormat('<div id="limit3">{0}</div>');
			formatter3.format(data, [3, 8], 3);	
			formatter3.format(data, [4, 8], 4);	
				data.removeColumn(6);
				
				// Draw the table
				var table = new google.visualization.Table(
				  document.getElementById('visualization'));
				table.draw(data, {
					allowHtml: true,
					showRowNumber: false,
					alternatingRowStyle: true
				});
			});
    }
	
	// Query and draw the table based on search fields and user input into the searchbox.  The rest is the same as above.
	function searchTable(x, y) {
		var z = y.options[y.selectedIndex].value;
		var query = "SELECT 'Title' as Title,'Date' as Date, 'Creator' as Author,  'Subjects' as Subjects, 'DeptCollegeProf' as 'Additional Information',  'CallNumber1' as 'Call Number', 'LinkMod' as Link  " +
            'FROM 1YnuUdcf1asLN2h8LO-11cuXG3gvPJiDOnC_3TYA';
		if (x) {
			query += " WHERE '" + z + "' CONTAINS IGNORING CASE '" + x + "'";
        }
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
		gvizQuery.send(function (response) {
			var data = response.getDataTable();
			var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{1}">{0}</a>');
				formatter.format(data, [0, 6], 0);
			
			var formatter3 = new google.visualization.PatternFormat('<div id="limit3">{0}</div>');
			formatter3.format(data, [3, 8], 3);	
			formatter3.format(data, [4, 8], 4);	
				data.removeColumn(6);
			var table = new google.visualization.Table(
				document.getElementById('visualization'));
			table.draw(data, {
				allowHtml: true,
				showRowNumber: false,
				alternatingRowStyle: true
			});
		});
	}
	
	// Query and draw the table for the 'Browse by Date' dropdown menu.  The rest is the same as above.
	function drawTable3(p) {
        var query = "SELECT 'Title' as Title, " +
           "'Date' as Date, 'Creator' as Author,  'Subjects' as Subjects, 'DeptCollegeProf' as 'Additional Information',  'CallNumber1' as 'Call Number', 'LinkMod' as Catalog  " +
            'FROM 1YnuUdcf1asLN2h8LO-11cuXG3gvPJiDOnC_3TYA';
		if (p) {
			query += " WHERE 'Date' = '" + p + "'";
        }
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
        gvizQuery.send(function (response) {
			var data = response.getDataTable();
			var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{1}">{0}</a>');
			formatter.format(data, [0, 6], 0);
			
			var formatter3 = new google.visualization.PatternFormat('<div id="limit3">{0}</div>');
			formatter3.format(data, [3, 8], 3);	
			formatter3.format(data, [4, 8], 4);	
				data.removeColumn(6);
			var table = new google.visualization.Table(
				document.getElementById('visualization'));
			table.draw(data, {
				allowHtml: true,
				showRowNumber: false,
				alternatingRowStyle: true
			});
        });
    }
	
		function drawTable4() {
	
		// Set the query variable for the Google FusionTable.  Column names are adjusted to make response data more user-friendly.
        var query = "SELECT 'Title' as Title,'Date' as Date, 'Creator' as Author,  'Subjects' as Subjects, 'DeptCollegeProf' as 'Additional Information',  'CallNumber1' as 'Call Number', 'LinkMod' as Link  " +
            'FROM 1YnuUdcf1asLN2h8LO-11cuXG3gvPJiDOnC_3TYA';
		
		// Set the input value variable (if present) for the subject dropdown menu
		var team2 = document.getElementById('team2').value;
		if (team2) {
			query += " WHERE 'CallNumber1' STARTS WITH '" + team2 + "'";
		}
		
		// Encode the query for HTTP
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
		
		// Send and receive the query
        gvizQuery.send(function (response) {
			var data = response.getDataTable();
			
			// Format the response data, by selecting the columns.  The column index numbers are set by the FusionTable. 
			// Column 6 is a link written as a string and we use the data in that column to create a link on column 5, then we remove the column from display.
			var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{1}">{0}</a>');
			formatter.format(data, [0, 6], 0);
			
			var formatter3 = new google.visualization.PatternFormat('<div id="limit3">{0}</div>');
			formatter3.format(data, [3, 8], 3);	
			formatter3.format(data, [4, 8], 4);	
			
			
			data.removeColumn(6);
			
			// Draw the table.  Certain options are used.  These are documented extensively in the Google Visualization API documentation.
			var table = new google.visualization.Table(document.getElementById('visualization'));
			table.draw(data, {
				allowHtml: true,
				showRowNumber: false,
				alternatingRowStyle: true
			});
        });
    }

    google.setOnLoadCallback(drawTable);
	resetTable(document.getElementById('team2'), document.getElementById('team3'));

