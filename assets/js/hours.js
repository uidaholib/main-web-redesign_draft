(function(){// Idaho's Library Hours (April 4, 2016) by Devin Becker based on Today's Library Hours v.1 (March 30, 2011) by Matthew Reidsma, reidsmam@gvsu.edu
// Released under the GPL: https://www.gnu.org/licenses/gpl.html
//

// Configuration:
// ------------------------------------------------------------------

// Enter base times for your library

	var base = "Open 24 Hours";
	var baseFri = "Open 12am &#8211; 8pm ";
	var baseSat	= "Open 10am &#8211; 6pm";
	var baseSun	= "Open 10am - Friday";
	var baseSummerWkday = "Open 7am &#8211; 7pm";
	var baseSummerWkend = "Open 10am &#8211; 6pm";
	var baseTgWkday = "Open 8am &#8211; 8pm";
	var baseTgWkend = "Open 10am &#8211; 6pm";
	var baseXmasWkday = "Open 8am &#8211; 6pm";
	var baseXmasWkend = "Open 10am &#8211; 6pm";
	var baseOneOff = "Open 8am &#8211; 5pm";
	var baseTwoOff = "Open 8am &#8211; 5pm";


	// Establishing date strings (for inclusion in diffHours array) and day numbers for if/else statements
	var currentDate = new Date()
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	if (month < 10) { month = '0' + month; }
	if (day < 10) { day = '0' + day; }
	var dateNumber = ("" + month + day);
	var dayNumber = currentDate.getDay();
	
	// Special "one off" dates that don't fit other patterns
	var oneOff = ["0511"];
	var twoOff = ["0512"];
	
	// All dates with different hours, inlcuding winter dates, tg dates,xmas dates, and closed dates
	var diffHours = ["0902","1117","1118","1119","1120","1121","1123","1124","1215","1216","1217","1218","1219","1220","1221","1222","1223","1224","1225","1226","1227","1228","1229","1230","1231","0101","0102","0103","0104","0105","0106","0107","0108","0308","0309","0310","0311","0312","0313","0314","0315","0316","0511","0512","0529","0704"];

	// All  tg dates and spring break dates with different hours
	var tgdiff = ["1117","1118","1119","1120","1121","1123","1124","0308","0309","0310","0311","0312","0313","0314","0315","0316"];
	// All  xmas dates (and January Winter Break Dates) with different hours
	var xmasdiff = ["1215","1216","1217","1218","1219","1220","1221","1222","1223","1226","1227","1228","1229","1230","0102","0103","0104","0105","0106","0107","0108"];

	//All closed dates
	var closedUp = ["0902","1122","1224","1225","1231", "0101","0527","0704"];

//Spring semester hours
	if(oneOff.indexOf(dateNumber)==0) 
	{
	var libhours = baseOneOff;
	  
	}
	else if(twoOff.indexOf(dateNumber)==0) 
	{
	var libhours = baseTwoOff;
	  
	}	
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 101 && Number(dateNumber) < 514) {
	//Mon-Thur
			if (dayNumber > 0 && dayNumber < 5){
				   	var libhours = base;
					  
			}
	//Friday
			else if (dayNumber == 5 ){
				 	var libhours = baseFri;
					  
			}
	//Saturday		
			else if (dayNumber == 6 ){
				   	var libhours = baseSat;
					  
			}
	//Sunday	
			else if (dayNumber == 0 ){
				    var libhours = baseSun;
					  
			}
	//Error
			else {
					var libhours = "" ;
					  
			}
		}
//Fall semester hours
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 820 && Number(dateNumber) < 1217) {
	//Mon-Thur
			if (dayNumber > 0 && dayNumber < 5){
				   	var libhours = base;
					  
			}
	//Friday
			else if (dayNumber == 5 ){
				 	var libhours = baseFri;
					  
			}
	//Saturday		
			else if (dayNumber == 6 ){
				   	var libhours = baseSat;
					  
			}
	//Sunday	
			else if (dayNumber == 0 ){
				    var libhours = baseSun;
					  
			}
	//Error
			else {
					var libhours = "" ;
					  
			}
		}
//Summer hours
	else if(diffHours.indexOf(dateNumber)==-1 && Number(dateNumber) > 513 && Number(dateNumber) < 819) {
	//Summer Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = baseSummerWkday;
					  
			}
	//Summer Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = baseSummerWkend;
					  
			}
	//Error
			else {
					var libhours = "" ;
					  
			}
		}
//Thanksgiving/SpringBreak/WinterBreak hours (if not in xmas or closed dates ...)
	else if(closedUp.indexOf(dateNumber)==-1 && xmasdiff.indexOf(dateNumber)==-1) {
	//Thanksgiving/SpringBreak/WinterBreak Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = baseTgWkday;
					  
			}
	//Thanksgiving/SpringBreak/WinterBreak Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = baseTgWkend;
					  
			}
	//Error
			else {
					var libhours = "" ;
					  
			}
		}
//Xmas hours(if not in thanksgiving or closed dates ...)
	else if(closedUp.indexOf(dateNumber)==-1 && tgdiff.indexOf(dateNumber)==-1) {
	//Xmas Weekday
			if (dayNumber > 0 && dayNumber < 6){
				   	var libhours = baseXmasWkday;
					  
			}
	//Xmas Weekend		
			else if (dayNumber == 6 || dayNumber == 0){
				   	var libhours = baseXmasWkend;
					  
			}
	//Error
			else {
					var libhours = "" ;
					  
			}
		}		

		
		
		//Closed dates
	else{
	var libhours = "Closed today.";
	  
	}
	document.getElementById("timedisp").innerHTML = libhours;
		
	
})();