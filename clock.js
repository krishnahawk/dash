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

function startTimer(duration) {
    if (!duration) {
        minutes = 10;
    }
    minutes = duration;
    target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
    getCountdown();
}
$(document).keypress(function(e) {
    if(e.which == 49) {
        document.getElementById("10button").classList.add("lit");
        document.getElementById("20button").classList.remove("lit");
        document.getElementById("30button").classList.remove("lit");
        document.getElementById("40button").classList.remove("lit");
        document.getElementById("50button").classList.remove("lit");
        startTimer(10);
    }
});

$(document).keypress(function(e) {
    if(e.which == 50) {
        document.getElementById("10button").classList.remove("lit");
        document.getElementById("20button").classList.add("lit");
        document.getElementById("30button").classList.remove("lit");
        document.getElementById("40button").classList.remove("lit");
        document.getElementById("50button").classList.remove("lit");
        startTimer(20);
    }
});

$(document).keypress(function(e) {
    if(e.which == 51) {
        document.getElementById("10button").classList.remove("lit");
        document.getElementById("20button").classList.remove("lit");
        document.getElementById("30button").classList.add("lit");
        document.getElementById("40button").classList.remove("lit");
        document.getElementById("50button").classList.remove("lit");
        startTimer(30);
    }
});

$(document).keypress(function(e) {
    if(e.which == 52) {
        document.getElementById("10button").classList.remove("lit");
        document.getElementById("20button").classList.remove("lit");
        document.getElementById("30button").classList.remove("lit");
        document.getElementById("40button").classList.add("lit");
        document.getElementById("50button").classList.remove("lit");
        startTimer(40);
    }
});

$(document).keypress(function(e) {
    if(e.which == 53) {
        document.getElementById("10button").classList.remove("lit");
        document.getElementById("20button").classList.remove("lit");
        document.getElementById("30button").classList.remove("lit");
        document.getElementById("40button").classList.remove("lit");
        document.getElementById("50button").classList.add("lit");
        startTimer(50);
    }
});

// jquery click event
$( '#10button' ).click( function() {
    startTimer(10);
});
$( '#20button' ).click( function() {
    startTimer(20);
});
$( '#30button' ).click( function() {
    startTimer(30);
});
$( '#40button' ).click( function() {
    startTimer(40);
});
$( '#50button' ).click( function() {
    startTimer(50);
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