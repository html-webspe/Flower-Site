
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

//====================  <!-- Fixed -->========================//
const topOffset = document.querySelector('.wrapper');

const positionFixed = (element, poinst) => {
   window.addEventListener('scroll', () => {
      let scrollDistens = window.scrollY;

      const headerHeight = document.getElementById(element).offsetHeight;


      const scrollPos = poinst,
         elements = document.getElementById(element);

      if (scrollDistens >= scrollPos) {
         elements.classList.add('fixed');
         topOffset.style.paddingTop = `${headerHeight}px`;
      } else {
         elements.classList.remove('fixed');
         topOffset.style.paddingTop = null;
      }
   });
}
//====================  <!-- Header-Fixed -->========================//
positionFixed('header', 1)
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
   });
   swiperNext.addEventListener('click', () => {
      categorySLider.slideNext();
   });


   /*====================   FORM DROP  ====================*/

   document.querySelector('.search__form-arrow').addEventListener('click', formToggle)

   function formToggle() {
      this.parentElement.classList.toggle('is-active');
      this.classList.toggle('is-active');
      $(".dropdawn-form__item-list").getNiceScroll().resize();
   }

}


/*==================== FAVORITES ====================*/
document.querySelectorAll(".product__favorite").forEach((item) =>
   item.addEventListener('click', () => {
      if (item.classList.contains('icon-favorites')) {
         item.classList.remove('icon-favorites');
         item.classList.add('icon-favorite-add');
      } else {
         item.classList.add('icon-favorites');
         item.classList.remove('icon-favorite-add');
      }
   })
)
/*==================== //FAVORITES ====================*/
/*====================   CARD SLIDER  ====================*/
let cardSlider = new Swiper('.slider-block', {
   //effect: "fade",
});
const sliderNavItem = document.querySelectorAll('.slider-nav__item');

sliderNavItem.forEach((el, index) => {
   el.setAttribute('data-index', index);

   el.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      cardSlider.slideTo(index);

      document.querySelectorAll('.slider-nav__item').forEach((e) => {
         e.classList.remove('active');
      })
      el.classList.add('active');
   });
})
/*====================   NiceScroll  ====================*/

$(".dropdawn-form__item-list").niceScroll({
   cursorcolor: "#777",
   cursorwidth: "3px",
   background: "",
   autohidemode: false,
   bouncescroll: false,
   cursorborderradius: "0px",
   scrollspeed: 100,
   mousescrollstep: 50,
   directionlockdeadzone: 0,
   cursorborder: "0px solid #fff",
});

/*====================   MAP  ====================*/

let center = [48.8866527839977, 2.34310679732974];

function init() {
   let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
   });
}
ymaps.ready(init);