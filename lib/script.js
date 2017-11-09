function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

(function ($) {
  $(document).ready(function(){
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
  });
  
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
  
  $(document).scroll(function(e){
    $(".container-fluid").each(function(){
      var scroll = $(window).scrollTop();
      var top = $(this).position().top;
      var id = $(this).attr("id");
      
      if (typeof id != 'undefined') {
        $('a[href="'+id+'"]').addClass('active');
      }
    });
  });
  
}(jQuery));

