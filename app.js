const text = "sudo write code & ";
var blinkerTime = 500;
var cursorActive = true;
var typewriter = document.querySelector(".typewriter-anime");
async function waitFor(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, time);
  });
}
console.log("working");
async function typeWriterAnime() {
  for (var i = 0; i < text.length; i++) {
    await waitFor(100);

    typewriter.innerHTML =
      text.substring(0, i) + "<span class='blinker'>|</span>";
  }
  animateCursor();
}
function animateCursor() {
  var animate = setInterval(() => {
    if (cursorActive) {
      document.querySelector(".blinker").style.opacity = 0;
      cursorActive = false;
    } else {
      document.querySelector(".blinker").style.opacity = 1;
      cursorActive = true;
    }
    console.log("st");
  }, blinkerTime);
}

typeWriterAnime();
