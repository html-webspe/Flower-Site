
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
      slidesPerView: 2,
      loop: true,
      observer: true,
      observeParents: true,
      spaceBetween: 15,
      breakpoints: {
         400: {
            slidesPerView: 3,
            spaceBetween: 30
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 40
         },
         900: {
            slidesPerView: 4,
            spaceBetween: 40
         },
         1180: {
            slidesPerView: 5,
            spaceBetween: 40
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

      rangeSlider.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         setRangeSlider(index, e.currentTarget.value);
      });
   });
}

/*====================   Product Slider  ====================*/

function resizeScrenn() {
   if ($(window).width() < 576.98) {
      let productItem = document.querySelectorAll('.product__item');
      let productWrapper = document.querySelectorAll('.product__wrapper')

      if ($(".product__container-slider").length > 0) {
         document.querySelector('.product__container-slider').classList.add('swiper-container');

         productWrapper.forEach((el) => {
            el.classList.add('swiper-wrapper');
         })
         productItem.forEach((el) => {
            el.classList.add('swiper-slide');
         })

         Swiper = new Swiper('.product__container-slider', {
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



const tabsBtn = document.querySelectorAll(".tab-item-nav");
const tabsItems = document.querySelectorAll(".tab-item-body");

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


$('.select-form__group--price').click(function () {
   $(this).closest('.select-form__group--filters').toggleClass("active");
   $(this).toggleClass("active");
   let f = $('#input-0').val();
   let g = $('#input-1').val();
   $(this).text(f + '-' + g + ' p');
});

$('.size-card__item ').click(function () {
   $('.size-card__item ').removeClass("active");
   $(this).addClass("active");
});



$('.sms-input:first-child').focus();

$('.sms-input').on('keydown', function (e) {
   let value = $(this).val();
   let len = value.length;
   let curTabIndex = parseInt($(this).attr('tabindex'));
   let nextTabIndex = curTabIndex + 1;
   let prevTabIndex = curTabIndex - 1;
   if (len > 0) {
      $(this).val(value.substr(0, 1));
      $('[tabindex=' + nextTabIndex + ']').focus();
   } else if (len == 0 && prevTabIndex !== 0) {
      $('[tabindex=' + prevTabIndex + ']').focus();
   }
});

$('.sms-input:last-child').on('keyup', function (e) {
   if ($(this).val() != '') {
      $('.signin-sms__wrap').addClass('done')
   }
})


$('.product__item-btn').click(function () {
   let productTitle = $(this).closest('.product__item').find('.product__title').text();
   let productPrice = $(this).closest('.product__item').find('.product__price').text();
   let productCount = $(this).closest('.product__item').find('.product__count-counter').text();

   $(this).closest('body').find('#quick-order').find('.quick-order__product-item--name').text(productTitle + ' - ' + productCount + 'шт');
});



//====================  <!-- Pagging -->  ========================//
$('.pagging-list li').click(function (e) {
   e.preventDefault();
   $('.pagging-list li').removeClass('active');
   $(this).addClass('active');
});

const length = $('.pagging-list li').length - 1;

$('.pagging__arrow-next').click(function (e) {
   e.preventDefault();
   $('.pagging-list li').each(function (index) {
      if ($(this).hasClass('active') && index != length) {
         $(this).removeClass('active').next('li').addClass('active');
         return false;
      } else if (index == length) {
         return false;
      }
   });
});
$('.pagging__arrow-prev').click(function (e) {
   e.preventDefault();

   $('.pagging-list li').each(function (index) {

      if ($(this).hasClass('active') && index != length) {
         $(this).removeClass('active').prev('li').addClass('active');
         return false;
      } else if (index == length) {
         $('.pagging-list li').removeClass('active')
         $(this).prev('li').addClass('active');
         return false;
      }
   });
});
//====================  <!-- Pagging -->  ========================//


//====================  Product-count ========================//
$('.icon-minus').click(function () {
   inc(this.parentNode, -1);
});
$('.icon-plus').click(function () {
   inc(this.parentNode, 1);


});
function inc(Obj, Val) {
   Obj = $(Obj).closest('.product__count').find('.product__count-counter');
   var val = parseInt(Obj.text());
   if (val == 1 && Val == -1) {
      return;
   };
   Obj.text(val + Val);
};

//====================  /Product-count ========================//

$(".scroll").niceScroll();