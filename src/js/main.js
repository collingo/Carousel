require([
	"jquery",
	"carousel"
],
function(
	$,
	Carousel
) {

    $(function() {
    	var carousel = new Carousel({
    		element: $('div.photos'),
    		debug: true
    	});
    });

});
