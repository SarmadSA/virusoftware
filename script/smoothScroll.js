var homePaths = ["", "/", "/index.php", "/virusoftware/", "/virusoftware/index.php"];

$('#services').click(function(){
    "use strict";
    if(isAtHomePage()){
        console.log("at home page");
        //add #service-section to herf
        $("#services").attr("href", "index.php#service-section");
        var positionToScroll = $('#service-section').offset().top - $('#nav-menu').height() - 30;
        $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
        //remove #service-section from herf
    }
    else{
        console.log("cookie created");
        localStorage.setItem("servicesClicked", "true");    
    }
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
    if(localStorage.getItem("servicesClicked")){
        var positionToScroll = $('#service-section').offset().top - $('#nav-menu').height() - 30;
        $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
        localStorage.removeItem("servicesClicked");
    }
});

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