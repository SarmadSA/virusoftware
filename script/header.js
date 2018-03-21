var opacity = 0;
var maxOpacity = 0.5;
var scroll = 0;

$( document ).ready(function() {
    "use strict";
    if(window.location.pathname === "/virusoftware/index.php" || window.location.pathname === "/virusoftware/"){
        var backgroundColor = "rgba(0,0,0," + 0 + ")";
        $("#nav-menu").css("background-color", backgroundColor);   
    }
    else{
        var backgroundColor = "rgba(0,0,0," + 1 + ")";
        $("#nav-menu").css("background-color", backgroundColor);   
    }
    console.log(window.location.pathname);
});

$(window).scroll(function() {
    "use strict";
    scroll = $(window).scrollTop();
    var backgroundColor = "rgba(0,0,0," + opacity + ")";
    /*its possible to use window.location.href.indexOf("index.php") > -1
        when uploading server make sure that this code works
        i don't think www.virusoftware
    */
    if (window.location.pathname === "/virusoftware/index.php" || window.location.pathname === "/virusoftware/") {
        if(scroll/1000 <= maxOpacity){
            opacity = scroll/1000;
        }
        else{
            opacity = maxOpacity;
        }  
    }
    else{
        opacity = 0.7;             
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