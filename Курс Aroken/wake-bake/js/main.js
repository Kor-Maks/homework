(function () { // записываем переменные локально!

  // ========================== BURGER ======================

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


// ======================= MODAL================================

  const modal = document.querySelector('.modal');
  const openModal = document.querySelector('.about__img-button');

  openModal.addEventListener('click', open);
  
  function open(e) {
    e.preventDefault();
    document.body.classList.toggle('body--opened-modal');
  }
  
  modal.addEventListener('click', closeModal);
  
  function closeModal(e) {
    e.preventDefault();

    const target = e.target;
    
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) { 
      document.body.classList.remove('body--opened-modal');
    }
  }

  // ===================== TABS =====================
  
  const tabControls = document.querySelector('.tab__controls');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    
    const tabControl = e.target.closest('.tab__controls-link');
    
    if (!tabControl) return;
    e.preventDefault(); 
    if (tabControl.classList.contains('tab__controls-link--active')) return;
    
    const tabContentId = tabControl.getAttribute('href'); 
    const tabContent = document.querySelector(tabContentId); 
    const activeContent = document.querySelector('.tab-content--show');
    const activeControl = document.querySelector('.tab__controls-link--active')


    activeContent.classList.remove('tab-content--show');
    tabContent.classList.add('tab-content--show')

    activeControl.classList.remove('tab__controls-link--active');
    tabControl.classList.add('tab__controls-link--active')
  }

  // ------------------ ACCORDION -----------------------

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    
    !!!!!!!!!!!!!!// document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';
    
    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
      
      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
          accordionOpenedItem.classList.remove('accordion-list__item--opened');
          accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');
      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
      else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
  
})()
