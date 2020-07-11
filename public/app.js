var msec = 0;
var sec = 0;
var mints = 0;
var hours = 0;
var msecHeading = document.getElementById('milisec');
var secHeading = document.getElementById('sec');
var mintsHeading = document.getElementById('mints');
var hoursHeading = document.getElementById('hours');
var interval, StartBtn, StopBtn, ResetBtn;

function timer() {
    msec++;
    msecHeading.innerHTML = msec + " milisec";
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec + " sec";
        msec = 0;
        if (sec >= 60) {
            mints++;
            mintsHeading.innerHTML = mints + " mints";
            sec = 0;
            if (mints >= 60) {
                hours++;
                hoursHeading.innerHTML = hours + " hours";
                mints = 0;
            }
        }
    }
}

function startwatch() {
    interval = setInterval(timer, 10);
    StartBtn = document.getElementById('start').disabled = true;
    StopBtn = document.getElementById('stop').disabled = false;
    ResetBtn = document.getElementById('reset').disabled = false
}

function stopwatch() {
    clearInterval(interval);
    StopBtn = document.getElementById('stop').disabled = true;
    StartBtn = document.getElementById('start').disabled = false;
    ResetBtn = document.getElementById('reset').disabled = false;

}

function resetwatch() {
    msec = sec = mints = hours = '00';
    msecHeading.innerHTML = msec + " milisec";
    secHeading.innerHTML = sec + " sec";
    mintsHeading.innerHTML = mints + " mints";
    hoursHeading.innerHTML = hours + " hours";
    clearInterval(interval);
    ResetBtn = document.getElementById('reset').disabled = true;
    StopBtn = document.getElementById('stop').disabled = false;
    StartBtn = document.getElementById('start').disabled = false;
}