window.onload = function() {
    var started = 0
    var seconds = 00
    var milis = 00
    var appendSeconds = document.getElementById("seconds") 
    var appendMilis = document.getElementById("mili")
    var button_start = document.getElementById("start")
    var button_stop = document.getElementById("stop")
    var button_reset = document.getElementById("reset")
    var Interval = 0

    button_start.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10);
        started = 1;
    }

    button_stop.onclick = function() {
        clearInterval(Interval);
        started = 0;
    }

    button_reset.onclick = function() {
        clearInterval(Interval)
        seconds = "00"
        milis = "00"
        appendSeconds.innerHTML = seconds
        appendMilis.innerHTML = milis
        started = 0;
    }

    function startTimer() {
        milis++;

        if(milis <= 9) {
            appendMilis.innerHTML = "0" + milis
        }

        if(milis > 9){
            appendMilis.innerHTML = milis
        }

        if(milis > 59){
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            milis = 0
            appendMilis.innerHTML = "0" + 0
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}