function loadPage(page) {
  window.location.href = `../pages/${page}.html`; // Chuyển hướng toàn trang
}

const images = [
  "../assets/image/bg-5.jpg",
  "../assets/image/bg-3.jpeg",
  "../assets/image/bg-4.jpg",
  "../assets/image/bg-1.jpeg",
  "../assets/image/bg-2.jpg",
];

let currentIndex = 0;
const hero = document.querySelector(".hero");

function updateBackground() {
  hero.style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

function prevBackground() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

// Tự động chuyển ảnh sau 5 giây
setInterval(nextBackground, 5000);

// Kéo ngang để thay đổi ảnh
let startX = 0;
hero.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

hero.addEventListener("mouseup", (e) => {
  let endX = e.clientX;
  if (startX > endX + 50) {
    nextBackground();
  } else if (startX < endX - 50) {
    prevBackground();
  }
});

// Cập nhật ảnh nền ban đầu
updateBackground();
