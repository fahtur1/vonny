window.addEventListener("load", (event) => {
  var i = 0;
  var txt = "";
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

    if (hrs > 18 && hrs <= 24) {
      txt = "Selamat Malam Aull 🐱";
    } else if (hrs >= 0 && hrs <= 8) {
      txt = "Selamat Pagi Aull 🦄";
    } else if (hrs > 8 && hrs <= 13) {
      txt = "Selamat Siang Aull 🦁";
    } else if (hrs > 13 && hrs <= 18) {
      txt = "Selamat Sore Aull ✨";
    }

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


  setInterval(displayclock, 500);
  setTimeout(typeWriter, 3500);
});
