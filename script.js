//Calculates the time remaining between an end date and the current date.
function getTimeRemaining(endtime){ 
    var t = Date.parse(endtime) - Date.parse(new Date()); 
    var seconds = Math.floor((t / 1000) % 60); 
    var minutes = Math.floor((t / 1000 /60) % 60); 
    var hours = Math.floor((t / (1000 * 60 *60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    debugger;
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

//The initializeClock function is called once to immediately update the clock, and then a setInterval is used to call the updateClock function every second to keep the clock updated in real-time.
function initializeClock(id, endtime){
    var clock = document.getElementById(id); 
    var daysSpan = clock.querySelector('.days'); 
    var hoursSpan = clock.querySelector('.hours'); 
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    //Display a real-time clock that counts down to a specific date.
    function updateClock(){ 
        var t = getTimeRemaining(endtime); 
        daysSpan.innerHTML = t.days; 
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2); 
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total <=0){
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// Set the deadline for the countdown by adding 9 days (9 * 24 * 60 * 60 * 1000 milliseconds) to the current date and time.
var deadline = new Date(Date.parse(new Date()) + 9 * 24 * 60 *60 *1000); 

// Initialize the clock with the ID 'clockdiv' and the calculated deadline.
initializeClock('clockdiv', deadline);