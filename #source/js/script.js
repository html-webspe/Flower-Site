
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


if (document.querySelector('.category__slider-container')) {
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
   /*
      document.querySelector('.search__form-arrow').addEventListener('click', formToggle)
   
      function formToggle() {
         this.parentElement.classList.toggle('is-active');
         this.classList.toggle('is-active');
         $(".dropdawn-form__item-list").getNiceScroll().resize();
      }*/

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
/*
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
*/
/*====================   MAP  ====================*/
/*
let center = [48.8866527839977, 2.34310679732974];

function init() {
   let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
   });
}
ymaps.ready(init);
*/
/*====================   RENG  ====================*/
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
   noUiSlider.create(rangeSlider, {
      start: [0, 75000],
      connect: true,
      step: 1,
      range: {
         'min': [0],
         'max': [75000]
      },
      handleAttributes: [
         { 'class': 'ff' },
         { 'class': 'gg' },
      ],
   });

   const input0 = document.getElementById('input-0');
   const input1 = document.getElementById('input-1');
   const inputs = [input0, input1];

   rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
   });

   const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      console.log(arr);

      rangeSlider.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         console.log(index);
         setRangeSlider(index, e.currentTarget.value);
      });
   });
}

/*====================   Product Slider  ====================*/

let swiperHits;
let swiperAuthor;
let swiperComposition;
let swiperPresents;
let swiperCheckout;



function resizeScrenn() {
   if ($(window).width() < 576.98) {
      if ($(".main-page").length > 0) {
         document.querySelector('.product__hits-container').classList.add('swiper-container');
         document.querySelector('.product__author-container').classList.add('swiper-container');
         document.querySelector('.product__composition-container').classList.add('swiper-container');
         document.querySelector('.product__presents-container').classList.add('swiper-container');



         let productItem = document.querySelectorAll('.product__item');
         let productWrapper = document.querySelectorAll('.product__wrapper')

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
         let productItem = document.querySelectorAll('.product__item');
         let productWrapper = document.querySelectorAll('.product__wrapper');

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
   }
}

resizeScrenn();

$(window).resize(function () {
   resizeScrenn();
});

/*====================   deliveryAnimation  ====================*/

if ($(".delivery__body-item--animation").length > 0) {
   const scrollItems = document.querySelector('.delivery__body-item--animation');

   const scrollAnimation = () => {
      let windowCenter = (window.innerHeight / 2) + window.scrollY;
      let scrollOffset = scrollItems.offsetTop + (scrollItems.offsetHeight / 2);
      if (windowCenter >= scrollOffset) {
         scrollItems.classList.add('active');
      } else {
         scrollItems.classList.remove('active');
      }
   };

   scrollAnimation();
   window.addEventListener('scroll', () => {
      scrollAnimation();
   });
}

/*====================   Другой Получатель  ====================*/
let counter = 0;
let flag = 1;

$('.item-recipient__btn').click(function () {
   $(this).toggleClass("active")
   $(this).closest('.item-recipient__head').toggleClass("active")

   $('.item-recipient__drop-item').click(function () {

      $('.item-recipient__drop-item').css('border', '1px solid transparent');
      $('.item-recipient__drop-item').removeClass('icon-check')
      $(this).css('border', '1px solid red');
      $(this).addClass('icon-check')

      $('.item-recipient__recipient').html($(this).text());
      $('.item-recipient__recipient').css('color', '');

      $(this).closest('.item-recipient__head').removeClass("active");
      $(this).closest('.item-recipient__head').find('.item-recipient__btn').removeClass("active");

      if ($(this).hasClass('another')) {
         if (counter <= 0) {
            $(this).closest('.item-recipient').find(".item-recipient__body").append('<div class="item-recipient__input"><input type="text" placeholder="Имя получателя"></div> <div class="item-recipient__input"><input type="text" placeholder="Тел. получателя"></div>');
            counter++;
            flag = 0;
         }
      } else {
         if (flag <= 0) {
            $('.item-recipient .item-recipient__input').slice(-2).remove();
            flag++;
            counter = 0;
         }
      }
   });

});

if ($('.item-recipient__recipient').html() == '') {
   $('.item-recipient__recipient').html('Получатель не указан');
   $('.item-recipient__recipient').css('color', '#FF0000');
}



$('.item-recipient__input-time').click(function () {
   $(this).closest('.basket__item-recipient').toggleClass("active")

   $('.time-order__time').click(function () {
      $('.item-recipient__input-time input').val($(this).text());

      $(this).closest('.basket__item-recipient').removeClass("active");
   });
});



const tabsBtn = document.querySelectorAll(".time-order__head-item");
const tabsItems = document.querySelectorAll(".time-order__body-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }
   });
}


$('.select-form__group--filters').click(function () {
   $(this).toggleClass("active")
})