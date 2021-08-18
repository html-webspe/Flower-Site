


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)*/
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

//====================  <!-- Header-Fixed -->========================//
//====================  <!-- Up -->========================//

/*positionFixed('scroll-up', 200)
const up = document.getElementById('scroll-up');
up.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});
*/
//====================  <!-- Up -->========================//

//====================  <!-- GoTO -->  ========================//
const links = document.querySelectorAll('.scroll-to');

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', (e) => {
      e.preventDefault();

      const blockId = e.target.getAttribute('href').substring(1);

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
//====================  <!-- GoTO -->  ========================//







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

/*
let sliderProduct = new Swiper('.product__slider-container', {
   slidesPerView: 'auto',
   spaceBetween: 15,
   loop: true,
   breakpoints: {
      768: {
         spaceBetween: 50
      }
   },
});

document.querySelectorAll('.dropdawn-form__item-list').forEach(el => {
   new SimpleBar(el)
});

*/
/*   FORM DOWN  */
let formDown = function () {
   let formHeader = document.querySelectorAll('.search__form-item');
   let formArrow = document.querySelectorAll('.search__form-arrow');

   formArrow.forEach(item => {
      item.addEventListener('click', formToggle)
   });


   function formToggle() {
      this.parentElement.classList.toggle('is-active');
      this.classList.toggle('is-active');
   }
};

formDown();



/*   CARD SLIDER  */
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

