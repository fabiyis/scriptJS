const btn = document.querySelector(".options");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
  links.classList.toggle("links");
});