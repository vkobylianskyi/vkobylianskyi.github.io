import $ from 'jquery';
import Swiper from 'swiper';
import b from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/dist/css/swiper.min.css';
import './styles/style.scss';



(function () {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
    });
})();


// (function(){ß
//     $(document).ready(startApp);
//     const DELAY = 1000;
//     function startApp() {
//         $(window).scroll(onScrollWindow);
//         $('.top-button, .fa-angle-up').click(onTopBtnClick);
//     }

//     function onLinkClick() {
//         $('html, body').animate({
//             scrollTop: $(this.hash).offset().top
//         }, DELAY);
//     }

//     function onTopBtnClick() {
//         $('html,body').animate({ scrollTop: 0 }, DELAY)
//     }

//     function onScrollWindow() {
//         $(this).scrollTop() > 1000 
//             ?  $('.top-button').fadeIn()
//             :  $('.top-button').fadeOut();
//     }

//     function myFunction(x) {
//         x.classList.toggle("change");
//       }
// })();