$(window).load(function() {
	var $section = $('section.header');
	var windowHeight = $(window).height();
	var sectionHeight = $section.height();
	if (windowHeight > sectionHeight) {
	  	$section.css({'height':(windowHeight)+'px'});
	}
})