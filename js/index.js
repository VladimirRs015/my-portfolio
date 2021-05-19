const hamburgerContainer = document.querySelector(".hamburger-container");
const hamburger = document.querySelector("button.hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburgerContainer.addEventListener("click", (e) => {
  if (
    e.target.matches(".hamburger") ||
    e.target.matches(".hamburger-box") ||
    e.target.matches(".hamburger-container") ||
    e.target.matches(".hamburger-inner")
  ) {
    hamburger.classList.toggle("is-active");
    navmenu.classList.toggle("is-active");
  }
});
