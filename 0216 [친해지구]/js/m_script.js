$(document).ready(function(){
    var swiper = new Swiper(".main_banner", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        
    });
    var swiper = new Swiper(".cont_swiper", {
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        },
    });
    $('.cont_name> li').on('click', function() {
        let i = $(this).index();
        $('li > a').removeClass('on');
        $('li > a').eq(i).addClass('on');
        $('.img_box > div').removeClass('on');
        $('.img_box > div').eq(i).addClass('on');       
    })

    $('.counter').counterUp({
        delay: 50,
        time: 1000
    });

    var swiper = new Swiper(".category", {
        slidesPerView: 2,
        centeredSlids: true,
        loop: true
        });

    var btn = $('.mobile_nav');
    $(btn).on('click', function() {
        $('.m_bg').slideToggle();
        $('.close').fadeToggle()
    });
});