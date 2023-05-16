$(function() {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".control",
        },
        autoplay: {
            delay: 3000,
        },
        clickable: true,
        loop: true,
        rewind: true
    });
});