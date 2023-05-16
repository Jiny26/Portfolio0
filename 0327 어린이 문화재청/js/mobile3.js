$(document).ready(function(){
    $('.menu').on('click', function() {
        $('header nav, .dim').fadeIn();
        $('header nav a:first').focus();
        /* nav가 활성화 되자마자 로그인 버튼에 포커스가 잡히도록 함 */
    });
    $('.dim').on('click', function(){
        $('header nav, .dim').fadeOut();
    });
    $('.lnb li:last a').on('blur', function(){
        $('header nav, .dim').fadeOut(300);
        $('menu').focus();
    });
}) 