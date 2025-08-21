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

// Галерея ------------------------------

new Swiper('.gallery__slider1' , {
  
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
    }
  },


  // // как медиазапросы только работают в порядке возростания
  // breakpoints: {
  //   601: {
  //     slidesPerView: 3,
  //   },
  //   801: {
  //     spaceBetween: 32,
  //   },
  //   1101: {
  //     slidesPerView: 4,
  //   }
  // }
});
new Swiper('.gallery__slider2' , {
  
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
      el: '.gallery__mini-slider2',
      slidesPerView: 5,
    }
  },


  // // как медиазапросы только работают в порядке возростания
  // breakpoints: {
  //   601: {
  //     slidesPerView: 3,
  //   },
  //   801: {
  //     spaceBetween: 32,
  //   },
  //   1101: {
  //     slidesPerView: 4,
  //   }
  // }
});
new Swiper('.gallery__slider3' , {
  
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
      el: '.gallery__mini-slider3',
      slidesPerView: 5,
    }
  },


  // // как медиазапросы только работают в порядке возростания
  // breakpoints: {
  //   601: {
  //     slidesPerView: 3,
  //   },
  //   801: {
  //     spaceBetween: 32,
  //   },
  //   1101: {
  //     slidesPerView: 4,
  //   }
  // }
});
new Swiper('.gallery__slider4' , {
  
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
      el: '.gallery__mini-slider4',
      slidesPerView: 5,
    }
  },


  // // как медиазапросы только работают в порядке возростания
  // breakpoints: {
  //   601: {
  //     slidesPerView: 3,
  //   },
  //   801: {
  //     spaceBetween: 32,
  //   },
  //   1101: {
  //     slidesPerView: 4,
  //   }
  // }
});


// ТАБЫ------------------------------------

// const tabControls = document.querySelector('.tab__controls');

//   tabControls.addEventListener('click', toggleTab);

//   function toggleTab(e) {
    
//     const tabControl = e.target.closest('.tab__controls-link');
    
//     if (!tabControl) return;
//     e.preventDefault(); 
//     if (tabControl.classList.contains('tab__controls-link--active')) return;
    
//     const tabContentId = tabControl.getAttribute('href'); // показывает значение атрибута href, кнопки, на которую мы нажали
//     const tabContent = document.querySelector(tabContentId); // в tabContentId записывается значение атрибута href, который в свою очередь ссылается на ID соответствующего тэга
//     const activeContent = document.querySelector('.tab-content--show');
//     const activeControl = document.querySelector('.tab__controls-link--active')


//     activeContent.classList.remove('tab-content--show');
//     tabContent.classList.add('tab-content--show')

//     activeControl.classList.remove('tab__controls-link--active');
//     tabControl.classList.add('tab__controls-link--active')
//   };




  const tabs = document.querySelectorAll(".tab__controls-item");
    const descriptions = document.querySelectorAll(".gallery__param");
    const galleries = document.querySelectorAll(".tab-content");
    // const sliderMini = document.querySelectorAll(".mini-slider-content");
    
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

            // Убираем active у всех
            tabs.forEach(t => t.classList.remove("tab-content--show"));
            descriptions.forEach(d => d.classList.remove("tab-content--show"));
            galleries.forEach(g => g.classList.remove("tab-content--show"));
            // sliderMini.forEach(m => m.classList.remove("tab-content--show"));

            // Добавляем active к выбранным
            tab.classList.add("tab-content--show");
            document.querySelector(`.gallery__param[data-tab="${target}"]`).classList.add("tab-content--show");
            document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add("tab-content--show");
            // document.querySelector(`.mini-slider-content[data-tab="${target}"]`).classList.add("tab-content--show");
        });
    });

})()
