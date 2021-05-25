$(function(){
  $(window).on('load',function(){
    $('.global-nav').clone(true).prependTo('.left-menu,.left-exterior,.left-event,.left-access,.left-reservation');
  });

  $('.menu-line').on('click',function(){
    $('.menu-category').fadeIn('slow');
    $('.right-side-area').css('opacity',.5);
  });

  $('.close-btn').on('click',function(){
    $('.menu-category').fadeOut('slow');
    $('.right-side-area').css('opacity',1);
  });

  $('.menu-category li').on('click',function(){
    var target = $(this).attr('data-target');
    target = '.' + target;
    $(target).addClass('active').fadeIn().siblings().removeClass('active').fadeOut();
    $('.menu-category').fadeOut('slow');
    $('.right-side-area').css('opacity',1);
  });
});
