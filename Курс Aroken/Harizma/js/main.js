(function () {

  document.addEventListener('click', burgerInit);

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger__icon');

    if (!burgerIcon) return;
    if (document.documentElement.clientWidth > 1100) return;
    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    };
  };

  // ТАБЫ------------------------------------

  const tabs = document.querySelectorAll(".tab__controls-item");
  const descriptions = document.querySelectorAll(".gallery__param");
  const galleries = document.querySelectorAll(".tab-content");
  const tabActive = document.querySelectorAll('.tab__controls-link');
  const tabActive2 = document.querySelectorAll('.tab__controls-link-2');

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      // Убираем класс 'tab-content--show' у всех элементов
      tabs.forEach(t => t.classList.remove("tab-content--show"));
      descriptions.forEach(d => d.classList.remove("tab-content--show"));
      galleries.forEach(g => g.classList.remove("tab-content--show"));
      tabActive.forEach(a => a.classList.remove("tab__controls-link--active"));
      tabActive2.forEach(z => z.classList.remove("tab__controls-link--active-2"));

      // Добавляем класс 'tab-content--show' к активным элементам
      tab.classList.add("tab-content--show");
      document.querySelector(`.gallery__param[data-tab="${target}"]`).classList.add("tab-content--show");
      document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add("tab-content--show");
      document.querySelector(`.tab__controls-link[data-tab="${target}"]`).classList.add("tab__controls-link--active");
      document.querySelector(`.tab__controls-link-2[data-tab="${target}"]`).classList.add("tab__controls-link--active-2");
    });
  });

  

  // Галерея ------------------------------

  new Swiper('.gallery__slider1', {
    slidesPerView: 1,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '  из ' + '<span class="' + totalClass + '"></span>';
      },
    },
    

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    thumbs: {
      swiper: {
        el: '.gallery__mini-slider1',
        slidesPerView: 5,
      },
    },
  });


  new Swiper('.gallery__slider2', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    thumbs: {
      swiper: {
        el: '.gallery__mini-slider2',
        slidesPerView: 5,
      }
    },
  });

  new Swiper('.gallery__slider3', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    thumbs: {
      swiper: {
        el: '.gallery__mini-slider3',
        slidesPerView: 5,
      }
    },
  });

  new Swiper('.gallery__slider4', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    thumbs: {
      swiper: {
        el: '.gallery__mini-slider4',
        slidesPerView: 5,
      }
    },
  });

  // Swiper ========================================


  new Swiper('.booking__slider', {
    spaceBetween: 0,
    slidesPerView: 3.3,
    centeredSlides: false,
    navigation: {
      nextEl: '.booking__next',
      prevEl: '.booking__prev',
    },
    pagination: {
      el: '.booking__pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },
    },

    breakpoints: {
      
      1201: {
        centeredSlides: true,
      },
      1441: {
        slidesPerView: 4.3,
      },
      1901: {
        slidesPerView: 5.3,
      },
    },
    

    on: {
      slideChange: function () {
        const slides = document.querySelectorAll('.booking__slide');
        slides.forEach((slide, index) => {
          const slideNumber = index + 1; // Номер слайда (начиная с 1)
          slide.setAttribute('data-slide-number', slideNumber);
        });
      }
    }
  });
  
  // Инициализация номеров слайдов при загрузке страницы
  const slides = document.querySelectorAll('.booking__img');
  slides.forEach((slide, index) => {
    const slideNumber = index + 1; // Номер слайда (начиная с 1)
    slide.setAttribute('data-slide-number', slideNumber);
  });

  
})()
