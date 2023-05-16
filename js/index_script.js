$(function(){
    $('.title1').delay().animate({
        opacity : 1
    }, 500, function(){
        $('.title_group > .main_title').delay(300).animate({
            opacity: 1,
            marginBottom: 50
        }, 700, function(){
            $('.title_group .btn_area').delay(300).animate({
                opacity: 1
            }, 500, function(){
                $('.desc').delay(200).animate({
                    opacity: 1
                }, 500, function(){
                    $('.btn_view').delay(200).animate({
                        opacity: 1
                    })
                });
            });
        });
    });
});
/* 메소드 체인 방식 */
/* delay(1000) 1초 뒤에 나왔으면 좋겠어 */