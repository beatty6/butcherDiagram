$(document).ready(function () {
    $("g").addClass("red-parts");


    $("path").addClass("path");
    //    $(".path").css({fill:"brown",opacity:.5});

    $(".red-parts").mouseover(function () {
        $(this).css({
            opacity: 1
        });
        $(this).find(".path").css({
            opacity: 1,
            fill: "#ffffff",
            stroke: "#FFC0CB",
            strokeWidth: "3"
        });

        anime({
            targets: '.red-parts path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 800,
            direction: 'alternate',
            loop: false
        });
    });


    $(".red-parts").mouseleave(function () {
        $(this).css({
            opacity: .1
        });
        $(".red-parts .path").css({
            opacity: 1,
            stroke: "#FFC0CB",
            strokeWidth: "3"
        });

        anime({
            targets: '.red-parts path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 800,
            direction: 'alternate',
            loop: false
        });
    });



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
    $("div.cut").mouseover(function () {
        anime({
            targets: '.slider',
            translateX: 100,
            duration: 1000,
            direction: 'alternate',
            loop: false
        });
    });
    $("div.cut").mouseleave(function () {
        anime({
            targets: '.slider',
            translateX: 0,
            duration: 1000,
            direction: 'alternate',
            loop: false
        });
    });




});
