(function($){

$(".parallax").parallax();
$(".toc-content").children().hide();

var pathArray = window.location.href.split( '/' );

if ((pathArray.length > 3) && (pathArray[3] !== "") && (pathArray[3].indexOf("#") == 0)) {
	console.log(pathArray[3]);
	console.log(pathArray.length);
	window.location.href = "#table-of-contents";

	if (pathArray[3] == "#table-of-contents") {
		pathArray[3] = "#letter-from-the-editor";
	} 

	$(pathArray[3]).show();
	$('a[href=' + pathArray[3] + ']').addClass("chapter-active");
	$('a[href=' + pathArray[3] + ']').addClass("disabled");
	
} else {
	$("#letter-from-the-editor").show();
	$('a[href=' + "#letter-from-the-editor" + ']').addClass("chapter-active");
        $('a[href=' + "#letter-from-the-editor" + ']').addClass("disabled");
} 

$(function(){

}); // end of document ready

})(jQuery); // end of jQuery name space
