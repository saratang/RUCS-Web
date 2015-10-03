(function($){
$(".toc-content").children().hide();
	// $("#foreword").show();
  $(function(){
	$(".collection-item").click(function(e) {
		element_id = $(this).attr('href');
		$(".collection").children().removeClass('active');
		$(this).addClass('active');
		$(".toc-content").children().hide(0, function() {
			$(element_id).show();
		});

		e.preventDefault();
	});

  }); // end of document ready

})(jQuery); // end of jQuery name space