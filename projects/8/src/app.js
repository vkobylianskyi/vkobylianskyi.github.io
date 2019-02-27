import $ from 'jquery';
import Swiper from 'swiper';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/dist/css/swiper.min.css';
import './styles/style.scss';

const DELAY = 1000;

$(window).scroll(onScrollWindow);
$('.top-button, .fa-angle-up').click(onTopBtnClick);
$('.header-top-line__menu-item a').click(onLinkClick);

function onLinkClick() {
    $('html, body').animate(
        {
            scrollTop: $(this.hash).offset().top
        },
        DELAY
    );
}

function onTopBtnClick() {
    $('html,body').animate({ scrollTop: 0 }, DELAY);
}

function onScrollWindow() {
    $(this).scrollTop() > 500
        ? $('.top-button').fadeIn()
        : $('.top-button').fadeOut();
}

const currentWight = window.innerWidth; //ширина вюпорта
let slidesPerView;

if (currentWight < 576) {
    slidesPerView = 1;
}

if (currentWight < 768 && currentWight > 576) {
    slidesPerView = 2;
}

if (currentWight < 992 && currentWight > 768) {
    slidesPerView = 3;
}
if (currentWight > 992) {
    slidesPerView = 5;
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView,
    // spaceBetween: 30,
    freeMode: true, //автоматически расчитывать ширину слайда
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
