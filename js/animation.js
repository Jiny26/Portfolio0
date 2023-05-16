$(function(){
    /* header animation */
    $('.text_box p strong').delay(1800).animate({
        opacity: 0
    },500, function(){
        $('.logo').delay().animate({
            opacity: 1,
            top: 6.5 + "vh",
        },500, function(){
            $('.btn').delay().animate({
                opacity : 1
            },200, function(){
                $('#gnb li:nth-child(1)').delay(200).animate({
                    opacity: 1
                },200, function(){
                    $('#gnb li:nth-child(2)').delay(200).animate({
                        opacity: 1
                    },200, function(){
                        $('#gnb li:nth-child(3)').delay(200).animate({
                            opacity: 1
                        });
                    });
                });
            });
        });
    });

    /* 전체 물결 */
    $("body").ripples({
        resolution: 500, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
        perturbance: 0.04, // 잔물경 굴절 강도. 0은 굴절 없음
    });


    /* About Skill Tap */
    var tab = $('.icon li');
    tab.on('click', function() {
        var idx = $(this).index();
        var tab_con = $(this).parents('.ski_box').children('.skil_t').eq(idx);

        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        tab_con.addClass('on');
        tab_con.siblings('.skil_t').removeClass('on');
    }); 

    /* 복사 */
    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        }
        $('#copybtn1').click(function() {
            var textCopy = '01077275516'
            copyToClipboard(textCopy);
            alert('번호 복사 완료! 감사합니다 :D');
        });
        $('#copybtn2').click(function() {
            var textCopy = 'jinheechoi93@gmail.com'
            copyToClipboard(textCopy);
            alert('메일 복사 완료! 감사합니다 :D');
        });
});