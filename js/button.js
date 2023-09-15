$(document).ready(function() {
    //Gnb 버튼    
        var burger = $('.menu-trigger');
        var list = $('#gnb li');

            burger.each(function(index){
            var $this = $(this);

            if (matchMedia("screen and (max-width: 760px)").matches) {
            $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
            $('#gnb').fadeIn(700).toggleClass('on')
            $('header').css({height: `100vh`})
            });
            $(list).on('click', function() {
                $('#gnb').fadeOut(700).removeClass('on')
                $(burger).removeClass('active-1');
                $('header').css({height: `40px`})
            });
        };
    });
});