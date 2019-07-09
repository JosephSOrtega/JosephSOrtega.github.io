"use strict";


(function () {
    // $("button").click(function() {
    //     $('html,body').animate({
    //             scrollTop: $("main").offset().top},
    //         'slow');
    // });

$(window).scroll(function () {
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 800);
});

})();

