const text = "sudo write code & ";
var blinkerTime = 500;
var cursorActive = true;
var typewriter = document.querySelector(".typewriter-anime");
const hamburger = document.querySelector(".hamburger");

isOptionActive = false;
const aTag = document.querySelectorAll("a");

const main = document.querySelector("main");

async function waitFor(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, time);
  });
}

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
  }, blinkerTime);
}

typeWriterAnime();

// for smaller devices
const optionEnable = document.querySelector(".option-enable");
var isAnimateBottomEnabled = false;
var isAnimateTopEnabled = false;
var burger = document.getElementById("burger");

aTag.forEach((item) => {
  item.addEventListener("click", () => {
    if (isOptionActive) {
      optionEnable.style.display = "none";
      isOptionActive = false;
    }
  });
});

hamburger.addEventListener("click", () => {
  if (optionEnable.style.display == "none")
    optionEnable.style.display = "initial";
  if (!isOptionActive) {
    // we enable here
    // optionEnable.style.display = "block";
    isOptionActive = true;

    burger.src = "./icons/close.svg";

    if (isAnimateTopEnabled) {
      optionEnable.classList.remove("animateToTopClass");
      isAnimateTopEnabled = false;
    }
    optionEnable.classList.add("animateToBottomClass");
    isAnimateBottomEnabled = true;
  } else {
    // disable here
    burger.src = "./icons/hamburger.svg";
    if (isAnimateBottomEnabled) {
      optionEnable.classList.remove("animateToBottomClass");
      isAnimateBottomEnabled = false;
    }
    optionEnable.classList.add("animateToTopClass");
    isAnimateTopEnabled = true;

    // optionEnable.style.display = "none";
    isOptionActive = false;
  }
  // remove
});
