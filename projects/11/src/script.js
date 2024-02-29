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

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

body.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('active');
    }
});