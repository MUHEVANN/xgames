const closeMenu = document.getElementById("close-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  listMenu = document.getElementById("menu");

if (toggleMenu) {
  toggleMenu.addEventListener("click", function () {
    listMenu.classList.add("show-menu");
  });
}
if (closeMenu) {
  closeMenu.addEventListener("click", function () {
    listMenu.classList.remove("show-menu");
  });
}

// scroll nav
const header = document.getElementById("header");
const logo = document.getElementById("logo");
window.addEventListener("scroll", function () {
  //   console.log(this.scrollY);
  if (this.scrollY >= 100) {
    header.classList.remove("absolute");
    header.classList.add("fixed");
    header.classList.add("bg-blue-600");
    header.classList.remove("top-[3rem]");
    header.classList.add("top-0");
    header.classList.add("py-4");
    header.classList.add("rounded-b-[25px]");
    logo.classList.remove("lg:w-full");
    logo.classList.add("lg:w-[120px]");
  } else {
    logo.classList.remove("lg:w-[120px]");
    logo.classList.add("lg:w-full");
    header.classList.remove("fixed");
    header.classList.remove("bg-blue-600");
    header.classList.add("absolute");
    header.classList.remove("top-0");
    header.classList.add("top-[3rem]");
    header.classList.remove("py-4");
  }
});

// Scroll Reveal
const sr = ScrollReveal({
  distance: "40px",
  delay: 200,
  opacity: 0,
  duration: 1800,
});

// Hero
sr.reveal(".title__hero1", { origin: "bottom" });
sr.reveal(".title__hero2", { origin: "bottom", delay: 400 });
sr.reveal(".description__hero", {
  origin: "bottom",
  duration: 2000,
  delay: 400,
});
sr.reveal(".form__hero", {
  origin: "bottom",
  duration: 2000,
  delay: 400,
});
sr.reveal(".img__hero", { distance: "0px", delay: 400 });

// Feature
const featureCard = document.querySelectorAll(".container__card");
featureCard.forEach((item, index) => {
  sr.reveal(item, { delay: 100 * index, viewFactor: 0.5 });
});

// Trending
const trendingCard = document.querySelectorAll(".trending__card");
trendingCard.forEach((item, index) => {
  sr.reveal(item, { delay: 100 * index, origin: "right", viewFactor: 0.5 });
});

// Trending
const mostCard = document.querySelectorAll(".most__card");
mostCard.forEach((item, index) => {
  sr.reveal(item, { delay: 100 * index, origin: "right", viewFactor: 0.5 });
});

// prodeuct detail
sr.reveal("#img-detail", { distance: "0px", delay: 400 });
sr.reveal(".title__detail", { distance: "40px", delay: 100 });
sr.reveal(".price__detail", { distance: "40px", delay: 200 });
sr.reveal(".desc__detail", { distance: "40px", delay: 300 });
sr.reveal(".form__detail", { distance: "40px", delay: 400 });

const detailCard = document.querySelectorAll(".card__detail");
console.log(detailCard);
detailCard.forEach((item, index) => {
  sr.reveal(item, { delay: 100 * index, origin: "right", viewFactor: 0.5 });
});
// shop label click

const buttonFilter = document.querySelectorAll(".btn__link");
buttonFilter.forEach((item) => {
  item.addEventListener("click", function () {
    buttonFilter.forEach((otherItem) => {
      otherItem.classList.remove("btn__active");
    });
    item.classList.add("btn__active");
  });
});

// product Detal
const btnReview = document.querySelectorAll(".btn__review");
const preview1 = document.getElementById("preview1");
const preview2 = document.getElementById("preview2");

btnReview.forEach((item) => {
  item.addEventListener("click", function () {
    btnReview.forEach((n) => {
      if (n.classList.contains("prev-active")) {
        n.classList.remove("prev-active");
      }
    });
    item.classList.add("prev-active");
    const id = item.getAttribute("data-id");
    if (id === "btn__desc") {
      preview1.classList.remove("hidden");
      preview2.classList.add("hidden");
    } else {
      preview1.classList.add("hidden");
      preview2.classList.remove("hidden");
    }
  });
});
