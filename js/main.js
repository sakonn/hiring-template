function myMap(){var o=document.getElementById("map"),n={center:new google.maps.LatLng(51.5,-.2),zoom:10};new google.maps.Map(o,n)}!function(o){o(document).ready(function(){o("#top, #navbar-logo").click(function(){return o("body,html").animate({scrollTop:0},1e3),!1})}),o(document).scroll(function(){o(".appear-in").each(function(){o(window).scrollTop()+500>o(this).position().top&&o(this).addClass("appear")})})}(jQuery);