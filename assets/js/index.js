var swiper1 = new Swiper(".swiperArrivals", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 4 },
  },
});


var swiper2 = new Swiper(".swiperCat", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
  },
});
