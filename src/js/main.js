const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    480: {
      slidesPerView: 2,

    },
    992: {
      slidesPerView: 3,

    },

    1200: {
      slidesPerView: 4,

    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
