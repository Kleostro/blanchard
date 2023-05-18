// Выбор

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".trend__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})


// Выбор-2

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
     itemSelectText: "",
  });

});

// Выбор-3

let tabsBtn = document.querySelectorAll('.years__item-link');
let tabsItem = document.querySelectorAll('.painer__left');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){

    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('years__item-link--active')});
    e.currentTarget.classList.add('years__item-link--active');

    tabsItem.forEach(function(element){ element.classList.remove('painer__left--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('painer__left--active');

  })
})


// Свайперы

new Swiper ('.hero__swiper', {
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },

  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },

  // effect: 'cube',
  // cubeEffect: {
  //   slideShadows: false,
  // },
});

new Swiper ('.gallery__swiper', {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
    clickable: true,
  },

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  breakpoints: {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    1760: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

new Swiper ('.events__swiper', {
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-events',
    clickable: true,
  },

  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,

  breakpoints: {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1013: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

new Swiper ('.partners__swiper', {
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: '.swiper-button-prev-partners',
    nextEl: '.swiper-button-next-partners',
    clickable: true,
  },

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  breakpoints: {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    670: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});


// Аккордеон

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.years', {
  duration: 700,
  elementClass: 'years__item',
  triggerClass: 'years__item-top',
  panelClass: 'years__item-bottom',
});

let accBottom = document.querySelectorAll('.years__item-bottom');
accBottom.forEach(e => {

  e.addEventListener('click',
  function() {

    e.classList.toggle('years__item-top--bottom');

})
})
});



// Карта

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark ( [55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/location.svg',
      iconImageSize: [20, 20]
    });

myMap.geoObjects.add(myPlacemark);
}


// Валидация формы

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         name: "Вы не ввели имя",
         phone: {
           required: "Вы не ввели телефон",
           function: "Не достаточно количество символов"
         }
       }
    });


    // Якоря

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true
    });

    // Бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__item-link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');


  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})


// Раскрывающийся поиск

const texts = document.querySelector(".search-tablet");
const lefelBlock = document.querySelector(".search-open");
texts.onclick = () => {
lefelBlock.classList.add('search-open--active');
};

let navSearch = document.querySelector('.search-tablet');
let searchFromWrapper = document.querySelector(".search-open");
navSearch.addEventListener('click',

  function () {

    navSearch.classList.add('search--active');
    searchFromWrapper.classList.add("search-open--active");
  })

  let searchClosed = document.querySelector('.serch-form-closed');

  searchClosed.addEventListener('click',

    function () {

      navSearch.classList.remove('search--active');
      lefelBlock.classList.remove('search-open--active');
      searchFromWrapper.classList.remove("search-open--active");
    })


// Тултипы

  let tooltipActive = document.querySelectorAll('.project__icon');
tooltipActive.forEach(e => {

  e.addEventListener('click',
  function() {

    e.classList.toggle('tooltip--active');

})
})
