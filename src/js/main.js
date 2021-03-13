const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  lazy: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  /* pagination: {
    el: '.swiper-pagination',
  }, */

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 /*  scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});
