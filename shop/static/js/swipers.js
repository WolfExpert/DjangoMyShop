
const swiper__banner1 = new Swiper(".banners-container .swiper-container", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 2000,
  pagination: {
    el: ".banners-container .swiper-pagination",
    clickable: true,
  },
  mousewheelControl: false,
  keyboardControl: false,
});

const swiper__categories = new Swiper(".categories", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: ".slide-arrow-right",
    prevEl: ".slide-arrow-left",
  },
});

const swiper__promotions = new Swiper(".promotions", {
  autoHeight: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".hot-promotions .slide-arrow-right",
    prevEl: ".hot-promotions .slide-arrow-left",
  },
  pagination: {
    el: ".promotions .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
  },
});

const swiper__daily = new Swiper(".daily-cards", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".daily-best .slide-arrow-right",
    prevEl: ".daily-best .slide-arrow-left",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  },
});
