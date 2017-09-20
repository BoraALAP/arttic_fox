
						$(function () { // wait for document ready
							// init controller
							var controller = new ScrollMagic.Controller();

							// show pin state



							// build scenes
							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})
								.setPin(".landing_box1")
								.setClassToggle(".landing_box1", "active")
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);

							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 400, offset: 400})
								.setPin(".landing_box2")
								.setClassToggle(".landing_box2", "active")
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);

							new ScrollMagic.Scene({triggerElement: "#trigger", duration: 400, offset: 800})
								.setPin(".landing_box3")
								.setClassToggle(".landing_box3", "active")
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
						});



					jQuery(document).ready(function($){

	// $("body").hide();
	// setTimeout(function(){
	//       $("body").fadeIn();
	//   },1500);

	function fullPage() {
		$('#fullpage').fullpage({
			anchors: ['section1', 'section2', 'section3', 'section4'],
			autoScrolling: false,
			lockAnchors: true,
			setLockAnchors:true,
			setFitToSection: false,
			fitToSection: false,
			navigation: true,
			navigationPosition: 'left',
			showActiveTooltip: false,
			navigationTooltips: ['Welcome', 'We did', 'We Do', 'Wave'],
			scrollOverFlow: true,
			lazyLoading:true,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			animateAnchor: true,
			verticalCentered: true,
      bigSectionsDestination: top,
			scrollHorizontally: true
		});
	};

	$( window ).scroll( () => {
		if(window.pageYOffset > 20){
			$('#header').addClass('play');
		} else {
			$('#header').removeClass('play');
		}
	});
fullPage();
initMap();

})
