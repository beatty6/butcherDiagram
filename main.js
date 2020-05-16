$(document).ready(function () {

    $("div.cut").mouseover(function () {
        $(this).children(".slider-wrapper").css({
            display: "grid"
        });
    });
    //Outline the cow

    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        //            delay: function (el, i) {
        //                return i * 250
        //            },
        direction: 'alternate',
        loop: false
    });


    //    RATINGS PAGE ***




});
