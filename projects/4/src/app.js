import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import "./styles/style.scss";

(function() {
    $(document).ready(startApp);

    const DELAY = 1000;
    const menu = document.getElementById('menu');
    const toggleBtn = document.getElementById('toggle-hamburger');

    function startApp() {
        toggleMenuLogic();
        $(window).scroll(onScrollWindow);
        $('.top-button, .fa-angle-up').click(onTopBtnClick);
        $('.nav-section__menu-link').click(onLinkClick);
        $('.app-toggle').click(onAppToggleClick);
    }



    function onLinkClick() {
        $('html, body').animate(
            {
                scrollTop: $(this.hash).offset().top
            },
            DELAY
        );

        hideMenuOnSmallDevices();
        toggleMenuButton();
    }

    function onTopBtnClick() {
        $('html,body').animate({ scrollTop: 0 }, DELAY);
    }

    function onScrollWindow() {
        $(this).scrollTop() > 1000
            ? $('.top-button').fadeIn()
            : $('.top-button').fadeOut();
    }

    function onAppToggleClick(event) {
        const target =
            event.target.tagName.toLowerCase() !== 'BUTTON'
                ? event.target.parentElement
                : event.target;

        const toggleBlock = target.dataset.target;

        $(toggleBlock)
            .stop(true, true)
            .slideToggle('slow');
        $(target).toggleClass('closed');
    }

    function toggleMenuLogic() {
        toggleBtn.addEventListener('click', toggleListener);
        hideMenuOnSmallDevices();
    }

    function toggleListener() {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        toggleMenuButton();
    }

    function toggleMenuButton() {
        toggleBtn.classList.toggle('active');
    }

    function hideMenuOnSmallDevices() {
        if (window.innerWidth < 768) {
            menu.style.display = 'none';
        }
    }
})();
