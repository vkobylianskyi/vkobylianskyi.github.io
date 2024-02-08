import $ from 'jquery';

import './styles/style.scss';

$(document).ready(startApp);

const DELAY = 1000;

function startApp() {
    $(window).scroll(onScrollWindow);
    $('.top-button, .fa-angle-up').click(onTopBtnClick);
    $('.header-top-line__menu-item a').click(onLinkClick);
}

function onLinkClick() {
    const target = $(this.hash);
    $('html, body').animate({
        scrollTop: target.offset().top
    }, DELAY);
}

function onTopBtnClick() {
    $('html, body').animate({ scrollTop: 0 }, DELAY);
}

function onScrollWindow() {
    const topButton = $('.top-button');
    $(this).scrollTop() > 1000 ? topButton.fadeIn() : topButton.fadeOut();
}

const hamburgerMenu = document.querySelector('.hamburger-inner');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});