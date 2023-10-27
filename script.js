// sidebar functionality
const sidebar = document.querySelector(".sidebar");

const sideOpen = () => {
  sidebar.style.opacity = '1'
  sidebar.style.transform = 'translateX(-300px)';
}

const sideClose = () => {
  sidebar.style.opacity = '0'
  sidebar.style.transform = 'translateX(300px)'
}

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
