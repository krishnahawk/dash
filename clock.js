// Timer functionality
var minutes = $( '#set-time' ).val();


var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
    document.getElementById("timer").innerHTML = "Timer Stopped";
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("time"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

    $(document).keypress(function(e) {
        if(e.which == 32) {
            console.log('5 minutes');
            minutes = 5;
            target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
            getCountdown();
        }
      });


// jquery click event
$( '#5button' ).click( function() {
    console.log('5 minutes');
    minutes = 5;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
});
$( '#10button' ).click( function() {
    console.log('10 minutes');
    minutes = 10;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
});
$( '#15button' ).click( function() {
    console.log('15 minutes');
    minutes = 15;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
});
$( '#20button' ).click( function() {
    console.log('20 minutes');
    minutes = 20;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
});
$( '#30button' ).click( function() {
    console.log('30 minutes');
    minutes = 30;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
});

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

    display_hours = "<span>" + hours + "</span>:";
    display_minutes = "<span>" + minutes + "</span>:";
    display_seconds = "<span>" + seconds + "</span>";

    if (hours == 0) {
        display_hours = '';
    }

	// format countdown string + set tag value
	countdown.innerHTML = display_hours + display_minutes + display_seconds; 
  
}
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}