const text = "sudo write code & ";

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

    typewriter.textContent += text.charAt(i);
  }
}
typeWriterAnime();
