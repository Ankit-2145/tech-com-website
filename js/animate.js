// Text Change Animation

const spanElement = document.getElementById("change");
const texts = ["Connect.", "Learn.", "Collaborate."];
let currentIndex = 0;

function changeText() {
  spanElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 1000);
