(function () { // записываем переменные локально!


  // Используем делегирование событий!
  document.addEventListener('click', burgerInit);  // по клику на документ будет выполнятся функця (burgerInit)

  function burgerInit(e) { // создаём функцию аргументом которой является событие (e)

    const burgerIcon = e.target.closest('.burger-icon'); // e.target.closest проверяет есть ли у данного элемента родитель с классом (.burger-icon)
    const burgerNavLink = e.target.closest('.nav__link');

    if (!burgerIcon && !burgerNavLink) return; // если не !burgerIcon и !burgerNavLink тогда return (возврат), если что-то используется тогда выполняется код дальше!

    if (document.documentElement.clientWidth > 900) return; // если ширина окна больше 900px то будет возврат(return) код дапльше не выполняется!

    if (!document.body.classList.contains('body--opened-menu')) { // если у .body нет класса .body--opened-menu то возвращается true и условие срабатывает
      document.body.classList.add('body--opened-menu') // код выполняется и у body добавляется класс .body--opened-menu
    } else {
      document.body.classList.remove('body--opened-menu') // в противном случае (если класс .body--opened-menu есть) он удаляется
    }
  }




  const modal = document.querySelector('.modal');
  const openModal = document.querySelector('.about__img-button');

  openModal.addEventListener('click', open);
  
  function open(e) {
    e.preventDefault(); // функция отменяет дефолтное поведение! 
    document.body.classList.toggle('body--opened-modal');
  }
  
  modal.addEventListener('click', closeModal);
  
  function closeModal(e) {
    e.preventDefault();

    const target = e.target;
    
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) { // проверяет имеетли элемент по которому мы кликнули или его родитель класс ('.modal__cancel') либо bvttn kb элемеент класс ('.modal')
      document.body.classList.remove('body--opened-modal');
    }
  }
})()
