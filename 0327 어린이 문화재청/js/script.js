$(function() {
    $('.btn_menu').on('click', function(){
        $('.nav_area').stop().animate({right:0
        },800);
    });
});

$(function() {
    $('.btn_close').on('click', function(){
        $('.nav_area').stop().animate({right:'-100%'
        },800);
    });
});