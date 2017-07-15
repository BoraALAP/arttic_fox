$(function(){


  $('#main').fullpage({
    autoScrolling: true,
    fitToSection: true,
    navigation: true,
    navigationPosition: 'left',
    showActiveTooltip: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    responsiveHeight: 4000

  }); 
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 0,
        onStart: {
          duration: 250, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();

          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        },
        onAfter:function($container, $newContent) {
                                   
                  console.log("load on after");
              }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});
