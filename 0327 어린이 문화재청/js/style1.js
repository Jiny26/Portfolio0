$(document).ready(function(){
    $('.gnb > li').on('mouseover focusin', function(){
        $(this).children('ul').stop().fadeIn(300);
    });
    $('.gnb > li').on('mouseleave', function(){
        $(this).children('ul').stop().fadeOut(200);
    });
    $('.gnb').on('mouseover focusin', function(){
        $('.bg_gnb').stop().fadeIn(300);
        });
    $('.gnb').on('mouseleave focusout', function(){
        $('.bg_gnb').stop().fadeOut(200);
        }); 
    $('.gnb > li').on('focusout', function() {
        $(this).children('ul').stop().fadeOut(200);
    });

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
            slidesPerView: 5, //한 슬라이드에 보여질 갯수
            spaceBetween: 50, //슬라이스 사이 여백
            /* centeredSlides: true, */ //센터모드
            clickable: true,
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
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            },
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

/*
freeMode : false, // 슬라이드 넘길 때 위치 고정 여부
autoHeight : true,  // 현재 활성 슬라이드높이 맞게 높이조정
a11y : false, // 접근성 매개변수(접근성 관련 대체 텍스트 설정이 가능) 
resistance : false, // 슬라이드 터치 저항 여부
slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
allowTouchMove : true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
watchOverflow : true // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
slidesOffsetBefore : number, // 슬라이드 시작 부분 여백
slidesOffsetAfter : number,
*/