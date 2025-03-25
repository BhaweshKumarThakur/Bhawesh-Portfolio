window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 50);
})

const hamburger = document.querySelector(".hamburger");
const hamburgerPopup = document.querySelector(".hamburger-popup");
let isOpen = false;

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  hamburgerPopup.style.transform = isOpen ? "translateX(0)" : "translateX(100vw)";
  if (isOpen) {
    hamburger.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});