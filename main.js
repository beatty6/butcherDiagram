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

//    anime({
//  targets: '.slider',
//  translateX: function(el) {
//    return el.getAttribute('data-x');
//  },
//  translateY: function(el, i) {
//    return 50 + (-50 * i);
//  },
//  scale: function(el, i, l) {
//    return (l - i) + .05;
//  },
//  rotate: function() { return anime.random(-360, 360); },
//  borderRadius: function() { return ['5 0%', anime.random(10, 35) + '%']; },
//  duration: function() { return anime.random(1200, 1800); },
//  delay: function() { return anime.random(0, 400); },
//        translateX:300,
//  direction: 'alternate',
//  loop: true
//});



});
