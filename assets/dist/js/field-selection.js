$(document).ready(function () {

   jcf.replaceAll();

   $('.accordeon .accordeon__head').click(function () {
      $(this).toggleClass('accordeon__head--active').next().slideToggle();
      $('.accordeon .accordeon__head').not(this).removeClass('accordeon__head--active').next().slideUp();
   });


});