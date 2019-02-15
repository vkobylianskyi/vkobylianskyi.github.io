
const currentWight = window.innerWidth;
let slidesPerView;

if (currentWight < 576) {
    slidesPerView = 1;
}

if (currentWight < 768 && currentWight > 576)  {
    slidesPerView = 2;
}

if (currentWight > 992)  {
    slidesPerView = 4;
}


var swiper = new Swiper('.swiper', {
    slidesPerView,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-angle-right',
        prevEl: '.swiper-angle-left',
      },
  });