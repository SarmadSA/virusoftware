$('.services').click(function(){
    "use strict";
    var positionToScroll = $('#service-section').offset().top - $('#nav-menu').height() - 30;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
});

$('.logo-container').click(function(){
    "use strict";
    var positionToScroll = $('#home-section').offset().top;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
});

$('.contact').click(function(){
    "use strict";
    var positionToScroll = $('.main').offset().top;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
});


$(document).ready(function() {
    "use strict";
    if(window.location.hash === '#service-section'){
        var positionToScroll = $('#service-section').offset().top - $('#nav-menu').height() - 30;
        $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
    }
});