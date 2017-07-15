


jQuery(document).ready(function($){	

function fullPage() {
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false,
		navigation: true,
		navigationPosition: 'left',
		showActiveTooltip: false,
	});
};



function logoAnim() {
	$( window ).scroll( () => {
		if(window.pageYOffset > 20){
			$('#logo').addClass('play');
		} else {
			$('#logo').removeClass('play');
		}
		console.log("runed second time");
	});
};	
	$('#fullpage').smoothState();
    fullPage();


    $(function(){
		'use strict';
		var $page = $('#fullpage'),
	      	options = {
		        debug: true,
		        prefetch: true,
		        cacheLength: 2,
		        scroll: true,
		        // onBefore: function($currentTarget, $container) {
		        // 	// fullPage();	
		        // },
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
		        onAfter: function($container, $newContent) {
							initMap();
			        		fullPage();
			        		logoAnim();
		        }
	      	},
		smoothState = $page.smoothState(options).data('smoothState');
	});
})





