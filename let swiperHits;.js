let swiperHits;
let swiperAuthor;
let swiperComposition;
let swiperPresents;
let swiperCheckout;


function resizeScrenn() {
   if ($(window).width() < 576.98) {
      let productItem = document.querySelectorAll('.product__item');
      let productWrapper = document.querySelectorAll('.product__wrapper')

      if ($(".main-page").length > 0) {
         document.querySelector('.product__hits-container').classList.add('swiper-container');
         document.querySelector('.product__author-container').classList.add('swiper-container');
         document.querySelector('.product__composition-container').classList.add('swiper-container');
         document.querySelector('.product__presents-container').classList.add('swiper-container');


         productWrapper.forEach((el) => {
            el.classList.add('swiper-wrapper');
         })
         productItem.forEach((el) => {
            el.classList.add('swiper-slide');
         })

         swiperHits = new Swiper('.product__hits-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })

         swiperAuthor = new Swiper('.product__author-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })
         swiperComposition = new Swiper('.product__composition-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })
         swiperPresents = new Swiper('.product__presents-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })

      }
      if ($(".page-checkout").length > 0) {
         document.querySelector('.product__checkout-container').classList.add('swiper-container');

         productWrapper.forEach((el) => {
            el.classList.add('swiper-wrapper');
         })
         productItem.forEach((el) => {
            el.classList.add('swiper-slide');
         })

         swiperCheckout = new Swiper('.product__checkout-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })
      }
      if ($(".page-card").length > 0) {
         document.querySelector('.product__hits-container').classList.add('swiper-container');

         productWrapper.forEach((el) => {
            el.classList.add('swiper-wrapper');
         })
         productItem.forEach((el) => {
            el.classList.add('swiper-slide');
         })

         swiperHits = new Swiper('.product__hits-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
         })
      }
   }
}

resizeScrenn();

$(window).resize(function () {
   resizeScrenn();
});
