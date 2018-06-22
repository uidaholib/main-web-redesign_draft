(function(){// Idaho's Library Hours (April 4, 2016) by Devin Becker based on Today's Library Hours v.1 (March 30, 2011) by Matthew Reidsma, reidsmam@gvsu.edu
// Released under the GPL: https://www.gnu.org/licenses/gpl.html
//

// Configuration:
// ------------------------------------------------------------------

// Enter base times for your library


	var base = "Open 24 Hours";
	var baseFri = "Open 12:01am &#8211; 8:00pm ";
	var baseSat	= "Open 10:00am &#8211; 6:00pm";
	var baseSun	= "Open 10 AM - Friday";
	var baseSummerWkday = "Open 7:00am &#8211; 7:00pm";
	var baseSummerWkend = "Open 10:00am &#8211; 6:00pm";
	var baseTgWkday = "Open 8:00am &#8211; 8:00pm";
	var baseTgWkend = "Open 10:00am &#8211; 6:00pm";
	var baseXmasWkday = "Open 8:00am &#8211; 6:00pm";
	var baseXmasWkend = "Open 10:00am &#8211; 6:00pm";
	var baseOneOff = "Open 8:00am &#8211; 5:00pm";
	var baseTwoOff = "Open 10:00am &#8211; 6:00pm";


	// Establishing date strings (for inclusion in diffHours array) and day numbers for if/else statements
var currentDate = new Date()
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
		if (month < 10) { month = '0' + month; }
	if (day < 10) { day = '0' + day; }
	var dateNumber = ("" + month + day);
	var dayNumber = currentDate.getDay();
	
// Special "one off" dates that don't fit other patterns
	var oneOff = ["1123"];
var twoOff = ["1125"];
	
	// All dates with different hours, inlcuding winter dates, tg dates,xmas dates, and closed dates
var diffHours = ["0529","0704", "0903","1124","1224","1225","1231", "0101","0115","1119","1120","1121","1122","1126","1216","1217","1218","1219","1220","1221","1222","1223","1226","1227","1228","1229","1230","0102","0103","0104","0105","0106","0107","0108","0109","0110", "0310","0311","0312","0313","0314","0315","0316","0317","0318" ];

// All  tg dates and spring break dates with different hours
var tgdiff = ["1119","1120","1121","1122","1126", "0310","0311","0312","0313","0314","0315","0316","0317","0318" ];
// All  xmas dates (and January Winter Break Dates) with different hours
var xmasdiff = ["1216","1217","1218","1219","1220","1221","1222","1223","1226","1227","1228","1229","1230","0102","0103","0104","0105","0106","0107","0108","0109","0110" ];

//All closed dates
var closedUp = ["0528","0704", "0903","1124","1224","1225","1231", "0101","0115"];


//Spring semester hours
	if(oneOff.indexOf(dateNumber)==0) 
	{
	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseOneOff;
	 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
	}
	else if(twoOff.indexOf(dateNumber)==0) 
	{
	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseTwoOff;
	 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
	}	
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 101 && Number(dateNumber) < 514) {
	//Mon-Thur
			if (dayNumber > 0 && dayNumber < 5){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + base;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Friday
			else if (dayNumber == 5 ){
				 	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseFri;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Saturday		
			else if (dayNumber == 6 ){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSat;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Sunday	
			else if (dayNumber == 0 ){
				    var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSun;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Error
			else {
					var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>" ;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
		}
//Fall semester hours
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 821 && Number(dateNumber) < 1217) {
	//Mon-Thur
			if (dayNumber > 0 && dayNumber < 5){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + base;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Friday
			else if (dayNumber == 5 ){
				 	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseFri;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Saturday		
			else if (dayNumber == 6 ){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSat;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Sunday	
			else if (dayNumber == 0 ){
				    var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSun;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Error
			else {
					var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>" ;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
		}
//Summer hours
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 513 && Number(dateNumber) < 822) {
	//Summer Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSummerWkday;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Summer Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseSummerWkend;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Error
			else {
					var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>" ;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
		}
//Thanksgiving/SpringBreak/WinterBreak hours (if not in xmas or closed dates ...)
	else if(closedUp.indexOf(dateNumber)==-1 && xmasdiff.indexOf(dateNumber)==-1) {
	//Thanksgiving/SpringBreak/WinterBreak Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseTgWkday;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Thanksgiving/SpringBreak/WinterBreak Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseTgWkend;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Error
			else {
					var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>" ;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
		}
//Xmas hours(if not in thanksgiving or closed dates ...)
	else if(closedUp.indexOf(dateNumber)==-1 && tgdiff.indexOf(dateNumber)==-1) {
	//Xmas Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseXmasWkday;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Xmas Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: " + baseXmasWkend;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
	//Error
			else {
					var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>" ;
					 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
			}
		}		

		
		
		//Closed dates
	else{
	var libhours = "<a href='https://www.lib.uidaho.edu/about/hours.html'>Hours</a>: The library is closed today. ";
	 document.getElementById("timedisp_sm").innerHTML = libhours; document.getElementById("timedisp").innerHTML = libhours;
	}	
		
		
		
})();