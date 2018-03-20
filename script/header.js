var opacity;
var maxOpacity = 0.5;

$(window).scroll(function() {
    "use strict";
    var scroll = $(window).scrollTop();
    var backgroundColor = "rgba(0,0,0," + opacity + ")";
    if(scroll/1000 <= maxOpacity){
        opacity = scroll/1000;
    }
    else{
        opacity = maxOpacity;
    }
    //change the opacity of header background on scroll.
    $("#nav-menu").css("background-color", backgroundColor);    
});