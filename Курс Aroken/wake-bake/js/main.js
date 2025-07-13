(function() {

  // ----------САМОСТОЯТЕЛЬНАЯ РАБОТА ----------------

const burger = document.querySelector('.burger-icon');
const body = document.querySelector('.body');
const nav = document.querySelector('.nav__list')

burger.addEventListener('click', () => {
  body.classList.toggle('body--opened-menu')
})

nav.addEventListener('click', () => {
  body.classList.remove('body--opened-menu')
})

//--------------РАБОТА ПРЕПОДАВАТЕЛЯ--------------------

  // document.addEventListener('click', burgerInit);

  // function burgerInit(e) {

  //   const burgerIcon = e.target.closest('.burger-icon');
  //   const burgerNavLink = e.target.closest('.nav__link');

  //   if (!burgerIcon && !burgerNavLink) return;

  //   if (document.documentElement.clientWidth > 900) return;

  //   if (!document.body.classList.contains('body--opened-menu')) {
  //     document.body.classList.add('body--opened-menu')
  //   } else {
  //     document.body.classList.remove('body--opened-menu')
  //   }
  // }

})()





