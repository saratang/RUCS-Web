(function($) {
	function scrollToContents() {
		$('html, body').animate({
			scrollTop: $("#table_of_contents").offset().top
		}, 500);
	}

	$(function() {
		$("#enter-button").click(function() {
			scrollToContents();
		});

	$(".collection-item").click(function(e) {
		element_id = $(this).attr('href');
		$(".collection").children().removeClass('active');
		$(".collection").children().removeClass('disabled');
		$(this).addClass('active');
		$(this).addClass('disabled');
		$(".toc-content").children().hide();
		$(element_id).show();
		e.preventDefault();
	});

	// $(".marginless-card-panel").hover(
	// 	function() {
	// 		$(this).addClass('z-depth-3');
	// 	}, function() {
	// 		$(this).removeClass('z-depth-3');
	// 	}
	// );


	// 	var options = [
	// 		{selector: '#index-banner', offset: 0,
	// 		callback: "scrollToContents()"}
	// 	];
	// 	Materialize.scrollFire(options);
	});
})(jQuery);