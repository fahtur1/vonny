function popUp() {
  var popup = document.getElementById("hbd");
  popup.classList.toggle("show");
}

window.addEventListener("load", (event) => {
  var i = 0;
  var txt = "Happy Birthday Vonny! :)";
  var speed = 250;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("hbd").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  function displayclock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs > 12) {
    }

    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
  }

  typeWriter();
  setInterval(displayclock, 500);
});
