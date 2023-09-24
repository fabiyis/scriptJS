const btn = document.querySelector(".options");
const links = document.querySelector(".links");
const open = document.querySelector(".open");

btn.addEventListener("click", () => {
  links.classList.toggle("open");
});