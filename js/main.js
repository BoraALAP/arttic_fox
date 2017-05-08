jQuery(document).ready(function($){
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false,
		navigation: true,
		navigationPosition: 'left',
		showActiveTooltip: false

	});

	$( window ).scroll( () => {
		if(window.pageYOffset > 20){
			$('#logo').addClass('play');
		} else {
			$('#logo').removeClass('play');
		}
	});
})





