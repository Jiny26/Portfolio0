$(function() {
    var tab = $('.tab li');
    tab.on('click', function() {
        var idx = $(this).index();
        var tab_con = $(this).parents('.tabGroup').children('.tabContent').eq(idx);
        
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        tab_con.addClass('on');
        tab_con.siblings('.tabContent').removeClass('on');
    });
});