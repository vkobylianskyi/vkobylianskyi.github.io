const init = () => {
    const currentWight = window.innerWidth;
    let slidesPerView;

    if (currentWight < 576) {
        slidesPerView = 1;
    }

    if (currentWight < 768 && currentWight > 576) {
        slidesPerView = 2;
    }

    if (currentWight > 992) {
        slidesPerView = 5;
    }

    const swiper = new Swiper('.swiper-container', {
        slidesPerView,
        spaceBetween: 30,
        freeMode: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
        paginationType: 'bullets',
        paginationClickable: true,
    });
};

document.addEventListener('DOMContentLoaded', init);
