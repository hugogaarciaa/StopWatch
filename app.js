var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timer = document.getElementById("timer");
var register = document.getElementById("register");
var timeList = document.getElementById("results");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var interval;

function startTimer() {
    if (stoptime) {
        stoptime = false;
        interval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (!stoptime) {
        stoptime = true;
        clearInterval(interval);
    }
}

function resetTimer() {
    stoptime = true;
    clearInterval(interval);
    hr = 0;
    min = 0;
    sec = 0;
    timer.innerHTML = "00:00:00";
}

function updateTimer() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
        }
    }
    var time = `${(hr < 10 ? '0' : '') + hr}:${(min < 10 ? '0' : '') + min}:${(sec < 10 ? '0' : '') + sec}`;
    timer.innerHTML = time;
}
function registerTime() {
    if (!stoptime) {
        var contenido = ""
        contenido += `<li>${timer.innerHTML}</li>`
        timeList.innerHTML += contenido;
    }

}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
register.addEventListener("click", registerTime);
