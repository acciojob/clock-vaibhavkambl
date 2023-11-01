//your JS code here. If required.
function updateClock() {
      var now = new Date();
      var date = now.toDateString();
      var time = now.toLocaleTimeString();
      document.getElementById('timer').innerHTML = date + ', ' + time;
    }
    setInterval(updateClock, 1000);