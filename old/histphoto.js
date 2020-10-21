google.load('visualization', '1', { packages: ['table'] });

// Create the default table that appears on page load.  This also controls the 'Browse by Subject' dropdown menu.
function drawTable() {

    // Set the query variable for the Google FusionTable.  Column names are adjusted to make response data more user-friendly.
     var query = "SELECT 'PhotoName' as Title, 'Date_Text' as Date, 'PGNumber' as Photo_Group,  'SerialNumber' as IDNumber,   'Notes' as Notes, 'Thumbnail' as Image, 'DigitalCollection' as DigitalCollection, 'ImageText' as ImageText, 'CollText' as CollText  " +
        'FROM 1rg-iVOXas2zhZ2lY9kvmxkZonyOfrh6HMI_gboYO';
    
    // Set the input value variable (if present) for the subject dropdown menu
    var team2 = document.getElementById('team2').value;
    if (team2) {
        query += " WHERE 'PGNumber' CONTAINS IGNORING CASE '" + team2 + "'";
    }
    
    // Encode the query for HTTP
    var queryText = encodeURIComponent(query);
    var gvizQuery = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
    
    // Send and receive the query
    gvizQuery.send(function (response) {
        var data = response.getDataTable();
        
        // Format the response data, by selecting the columns.  The column index numbers are set by the FusionTable. 
var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [5, 7], 5);
        
        var formatter2 = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [6, 8], 6);	
        
            data.removeColumn(8);
                data.removeColumn(7);
                data.removeColumn(4);
            
                

        
        
        
        // Draw the table.  Certain options are used.  These are documented extensively in the Google Visualization API documentation.
        var table = new google.visualization.Table(document.getElementById('visualization'));
        table.draw(data, {
            allowHtml: true,
            showRowNumber: true,
            alternatingRowStyle: true
        });
    });
}

    // Re-draws the table, and sets all dropdown menus and search values to default.  This removes all filters on the data.
    function resetTable(lc, dt) {
        lc.selectedIndex = 0;
        dt.selectedIndex = 0;
        document.getElementById('searchMenu').selectedIndex = 'Search';
        document.getElementById('search').value = '';
        
        // Set the query variable for the Google FusionTable.  Column names are adjusted to make response data more user-friendly.
         var query = "SELECT 'PhotoName' as Title, 'Date_Text' as Date, 'PGNumber' as Photo_Group,  'SerialNumber' as IDNumber,   'Notes' as Notes, 'Thumbnail' as Image, 'DigitalCollection' as DigitalCollection, 'ImageText' as ImageText, 'CollText' as CollText  " +
        'FROM 1rg-iVOXas2zhZ2lY9kvmxkZonyOfrh6HMI_gboYO';
        
        // Set the input value variable (if present) for the subject dropdown menu
        var team2 = document.getElementById('team2').value;
        if (team2) {
            query += " WHERE 'PhotoName' CONTAINS IGNORING CASE '" + team2 + "'";
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
                var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [5, 7], 5);
        
        var formatter2 = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [6, 8], 6);	
        
            data.removeColumn(8);
                data.removeColumn(7);
                data.removeColumn(4);
            
            // Draw the table
            var table = new google.visualization.Table(
              document.getElementById('visualization'));
            table.draw(data, {
                allowHtml: true,
                showRowNumber: true,
                alternatingRowStyle: true
            });
        });
}

// Query and draw the table based on search fields and user input into the searchbox.  The rest is the same as above.
function searchTable(x, y) {
    var z = y.options[y.selectedIndex].value;
     var query = "SELECT 'PhotoName' as Title, 'Date_Text' as Date, 'PGNumber' as Photo_Group,  'SerialNumber' as IDNumber,   'Notes' as Notes, 'Thumbnail' as Image, 'DigitalCollection' as DigitalCollection, 'ImageText' as ImageText, 'CollText' as CollText  " +
        'FROM 1rg-iVOXas2zhZ2lY9kvmxkZonyOfrh6HMI_gboYO';
    if (x) {
        query += " WHERE '" + z + "' CONTAINS IGNORING CASE '" + x + "'";
    }
    var queryText = encodeURIComponent(query);
    var gvizQuery = new google.visualization.Query(
        'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
    gvizQuery.send(function (response) {
        var data = response.getDataTable();
        var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [5, 7], 5);
        
        var formatter2 = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [6, 8], 6);	
        
            data.removeColumn(8);
                data.removeColumn(7);
                data.removeColumn(4);
                

            
        var table = new google.visualization.Table(
            document.getElementById('visualization'));
        table.draw(data, {
            allowHtml: true,
            showRowNumber: true,
            alternatingRowStyle: true
        });
    });
}

// Query and draw the table for the 'Browse by Date' dropdown menu.  The rest is the same as above.
function drawTable3(p) {
    var query = "SELECT 'PhotoName' as Title, 'Date_Text' as Date, 'PGNumber' as Photo_Group,  'SerialNumber' as IDNumber,   'Notes' as Notes, 'Thumbnail' as Image, 'DigitalCollection' as DigitalCollection, 'ImageText' as ImageText, 'CollText' as CollText  " +
        'FROM 1rg-iVOXas2zhZ2lY9kvmxkZonyOfrh6HMI_gboYO';
    if (p) {
        query += " WHERE 'PGNumber' CONTAINS IGNORING CASE '" + p + "'";
    }
    var queryText = encodeURIComponent(query);
    var gvizQuery = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=' + queryText);
    gvizQuery.send(function (response) {
        var data = response.getDataTable();
            var formatter = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [5, 7], 5);
        
        var formatter2 = new google.visualization.PatternFormat('<a target="_blank" href="{0}">{1}</a>');
        formatter.format(data, [6, 8], 6);	
        
            data.removeColumn(8);
                data.removeColumn(7);
                data.removeColumn(4);
            
        var table = new google.visualization.Table(
            document.getElementById('visualization'));
        table.draw(data, {
            allowHtml: true,
            showRowNumber: true,
            alternatingRowStyle: true
        });
    });
}

google.setOnLoadCallback(drawTable);

