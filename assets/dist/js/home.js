$(document).ready(function () {

   $('.reviews__carousel').slick({
      slidesToShow: 1,
      dots: false,
      infinite: true,
      fade: true,
      prevArrow: $('.reviews__arrow--left'),
      nextArrow: $('.reviews__arrow--right')
   });

});



