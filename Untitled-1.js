


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






