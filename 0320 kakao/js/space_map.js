$(function() {
    var tab = $('.tab li');
    tab.on('click', function() {
        var idx = $(this).index();
        var tab_con = $(this).parents('.tabGroup').children().children('.tabContent').eq(idx);
        
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        tab_con.addClass('on');
        tab_con.siblings('.tabContent').removeClass('on');
    });

    $(function() {
        let totalNum = $('.tabContent.on .vis > img').length; //갯수를 알려주는 속성
        let currentNum = 1; //현재 이미지 갯수

        $('.next_btn').click(function(){
            currentNum++; //currentNum = currentNum + 1
            if (currentNum > totalNum) {
                currentNum = 1; //초기화 하는 작업
            };
            $('.tabContent.on .vis img:first').insertAfter('.tabContent.on .vis img:last');
        });
        $('.prev_btn').click(function(){
            currentNum--; //currentNum = currentNum - 1
            if (currentNum < 1) {
                currentNum = totalNum;
            };
            $('.tabContent.on .vis img:last').insertBefore('.tabContent.on .vis img:first');
        });
        $('.tab li button').click(function() {
            $('.tabGroup .slide > img'). fadeOut();
            $('.tabGroup .slide button').fadeIn();
        })
    });
});