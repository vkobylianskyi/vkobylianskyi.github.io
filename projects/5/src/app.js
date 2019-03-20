import $ from "jquery";
import PopperJs from 'popper.js';
import Swiper from 'swiper';
import b from  'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/dist/css/swiper.min.css';
import './styles/style.scss';


$(document).ready(() => {
    const DELAY = 1000;

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
})
