/* 💕 Floating hearts */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

/* 📖 Pages */
let page = 0;
let typing = false;

const pages = [
  { title: "Hey Lynnie 💕", text: "Hi goofball\nYes, YOU.\n\nClick 💗" },
  { title: "About You 🌻", text: "You trip on air\nHave a goldfish memory\n\nYet somehow I adore every single thing about you." },
  { title: "Why You 💖", text: "You make me smile and laugh everytime I think of you\nYou are really supportive and caring for me" },
  { title: "Memories We Made 📸", text: "Some of my favourite moments with you below <3" },
  { title: "One Last Thing 💌", text: "So I was wondering…" },
  { title: "Lynnie 💘", text: "Lynnie, will you be my Valentine?" }
];

const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const galleryEl = document.getElementById("gallery");
const buttonsEl = document.getElementById("buttons");

/* Typing effect */
function typeText(text, i = 0) {
  typing = true;
  if (i === 0) textEl.innerHTML = "";
  if (i < text.length) {
    textEl.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    setTimeout(() => typeText(text, i + 1), 30);
  } else {
    typing = false;
  }
}

/* Render page */
function renderPage() {
  galleryEl.classList.add("hidden");
  buttonsEl.classList.add("hidden");

  titleEl.innerHTML = pages[page].title;
  typeText(pages[page].text);

  if (page === 3) {
    galleryEl.classList.remove("hidden");
  }

  if (page === pages.length - 1) {
    buttonsEl.classList.remove("hidden");
    enableNoButton();
  }
}

/* Next page on click */
function nextPage() {
  if (typing) return;
  if (page < pages.length - 1) {
    page++;
    renderPage();
  }
}

/* Initial load */
renderPage();

/* 💖 Yes button */
function yesAnswer(e) {
  e.stopPropagation();
  document.getElementById("response").innerHTML =
    "YAY 😍 Happy Valentine’s Day, goofball! See you soon babe💕";

  const music = document.getElementById("bgm");
  if (!music) return;

  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

/* 🙈 Impossible No button */
function enableNoButton() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  });
}
