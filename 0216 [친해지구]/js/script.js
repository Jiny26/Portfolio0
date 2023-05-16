$(document).ready(function(){
    var swiper = new Swiper(".main_banner", {

        slidesPerView: "auto",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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
        slidesPerView: 2,  //초기값 설정 모바일값이 먼저!!
        loop: false,
        breakpoints: {
            600: {slidesPerView: 6}
        }
        });

    
    var btn = $('.mobile_nav');
    $(btn).on('click', function() {
        $('.m_bg').slideToggle();
        $('.close').fadeToggle();
        $('.logo a').toggleClass('hide')
    });
});