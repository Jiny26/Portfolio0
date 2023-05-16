$(function(){
    alert('모바일 화면에 최적화된 페이지 입니다')
    var select_attr = $('header nav a, header nav button');

    $(window).on('resize load', function() {
        var width = $(window).width(); //window의 width값을 변수에 저장

        if (width < 721) {
            attrs(); //사용자정의 함수 -> 하단에 기술 예정
        } else {
            removeAttrs(); //721보다 윈도우 width가 크면 실행되는 사용자정의 함수
            $('.dim').fadeOut();
            $('header nav').removeClass('on');
        }
    });
    $('.btn_nav').on('click', function(){
        var width = $(window).width();
        if (width < 721) {
            $('header nav').addClass('on');
            $('header nav a:nth:child(4)').focus();
            $('.dim').fadeIn();
            removeAttrs();
        }
    });
    $('header .close').on('click', function(){
        $(this).parent().removeClass('on');
        $('.dim').fadeOut();
        attrs();
    });
    //사용자 정의 함수
    function attrs() {
        select_attr.attr({
            'tabindex': '-1' //tab키를 누르면 제일 먼저 잡히도록
        });
    }

    function removeAttrs() {
        select_attr.removeAttr('tabindex')
    }

    /* visual swiper */
    var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".control",
            type: "fraction",
        },
});

    /* swiper autoplay setting */
    $("button.play").on("click", function() {
        $(this).fadeOut().siblings('button.stop').fadeIn();
            swiper1.autoplay.start();
    });
    $("button.stop").on("click", function() {
        $(this).fadeOut().siblings('button.play').fadeIn();
        swiper1.autoplay.stop();
    });
    /* button */
    $('.btn1').click(function(){
        $('.content1').addClass('selected').siblings().removeClass('selected');
    });
    $('.btn2').click(function(){
        $('.content2').addClass('selected').siblings().removeClass('selected');
    });
    $('.btn3').click(function(){
        $('.content3').addClass('selected').siblings().removeClass('selected');
    });
    $('.btn4').click(function(){
        $('.content4').addClass('selected').siblings().removeClass('selected');
    });
    /* 외부영역 클릭시 클래스 지우기 */
    $(document).mouseup(function (e){
        var LayerPopup = $(".point_content");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("selected");
        }
    });

    /* book swiper */
    var swiper = new Swiper(".bookSwiper", {
        slidesPerView: 1, //한 슬라이드에 보여질 갯수
        centeredSlides: true, //센터모드
        loop: true,
        loopAdditionalSlides : 1,
        // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        rewind: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: { //자동 슬라이드 (false는 비활성화)
            delay : 3000 //시간
            /* disableOnInteraction: false, */ //스와이프 후 자동재생
        }
    });

$("div.swiper-button-play").on("click", function() {
    $(this).fadeOut().siblings('div.swiper-button-stop').fadeIn();
    swiper.autoplay.start();
});
$("div.swiper-button-stop").on("click", function() {
    $(this).fadeOut().siblings('div.swiper-button-play').fadeIn();
    swiper.autoplay.stop();
});
});