


jQuery(document).ready(function($){	
	$("#fullpage").hide();
	setTimeout(function(){
        $("#fullpage").fadeIn();
    },3000);

	initMap();

	function fullPage() {
		$('#fullpage').fullpage({
			autoScrolling: false,
			fitToSection: false,
			navigation: true,
			navigationPosition: 'left',
			showActiveTooltip: false
		});
	};
	fullPage();
	

// function logoAnim() {
// 	$( window ).scroll( () => {
// 		if(window.pageYOffset > 20){
// 			$('#logo').addClass('play');
// 		} else {
// 			$('#logo').removeClass('play');
// 		}
// 		console.log("runed second time");
// 	});
// };	
	// $('#fullpage').smoothState({
		
	// 	        debug: true,
	// 	        prefetch: false,
	// 	        // cacheLength: 0,
	// 	        scroll: true,
	// 	        // onBefore: function($currentTarget, $container) {
	// 	        // 	// fullPage();	
	// 	        // },
	// 	        onStart: {
	// 				duration: 250, // Duration of our animation
	// 				render: function ($container) {
	// 					// Add your CSS animation reversing class
	// 					$container.addClass('is-exiting');
	// 					// Restart your animation
	// 					// smoothState.restartCSSAnimations();
	// 					console.log("load on start");
	// 				}
	// 	        },
	// 	        onReady: {
	// 				duration: 0,
	// 				render: function ($container, $newContent) {
	// 					// Remove your CSS animation reversing class
	// 					$container.removeClass('is-exiting');
	// 					// Inject the new content
	// 					$container.html($newContent);
	// 					console.log("load on ready");
	// 				}
	// 	        },
	// 	        onAfter:function($container, $newContent) {
	// 						initMap();
	// 		        		logoAnim();
	// 		        		fullPage();
	// 		        		console.log("load on after");
	// 	        }
	// });
    
 //    console.log("load on page load");


});





