

/* @desc: fixed navigation bar */
/* https://www.nxworld.net/tips/stikcy-or-change-header-and-navigation-when-scrolling-using-jquery.html */

$(function() {
  var $win = $(window),
      $main = $('.main-container'),
      $nav = $('header'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0'); 
    }
  });
});
