const body = document.body;

const lightDarkBtn = document.getElementById("light-dark");
const items = document.getElementById("items");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("closeBtn");

const buttons = document.querySelectorAll("[data-carousel-button]");

menuBtn.addEventListener("click", () => {
  items.classList.toggle("hidden");
  closeBtn.classList.toggle("fa-bars");
  closeBtn.classList.toggle("fa-xmark");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector(".min-w-full:not(.hidden)");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    activeSlide.classList.add("hidden");
    slides.children[newIndex].classList.remove("hidden");
  });
});
