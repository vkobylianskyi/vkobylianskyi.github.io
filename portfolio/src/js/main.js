(function($) {

	"use strict";

    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({items: 1, dots: true});
      });

})(jQuery);