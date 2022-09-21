const hamEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".navMenu");

hamEl.addEventListener("click", function () {
  hamEl.classList.toggle("active");
  navMenuEl.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach(function (n) {
  n.addEventListener("click", () => {
    hamEl.classList.remove("active");
    navMenuEl.classList.remove("active");
  });
});
