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
    
    //Fill logo when header background opacity > 0.2.
    if(opacity > 0.2){
        $(".svg-logo .cls-1").css("fill", "#00FF00");
        $(".svg-logo .cls-2").css("fill", "#00FF00");
    }
    else{
        $(".svg-logo .cls-1").css("fill", "white");
        $(".svg-logo .cls-2").css("fill", "white");
    }
});