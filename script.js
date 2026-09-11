const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
flipBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  card.classList.add("flip");
});
card.addEventListener("click", () => {
  if (card.classList.contains("flip")) {

    card.classList.remove("flip");
  }
});

// چند ذره‌ی ساده برای حس جشن
const confetti = document.getElementById("confetti");
const colors = [
  "#d4af37",
  "#ffffff",
  "#2d67e2",
  "#ca1a1a",
  "#83ce0c",
  "#ce0c94",
];
for (let i = 0; i < 200; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDelay = Math.random() * 5 + "s";
  s.style.background = colors[i % colors.length];
  confetti.appendChild(s);
}
