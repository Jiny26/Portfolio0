$(function() {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 1300
    });
});
/*     $('#container').fullpage({
        //option
        navigator: true, //구간별로 이동되는 버튼
        navigationPosition : 10,

        KeyboardScrolling: true,
        scrollingSpeed: 1000,
        scrollOverflow: true,
        dragAndMove: true,
        touchSensitivity: 15,
        //로고 눌렀을 때 첫페이지로 이동
        
        //callback
        afterLoad: function(anchorLink, index) {

        }
    });
    $('.logo').on('click', function(){
        $.fn.fullpage.moveTo(1);
    });
    $.fn.fullpage.satAllowScrolling(false);
 */
    


/* 출처 : https://blog.naver.com/coding-/221432074882 */