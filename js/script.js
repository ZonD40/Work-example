require('es6-promise').polyfill();

import  tabs    from './modules/tabs';
import  modal   from './modules/modal';
import  timer   from './modules/timer';
import  calc    from './modules/calc';
import  slider  from './modules/slider';
import  cards   from './modules/cards';
import  forms   from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {

    

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2022-9-10');
    calc();
    slider({
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    cards();
    forms('form');
});   

