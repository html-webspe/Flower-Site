
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

/*==================== SHOW MENU ====================*/
const iconMenu = document.querySelector('.header-menu__icon');

if (iconMenu) {
   const menuBody = document.querySelector('.header-menu');

   iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   })
}

/*==================== CATEGORY__SLIDER ====================*/

const body = document.querySelector('body');

if (body.classList.contains('main-body')) {
   let categorySLider = new Swiper('.category__slider-container', {
      slidesPerView: 1,
      loop: true,
      observer: true,
      observeParents: true,
      breakpoints: {
         440: {
            slidesPerView: 2,
            spaceBetween: 30
         },
         768: {
            //slidesPerView: 'auto',
            slidesPerView: 2,
            spaceBetween: 50
         },
         900: {
            slidesPerView: 3,
            spaceBetween: 50
         },
         1180: {
            slidesPerView: 4,
            spaceBetween: 50
         },
         1700: {
            slidesPerView: 5,
            spaceBetween: 50
         }
      }
   })
   const swiperPrev = document.querySelector('.slider__button-prev');
   const swiperNext = document.querySelector('.slider__button-next');

   swiperPrev.addEventListener('click', () => {
      categorySLider.slidePrev();
   })
   swiperNext.addEventListener('click', () => {
      categorySLider.slideNext();
   })
}