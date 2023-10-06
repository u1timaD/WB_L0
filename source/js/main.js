import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const ACCORDION_BUTTON_AVAILABLE = document.querySelector('.available .accordion__button');
  const ACCORDION_BUTTON_ABSENCE = document.querySelector('.absence .accordion__button');
  const ACCORDION_ARROW_AVAILABLE = document.querySelector('.available .accordion__arrow');
  const ACCORDION_ARROW_ABSENCE = document.querySelector('.absence .accordion__arrow');

  const BASKET_LIST_AVAILABLE = document.querySelector('.available .basket__list');
  const BASKET_LIST_ABSENCE = document.querySelector('.absence .basket__list');


  ACCORDION_BUTTON_AVAILABLE.addEventListener('click', function () {
    BASKET_LIST_AVAILABLE.classList.toggle('basket__list--closed');
    ACCORDION_ARROW_AVAILABLE.classList.toggle('accordion__arrow--closed');
  });

  ACCORDION_BUTTON_ABSENCE.addEventListener('click', function () {
    BASKET_LIST_ABSENCE.classList.toggle('basket__list--closed');
    ACCORDION_ARROW_ABSENCE.classList.toggle('accordion__arrow--closed');
  });


  const accordion__checkbox = document.querySelector('.accordion__checkbox input');
  const all_accordion__checkbox = document.querySelectorAll('.product__checkbox input');

  all_accordion__checkbox.forEach((check)=> {
    accordion__checkbox.addEventListener('click', function () {
      if (accordion__checkbox.checked) {
        check.checked = true;
      } else {
        check.checked = false;
      }
    });


  })




});
// Utils
// ---------------------------------


iosVhFix();

// Modules
// ---------------------------------

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  initModals();


});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
