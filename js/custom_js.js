
$(document).ready(function(){
  $('#header').load("header.html");
    $('#footer').load("footer.html");
  $('.single-item').slick({
    arrows: false,
     dots: true,
     autoplay: true,
  autoplaySpeed: 2000
  });

    $('<span>Amazing responsive carousel</span>').prependTo('.fr-div .slick-dots');
});