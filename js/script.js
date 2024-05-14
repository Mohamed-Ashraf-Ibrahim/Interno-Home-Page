const navBtn = document.getElementById("nav_btn");
const navMenu = document.getElementById("nav_menu");
const stepBox = document.querySelector(".steps__step ");
const arrow = document.querySelector(".arrow");

// nav trigger
navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
});

// sections reveals
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 100,
});
// hero
sr.reveal(".hero__text", { origin: "top", distance: "100px" });
// steps
sr.reveal(".steps__step", { distance: "100px", interval: 300 });
// about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 800 });
//testimonial
sr.reveal(".testimonial__bg", { delay: 800 });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: 1000 });

// brands
sr.reveal(".brands__img", { delay: 600, distance: "100px", interval: 100 });

// work
sr.reveal(".work__title");
sr.reveal(".work__subtitle", { delay: 800 });
sr.reveal(".work__grid", { delay: 1000 });

//stats
sr.reveal(".stats");
sr.reveal(".stats__item", {
  distance: "100px",
  interval: 100,
});

// news
sr.reveal(".news__title");
sr.reveal(".news__subtitle", { delay: 800 });
sr.reveal(".news__item", {
  distance: "100px",
  interval: 100,
  delay: 1000,
});

// contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 800 });

// footer
sr.reveal(".footer__item", {
  distance: "100px",
  interval: 100,
});
