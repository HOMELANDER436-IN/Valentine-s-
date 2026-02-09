const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const success = document.getElementById("success");
const message = document.getElementById("message");

const messages = [
  "Please 🥺",
  "Think again 💭",
  "Are you sure? 😢",
  "I’ll be very sad 💔",
  "Don’t break my heart 😭",
  "Just say yes already 💕",
  "Still no? 😏",
  "No escape 😈"
];

let attempt = 0;

/* Initial No button position */
noBtn.style.left = "50%";
noBtn.style.top = "50%";
noBtn.style.transform = "translate(-50%, -50%)";

function moveNoButton() {
  const container = document.querySelector(".buttons");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";

  message.textContent = messages[attempt % messages.length];
  attempt++;
}

/* Desktop + Mobile */
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  main.style.display = "none";
  success.style.display = "block";
});