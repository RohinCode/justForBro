const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
let number = 0;
flipBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  card.classList.add("flip");
});
card.addEventListener("click", () => {
  if (card.classList.contains("flip")) {
    back.innerHTML = `<h1>باز کیر شدی🗿</h1>
    این دفعه کلیک کن.`;
    if (number == 1) {
      back.innerHTML = `<h1>بازم کیر شدی🗿</h1>
    این دفعه کلیک کن. دفعه‌ی اخرههه`;
  }

  if (number == 2) {
      back.innerHTML = `<h2>لازمه بگم بازم کیر شدی؟🗿</h2>
   این دفعه کلیک کن. این دفعه واقعا اخریه.`;

      }

  if (number == 3) {
      back.innerHTML = `<h2>چرا اعتماد کردی؟</h2>
    من چندبار کیرت کردم اما تو باز هم کلیک کردی🥹. این دفعه کلیک کن.`;

      }

    if (number >= 4) {
      front.innerHTML = `<h1>نه واقعا بدون شوخی تولدت مبارک🤝</h1>
        <p>امیدوارم امسال سال بهتری داشته باشی</p>
        <p>23 شهریور سال 1405</p>`;
         back.innerHTML = `<h1>پایان</h1>`;
      card.classList.remove("flip");
    }
  }
  number++
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
