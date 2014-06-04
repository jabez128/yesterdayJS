#yesterdayJS 0.0.0-- tiny descent JavaScript Date library

##Usage  

import yesterday.js in your html 

	<script tye='text/javascript' src='./yesterday'></script>

Init a yesterday global object
	
	var y = new Yesterday();

call the useful method on y

	y.today(); // today date
	y.yesterday(); //yesterday date
	y.tomorrow(); //tomorrow date
	y.future(num); //date of future 'num' days
	y.past(num); //date of past 'num' days
	y.holiday(); //'我好想dayday都是Saturdayヾ(^ω^*)'

> to be continue