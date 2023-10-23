// hamburger menu
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

// eboard-carousel card functionality
const carousel = document.querySelectorAll(".eboard-carousel");
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

carousel.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
