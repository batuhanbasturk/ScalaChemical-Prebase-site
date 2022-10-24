const bar = document.querySelector("#bar");
const menu = document.querySelector("#navbar-sticky");
const hiddenEl = document.querySelectorAll(".no-vis");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
hiddenEl.forEach((el) => observer.observe(el));

bar.addEventListener("click", (e) => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
