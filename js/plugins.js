// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

$(document).ready(function () {

    //Open the menu
    $("#hamburger").click(function () {

        $('#content').css('min-height', $(window).height());

        $('.mobile-nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();

        //set the content with the width that it has originally
        $('#content').css('width', contentWidth);

        //disable all scrolling on mobile devices while menu is shown
        $('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        $("#container").animate({"marginLeft": ["-70%", 'easeOutExpo']}, {
            duration: 700
        });

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('#contentLayer').css('display', 'block');

    });

    //close the menu
    $("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        $('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        $("#container").animate({"marginLeft": ["", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');
                $('.mobile-nav').css('opacity', 0);
                $('#content').css('min-height', 'auto');

            }
        });
    });

});


// Responsive menu plugin

$(document).ready(function(){

    $(window).on('resize', function(){

        if ($(window).width() < 1140) {
            $('#smallHeader').removeClass('hide');
            $('#sideDrawerNav').removeClass('hide');
            $('#largeHeader').addClass('hide');
        }
        else {
            $('#smallHeader').addClass('hide');
            $('#sideDrawerNav').addClass('hide');
            $('#largeHeader').removeClass('hide');
        }

    }).trigger('resize');

});


// nav scroll color plugin

$(document).ready(function(){       
   var scrollStart = 0;
   // var startChange = $('.hero-message');
   // var offset = startChange.offset();
   $(document).scroll(function() { 
      scrollStart = $(this).scrollTop();
      if(scrollStart > 50) {
          $('#largeHeader').addClass('sticky-nav');
          $('.logo-url').addClass('highlight-color');
          $('.top-bar-nav a').addClass('secondary-color');
       } else {
          $('#largeHeader').removeClass('sticky-nav');
          $('.logo-url').removeClass('highlight-color');
          $('.top-bar-nav a').removeClass('secondary-color');
       }
   });
});

/**
 * geonamesAutocomplete.js
 *
 * JQuery UI Autocomplete Genames JSON API
 * =====================
 * A jquery ui plugin for an autocomplete text field using the geonames.org api and syntax
 *
 */

 $("#locationSearch").jeoCityAutoComplete();


