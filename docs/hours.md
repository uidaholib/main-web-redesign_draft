# Hours 

The current hours are added to the topbar of every page using js fetching the hours for LibCal API. 

The topbar of the default page layout has a span element with id `timedisp` saying "Hours".
The JS is in includes/js/current-hours-js.html. 
It hits the libcal hours api, gets a json response, parses it to find the correct opening hours (Main Library), and puts it on the page. 
If there is an error, the display will stay as a link to the main hours page.
If the "status" set in LibCal Hours is "open" or "24hours", the javascript will use the "rendered" value from the json and add it to the page with `Open ` in front (e.g. resulting in "Open 9am - 10pm" or "Open 24 Hours"). 
Otherwise, it will just directly use the "rendered" value. 
For "closed" status, this will be "Closed". 
For "text" status, this will be the message.
If you add a note/message in LibCal Hours, the message will be added directly to the "rendered"--so for display purposes, start your message with a dash or other deliminator (e.g. message = `- Due to Power Outage`, will have rendered "Closed - Due to Power Outage").

On the main hours page (about/hours.html), the top loads the hours using a LibCal embed. 
The standard hours are written out below.  

## old set up

*legacy for reference*

Hours are loaded on every page using the file "/assets/js/hours.js".

Hours.js is generated from data in the file "_data/config_hours.yml".
Normal operating hours, breaks, special hours, and closed days are described in the yml data. 
The necessary format is described in the comments.
Dates include the full year so that special dates can be set out in advance.

The topbar of the default page layout has an empty span element with id `timedisp`. 
Hours.js adds a message to that span.
The js gets the current date and compares it against
closed dates, 
special hours dates, 
break periods, 
then default hours, 
to determine the correct message to display.
