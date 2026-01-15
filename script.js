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
  { title: "Hey Lynnie 💕", text: "Hi goofball.\nThe one who trips on air.\n\nClick 💗" },
  { title: "About You 🐠", text: "You forget things in 3 seconds,\nlike a goldfish.\n\nBut I never forget you." },
  { title: "Why You 💖", text: "You make me laugh unexpectedly.\nYou make ordinary days lighter." },
  { title: "Memories We Made 📸", text: "Some of my favourite moments with you." },
  { title: "One Last Thing 💌", text: "So I was wondering…" },
  { title: "Lynnie 💘", text: "Will you be my Valentine?" }
];

const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const galleryEl = document.getElementById("gallery");

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

function nextPage() {
  if (typing) return;
  page++;
  if (page >= pages.length) return;

  titleEl.innerHTML = pages[page].title;
  galleryEl.classList.add("hidden");

  typeText(pages[page].text);

  if (pages[page].title.includes("Memories")) {
    galleryEl.classList.remove("hidden");
  }

  if (page === pages.length - 1) {
    document.getElementById("buttons").classList.remove("hidden");
  }
}

/* Initial page */
titleEl.innerHTML = pages[0].title;
typeText(pages[0].text);

/* 💖 Yes button + music fade-in */
function yesAnswer(e) {
  e.stopPropagation();
  const response = document.getElementById("response");
  response.innerHTML = "YAY 😍 Happy Valentine’s Day, goofball 💕";

  const music = document.getElementById("bgm");
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
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});
