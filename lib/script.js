function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

(function ($) {
  // Back to top button
  $(document).ready(function(){
    $('#top, #navbar-logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
  });

  // Appear animation
  $(document).scroll(function(){
    $(".appear-in").each(function(){
      var scroll = $(window).scrollTop();
      var position = $(this).position();
      var top = position.top;

      if (scroll + 500 > top){
        $(this).addClass("appear");
      }
    });
  });
    
}(jQuery));
