const DELAY = 1000;

function startApp() {
    $(window).scroll(onScrollWindow);
    $('.top-button, .fa-angle-up').click(onTopBtnClick);
    $('.header-top-line__menu-item a').click(onLinkClick);
}

function onLinkClick() {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, DELAY);
}

function onTopBtnClick() {
    $('html,body').animate({ scrollTop: 0 }, DELAY)
}

function onScrollWindow() {
    $(this).scrollTop() > 500 
        ?  $('.top-button').fadeIn()
        :  $('.top-button').fadeOut();
}

const init = () => {
    const currentWight = window.innerWidth;//ширина вюпорта
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
        freeMode: true,//автоматически расчитывать ширину слайда
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
    });
};

document.addEventListener('DOMContentLoaded', init);

$(document).ready(startApp);