$(window).load(function() {
	var $section = $('section');
	var windowHeight = $(window).height();
	var sectionHeight = $section.height();
	if (windowHeight > sectionHeight) {
	  	$section.css({'height':(windowHeight)+'px'});
	}
})