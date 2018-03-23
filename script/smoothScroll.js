var homePaths = ["", "/", "/index.php", "/virusoftware/", "/virusoftware/index.php"];

$('#services').click(function(){
    "use strict";
     $("#services").attr("href", "index.php#service-section");
    if(isAtHomePage()){
        $("#services").attr("href", "#service-section");
    }
    var positionToScroll = $('#service-section').offset().top;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');

});

$('.contact').click(function(){
    "use strict";
    var positionToScroll = $('.main').offset().top;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
});

$('.logo-container').click(function(){
    "use strict";
    $("#logo-anchor").attr("href", "index.php#home-section");
    if(isAtHomePage()){
        $("#logo-anchor").attr("href", "#home-section");
    }
    var positionToScroll = $('#home-section').offset().top;
    $("html, body").animate({scrollTop: positionToScroll}, '500', 'swing');
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