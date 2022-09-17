# Hours 

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
