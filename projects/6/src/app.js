import $ from 'jquery';
import PopperJs from 'popper.js';
import b from  'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/style.scss';

(function(){
    $(document).ready(startApp);
    const DELAY = 1000;
    function startApp() {
        $(window).scroll(onScrollWindow);
        $('.top-button, .fa-angle-up').click(onTopBtnClick);
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
        $(this).scrollTop() > 1000 
            ?  $('.top-button').fadeIn()
            :  $('.top-button').fadeOut();
    }

    $('.header__top-line_hamburger').click(myFunction)

    function myFunction(x) {
        this.classList.toggle("change");
      }
})();