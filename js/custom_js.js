
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

  $('.sliding-item').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
  });
});