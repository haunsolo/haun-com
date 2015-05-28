$(document).ready(function(){
	var currentSection = '';

//	$("#main").children('section').hide();


	setTimeout(function() {
	}, 1000);

	setTimeout(function() {
		$("#one").toggleClass("oneon");
	}, 1000);


	$('nav li a').click(function(){
		var sectionClick = $(this).data('link');

		if (sectionClick !== currentSection) {
			$("#main").children('section').hide();
			$("#main #" + sectionClick).show();
		}

	});

});
