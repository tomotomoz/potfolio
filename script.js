'use strict'

// nav
const nav = document.querySelector('.header__navArea');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function(){
  nav.classList.toggle('active');
  console.log(hamburgerMenu)
})

const navClick = document.querySelectorAll('nav > ul > li > a');

navClick.forEach((el)=>{
  el.addEventListener('click', function(){
    nav.classList.remove('active')
  }) 
})


// toTop
const toTop = document.querySelector('.toTop-btn-area');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  if(scrollY > 1000){
    toTop.classList.add('toTop')
  }else{
    toTop.classList.remove('toTop')
  }
  console.log(window.scrollY);
});

// toTop.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
//   console.log('Scroll to top');
// });


// / swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  effect: 'slide',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});