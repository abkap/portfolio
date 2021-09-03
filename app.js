const text = "sudo write code & ";
var blinkerTime = 500;
var cursorActive = true;
var typewriter = document.querySelector(".typewriter-anime");
const hamburger = document.querySelector(".hamburger");
const themeButton = document.querySelector(".img-div");
const themeButtonImg = document.querySelector("#theme-icon");
const card = document.querySelectorAll(".div-a");
var currentTheme = "dark";
const root = document.querySelector(":root");
isOptionActive = false;
const aTag = document.querySelectorAll("a");

const main = document.querySelector("main");

const optionEnable = document.querySelector(".option-enable");
var isAnimateBottomEnabled = false;
var isAnimateTopEnabled = false;
var burger = document.getElementById("burger");

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
      text.substring(0, i) + "<span class='blinker'>_</span>";
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
// theme switcher
themeButton.addEventListener("click", () => {
  if (currentTheme == "dark") {
    /* 
    --blog-color: #3b5ed7;
    --bg-color: #2c2c30;
    --card-color1: #373944;
    --card-color2: #5b5d67;
    */
    root.style.setProperty("--bg-color", "#B3C1F2");
    themeButtonImg.src = "./icons/sun.svg";

    root.style.setProperty("--card-color1", "#C7D3FF");
    root.style.setProperty("--card-color2", "#A7B4E4");
    root.style.setProperty("--font-color", "#5D6CA3");
    root.style.setProperty("--terminal-color", "#C7D3FF");
    hamburger.style.filter = "invert(1)";
    // set to light theme

    currentTheme = "light";
  } else if (currentTheme == "light") {
    // set to dark theme
    root.style.setProperty("--bg-color", "#2c2c30");
    themeButtonImg.src = "./icons/moon.svg";

    root.style.setProperty("--card-color1", "#373944");
    root.style.setProperty("--card-color2", "#5b5d67");
    root.style.setProperty("--font-color", "white");
    root.style.setProperty("--terminal-color", "black");
    hamburger.style.filter = "invert(0)";

    currentTheme = "dark";
  }
});

// for smaller devices

aTag.forEach((item) => {
  item.addEventListener("click", () => {
    if (isOptionActive) {
      optionEnable.style.display = "none";
      burger.src = "./icons/hamburger.svg";

      isOptionActive = false;
    }
  });
});

hamburger.addEventListener("click", () => {
  if (optionEnable.style.display == "none")
    optionEnable.style.display = "initial";
  if (!isOptionActive) {
    // we enable here

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

    isOptionActive = false;
  }
});

// for 3d animation

if (!isMob()) {
  card.forEach((eachCard) => {
    eachCard.addEventListener("mousemove", (e) => {
      var midX = eachCard.offsetWidth / 2;
      var midY = eachCard.offsetHeight / 2;
      var offsetTop = eachCard.getBoundingClientRect().top + window.pageYOffset;
      var offsetLeft = eachCard.getBoundingClientRect().left;
      var posX = e.pageX;
      var posY = e.pageY;
      var moveY = offsetTop + midY - posY;
      var moveX = offsetLeft + midX - posX;
      const effectRatio = 10;

      eachCard.style.transform = `rotateX(${moveY / effectRatio}deg) rotateY(${
        -moveX / effectRatio
      }deg)`;
    });
    eachCard.addEventListener("mouseout", (e) => {
      setTimeout(() => {
        eachCard.style.transform = "rotateX(0deg)";
      }, 200);
    });
  });
}

// mobile && tablets
function isMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
