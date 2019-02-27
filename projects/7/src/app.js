(function() {

    $('.foo').click(function(){
        let bodyElem = $(this).parent().parent().parent().parent();
        if(bodyElem.hasClass('opened')){
            bodyElem.removeClass('opened');
        }else{
            bodyElem.addClass('opened');
        }

    })

    $(document).ready(startApp);
})();