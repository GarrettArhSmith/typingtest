
var seconds = 60;

setInterval(function() {
  if (on && seconds > 0) {
    seconds--;
    document.getElementById('time').innerHTML = seconds + "s";
  }else if (seconds <= 0) {
    wpm = correct/5
    document.getElementById('wpm').innerHTML = "WPM: " + wpm;
  }
}, 1000);
