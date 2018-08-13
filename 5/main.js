document.addEventListener('DOMContentLoaded', init);

function init() {
    $('.header-content').click(function () {
        $(window).scrollTop(0);
    });
}