var opacity = 0;
var maxOpacity = 0.5;
 
//When uploading to server make sure that this code works
//I don't think www.virusoftware has a path name /virusoftware/ or /virusoftware/index.php
var targetPath_a = "/virusoftware/index.php";
var targetPath_b = "/virusoftware/";

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
    /*its possible to use window.location.href.indexOf("index.php") > -1*/
    if(window.location.pathname === targetPath_a || window.location.pathname === targetPath_b){
        isAtHomePage = true;
    }
    return isAtHomePage;
}