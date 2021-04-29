$(function () {
    'use strict';
    // Slider Height
    var winH    = $(window).height(),
        upperH  = $('.bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
    //slider show iarow
    $('.slider').mouseover(function(){
        $('.btn1, .btn2').show();
    });
    $('.slider').mouseleave(function(){
        $('.btn1, .btn2').hide();
    });
    /* jQuery to animate element on viewport */
    function onScrollInit( items, trigger ) {
        items.each( function() {
          var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');
          osElement.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
          });
          var osTrigger = ( trigger ) ? trigger : osElement;
          osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
          },{
            triggerOnce: true,
            offset: '90%'
          });
        });
      }
      onScrollInit( $('.os-animation'));
      onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));
  // Featured Work Shuffle.
  $(".featured-work ul li").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active");
    if($(this).data("class") === "all"){
      $('.shuffle-imgs .col-md .content').show();
    }else{
      $('.shuffle-imgs .col-md .content').hide();
      $($(this).data('class')).parent().show();
      }
  });
  //testimonials show iarow
  $('.testimonials').mouseover(function(){
    $('.btn1, .btn2').show();
  });
  $('.testimonials').mouseleave(function(){
    $('.btn1, .btn2').hide();
  });
  //counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
});