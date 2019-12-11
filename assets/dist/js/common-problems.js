$(document).ready(function () {
   $('.accordeon .accordeon__head').click(function () {
      $(this).toggleClass('accordeon__head--active').next().slideToggle();
      $('.accordeon .accordeon__head').not(this).removeClass('accordeon__head--active').next().slideUp();
   });

   $('.recommendations__carousel').slick({
      slidesToShow: 3,
      dots: false,
      focusOnSelect: true,
      infinite: true,

      prevArrow: '<button type="button" class="button-arrow button-arrow--left recommendations__arrow recommendations__arrow--left"><i class="icon-right-open"></i></button>',
      nextArrow: '<button type="button" class="button-arrow recommendations__arrow recommendations__arrow--right"><i class="icon-right-open"></i></button>',
      responsive: [
         {
            breakpoint: 1434,
            settings: {
               slidesToShow: 2,
               arrows: true
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
               arrows: false
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false
            }
         }
      ]
   });

   $('.node-carousel__carousel').slick({
      slidesToShow: 4,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      prevArrow: '<button type="button" class="button-arrow button-arrow--left node-carousel__arrow node-carousel__arrow--left"><i class="icon-right-open"></i></button>',
      nextArrow: '<button type="button" class="button-arrow node-carousel__arrow node-carousel__arrow--right"><i class="icon-right-open"></i></button>',
      responsive: [
         {
            breakpoint: 1434,
            settings: {
               slidesToShow: 3,
               arrows: true
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
               arrows: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: true
            }
         }
      ]
   });

   $('.reviews__carousel').slick({
      slidesToShow: 1,
      dots: false,
      infinite: true,
      fade: true,
      prevArrow: $('.reviews__arrow--left'),
      nextArrow: $('.reviews__arrow--right')
   });
});