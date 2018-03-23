var opacity = 0;
var maxOpacity = 0.5;
var homePaths = ["", "/", "/index.php", "/virusoftware/", "/virusoftware/index.php"];

$(document).ready(function() {
    "use strict";
    var backgroundColor = "rgba(0,0,0," + 0.7 + ")";
    if(isAtHomePage()){
        backgroundColor = "rgba(0,0,0," + 0 + ")"; 
    }
    setHeaderBackgroundColor(backgroundColor);
});

$(window).scroll(function() {
    "use strict";
    var pixelsScrolled = $(window).scrollTop();
    var backgroundColor = "rgba(0,0,0," + opacity + ")";
    
    if (isAtHomePage()) {
        setOpacity(pixelsScrolled);
        fillLogoOnscroll(pixelsScrolled,200);
        setHeaderBackgroundColor(backgroundColor);
    }
    else{
        fillLogoOnscroll(pixelsScrolled,30);
    }
});


function setOpacity(pixelsScrolled){
    "use strict";
    if(pixelsScrolled/1000 <= maxOpacity){
        opacity = pixelsScrolled/1000;
    }
    else{
        opacity = maxOpacity;
    } 
}

function fillLogoOnscroll(pixelsScrolled, pixelsScrolledToFill){
    "use strict";
    var fillColor = "white";
    if(pixelsScrolled > pixelsScrolledToFill){
        fillColor = "#00FF00";
    }
    $(".cls-1").css("fill", fillColor);
    $(".cls-2").css("fill", fillColor);
}

function setHeaderBackgroundColor(color){
    "use strict";
    $("#nav-menu").css("background-color", color);
}

function isAtHomePage(){
    "use strict";
    var isAtHomePage = false;
    homePaths.forEach(function(element){
        if(window.location.pathname === element){
            isAtHomePage = true;
        }
    });
    return isAtHomePage;
}